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
        color: 0xF4E4BC, // Subtle pastel gold
        transparent: true,
        opacity: 0.28, // Visible but subtle
        emissive: 0x1A1611, // Subtle golden glow
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

    // Create fewer, more subtle dollar signs
    const dollarCount = isMobile ? 2 : 3;
    for (let i = 0; i < dollarCount; i++) {
      const dollarSign = createDollarSign();
      // Position more peripherally and deeper
      dollarSign.position.set(
        (Math.random() - 0.5) * (isMobile ? 35 : 50),
        (Math.random() - 0.5) * (isMobile ? 25 : 35),
        (Math.random() - 0.5) * 6 - 10 // Closer to view
      );
      dollarSign.rotation.set(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      );
      dollarSign.scale.setScalar(isMobile ? 0.5 : 0.6); // Slightly larger
      dollarSigns.push(dollarSign);
      scene.add(dollarSign);
    }

    // Create fewer, subtle golden coins
    const coinGeometry = new THREE.CylinderGeometry(0.4, 0.4, 0.08, 12);
    const coinMaterial = new THREE.MeshPhongMaterial({
      color: 0xF4E4BC, // Pastel gold to match dollar signs
      transparent: true,
      opacity: 0.22, // Visible but subtle
      shininess: 40,
      emissive: 0x0F0D0A, // Subtle golden glow
    });

    const coinCount = isMobile ? 2 : 3; // Fewer coins
    for (let i = 0; i < coinCount; i++) {
      const coin = new THREE.Mesh(coinGeometry, coinMaterial);
      // Position more peripherally and deeper
      coin.position.set(
        (Math.random() - 0.5) * (isMobile ? 40 : 60),
        (Math.random() - 0.5) * (isMobile ? 30 : 40),
        (Math.random() - 0.5) * 8 - 12 // Closer to view
      );
      coin.rotation.x = Math.random() * Math.PI;
      coin.rotation.z = Math.random() * Math.PI;
      coins.push(coin);
      scene.add(coin);
    }

    // Minimal particle system (very subtle sparkles)
    const particleCount = isMobile ? 8 : 12; // Much fewer particles
    const particleGeometry = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      particlePositions[i] = (Math.random() - 0.5) * (isMobile ? 50 : 70);
      particlePositions[i + 1] = (Math.random() - 0.5) * (isMobile ? 35 : 50);
      particlePositions[i + 2] = (Math.random() - 0.5) * 10 - 15; // Closer
    }

    particleGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    
    const particleMaterial = new THREE.PointsMaterial({
      color: 0xF4E4BC, // Match the pastel gold
      size: isMobile ? 0.8 : 1.2, // Slightly larger
      transparent: true,
      opacity: 0.18, // Visible but subtle
      blending: THREE.AdditiveBlending,
    });

    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    // Subtle but visible lighting
    const ambientLight = new THREE.AmbientLight(0x404040, 0.3); // Enhanced intensity
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xF4E4BC, 0.4); // Stronger golden light
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    // Subtle rim lighting for depth
    const rimLight = new THREE.DirectionalLight(0xF4E4BC, 0.2); // Enhanced
    rimLight.position.set(-5, -5, 5);
    scene.add(rimLight);

    camera.position.z = isMobile ? 25 : 22; // Further back

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

      // Subtle dollar sign animation - visible but gentle
      dollarSigns.forEach((dollarSign, index) => {
        dollarSign.rotation.y += 0.003 + index * 0.0005; // Slightly faster
        dollarSign.rotation.z += 0.002; // More visible rotation
        dollarSign.position.y += Math.sin(time + index * 2) * 0.003; // Gentle floating
      });

      // Subtle coin animation - visible gentle movement
      coins.forEach((coin, index) => {
        coin.rotation.y += 0.008 + index * 0.002; // More visible rotation
        coin.rotation.x += 0.005; // Gentle tumbling
        coin.position.y += Math.sin(time * 0.5 + index * 3) * 0.005; // Gentle floating
      });

      // Subtle particle animation with gentle sparkle
      particles.rotation.y += 0.002; // More visible rotation
      // Gentle sparkle effect
      (particles.material as THREE.PointsMaterial).opacity = 0.18 + Math.sin(time * 2) * 0.05;

      // Subtle parallax effect
      const parallaxStrength = isMobile ? 0.15 : 0.2; // More responsive
      camera.position.x += (mouseX * parallaxStrength - camera.position.x) * 0.01;
      camera.position.y += (mouseY * parallaxStrength - camera.position.y) * 0.01;
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