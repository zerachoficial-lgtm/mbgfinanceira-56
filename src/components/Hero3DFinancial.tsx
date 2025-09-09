import { useEffect, useRef, useMemo } from 'react';
import * as THREE from 'three';

interface Hero3DFinancialProps {
  className?: string;
}

const Hero3DFinancial = ({ className }: Hero3DFinancialProps) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<number>();
  const sceneRef = useRef<{
    scene: THREE.Scene;
    camera: THREE.PerspectiveCamera;
    renderer: THREE.WebGLRenderer;
    particles: THREE.Points;
    dollarSigns: THREE.Group[];
    coins: THREE.Mesh[];
    mouseX: number;
    mouseY: number;
  }>();

  const isMobile = useMemo(() => {
    return typeof window !== 'undefined' && window.innerWidth < 768;
  }, []);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    mountRef.current.appendChild(renderer.domElement);

    // Create financial shapes
    const dollarSigns: THREE.Group[] = [];
    const coins: THREE.Mesh[] = [];
    
    // Dollar sign geometry (using text geometry approximation with shapes)
    const createDollarSign = () => {
      const group = new THREE.Group();
      
      // Vertical line
      const lineGeometry = new THREE.CylinderGeometry(0.02, 0.02, 1.5);
      const lineMaterial = new THREE.MeshPhongMaterial({
        color: 0xD4AF37,
        transparent: true,
        opacity: 0.8,
      });
      const line = new THREE.Mesh(lineGeometry, lineMaterial);
      group.add(line);
      
      // S curves (approximated with torus segments)
      const curve1Geometry = new THREE.TorusGeometry(0.3, 0.05, 8, 16, Math.PI);
      const curve1 = new THREE.Mesh(curve1Geometry, lineMaterial);
      curve1.position.y = 0.2;
      curve1.rotation.z = Math.PI;
      group.add(curve1);
      
      const curve2 = new THREE.Mesh(curve1Geometry, lineMaterial);
      curve2.position.y = -0.2;
      group.add(curve2);
      
      return group;
    };

    // Create dollar signs
    const dollarCount = isMobile ? 3 : 5;
    for (let i = 0; i < dollarCount; i++) {
      const dollarSign = createDollarSign();
      dollarSign.position.set(
        (Math.random() - 0.5) * (isMobile ? 20 : 30),
        (Math.random() - 0.5) * (isMobile ? 15 : 20),
        (Math.random() - 0.5) * 10 - 8
      );
      dollarSign.rotation.set(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      );
      dollarSign.scale.setScalar(isMobile ? 0.5 : 0.8);
      dollarSigns.push(dollarSign);
      scene.add(dollarSign);
    }

    // Create golden coins
    const coinGeometry = new THREE.CylinderGeometry(0.5, 0.5, 0.1, 16);
    const coinMaterial = new THREE.MeshPhongMaterial({
      color: 0xFFD700,
      transparent: true,
      opacity: 0.9,
      shininess: 100,
    });

    const coinCount = isMobile ? 4 : 6;
    for (let i = 0; i < coinCount; i++) {
      const coin = new THREE.Mesh(coinGeometry, coinMaterial);
      coin.position.set(
        (Math.random() - 0.5) * (isMobile ? 25 : 35),
        (Math.random() - 0.5) * (isMobile ? 18 : 25),
        (Math.random() - 0.5) * 12 - 10
      );
      coin.rotation.x = Math.random() * Math.PI;
      coin.rotation.z = Math.random() * Math.PI;
      coins.push(coin);
      scene.add(coin);
    }

    // Particle system (golden sparkles)
    const particleCount = isMobile ? 30 : 60;
    const particleGeometry = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      particlePositions[i] = (Math.random() - 0.5) * (isMobile ? 30 : 40);
      particlePositions[i + 1] = (Math.random() - 0.5) * (isMobile ? 20 : 30);
      particlePositions[i + 2] = (Math.random() - 0.5) * 15 - 12;
    }

    particleGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    
    const particleMaterial = new THREE.PointsMaterial({
      color: 0xFFD700,
      size: isMobile ? 1 : 2,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending,
    });

    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0x404040, 0.4);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xD4AF37, 0.8);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    // Add subtle rim lighting
    const rimLight = new THREE.DirectionalLight(0xFFD700, 0.3);
    rimLight.position.set(-5, -5, 5);
    scene.add(rimLight);

    camera.position.z = isMobile ? 18 : 15;

    // Mouse tracking
    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Store scene reference
    sceneRef.current = {
      scene,
      camera,
      renderer,
      particles,
      dollarSigns,
      coins,
      mouseX,
      mouseY,
    };

    // Animation loop
    const animate = () => {
      frameRef.current = requestAnimationFrame(animate);

      const time = Date.now() * 0.001;

      // Animate dollar signs
      dollarSigns.forEach((dollarSign, index) => {
        dollarSign.rotation.y += 0.005 + index * 0.001;
        dollarSign.rotation.z += 0.003;
        dollarSign.position.y += Math.sin(time + index * 2) * 0.005;
      });

      // Animate coins (spinning like real coins)
      coins.forEach((coin, index) => {
        coin.rotation.y += 0.02 + index * 0.005;
        coin.rotation.x += 0.01;
        coin.position.y += Math.sin(time * 0.5 + index * 3) * 0.008;
      });

      // Particle sparkle animation
      particles.rotation.y += 0.002;
      particles.material.opacity = 0.4 + Math.sin(time * 2) * 0.2;

      // Subtle parallax effect
      const parallaxStrength = isMobile ? 0.3 : 0.5;
      camera.position.x += (mouseX * parallaxStrength - camera.position.x) * 0.03;
      camera.position.y += (mouseY * parallaxStrength - camera.position.y) * 0.03;
      camera.lookAt(scene.position);

      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
      
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      
      renderer.dispose();
      coinGeometry.dispose();
      coinMaterial.dispose();
      particleGeometry.dispose();
      particleMaterial.dispose();
    };
  }, [isMobile]);

  return (
    <div 
      ref={mountRef} 
      className={`absolute inset-0 pointer-events-none ${className}`}
      style={{ zIndex: 0 }}
    />
  );
};

export default Hero3DFinancial;