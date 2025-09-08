import { useEffect, useRef, useMemo } from 'react';
import * as THREE from 'three';

interface Hero3DProps {
  className?: string;
}

const Hero3D = ({ className }: Hero3DProps) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<number>();
  const sceneRef = useRef<{
    scene: THREE.Scene;
    camera: THREE.PerspectiveCamera;
    renderer: THREE.WebGLRenderer;
    particles: THREE.Points;
    spheres: THREE.Mesh[];
    mouseX: number;
    mouseY: number;
  }>();

  const isMobile = useMemo(() => {
    return typeof window !== 'undefined' && window.innerWidth < 768;
  }, []);

  useEffect(() => {
    if (!mountRef.current || isMobile) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    mountRef.current.appendChild(renderer.domElement);

    // Create subtle geometric shapes
    const shapes: THREE.Mesh[] = [];
    
    // Hexagons
    const hexGeometry = new THREE.CylinderGeometry(1, 1, 0.1, 6);
    const hexMaterial = new THREE.MeshPhongMaterial({
      color: 0xD4AF37,
      transparent: true,
      opacity: 0.1,
      wireframe: true,
    });

    // Dodecahedrons
    const dodecaGeometry = new THREE.DodecahedronGeometry(0.8);
    const dodecaMaterial = new THREE.MeshPhongMaterial({
      color: 0xD4AF37,
      transparent: true,
      opacity: 0.15,
      wireframe: true,
    });

    for (let i = 0; i < 3; i++) {
      const hex = new THREE.Mesh(hexGeometry, hexMaterial);
      hex.position.set(
        (Math.random() - 0.5) * 30,
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 15 - 10
      );
      hex.rotation.x = Math.random() * Math.PI;
      hex.rotation.z = Math.random() * Math.PI;
      shapes.push(hex);
      scene.add(hex);
    }

    for (let i = 0; i < 2; i++) {
      const dodeca = new THREE.Mesh(dodecaGeometry, dodecaMaterial);
      dodeca.position.set(
        (Math.random() - 0.5) * 25,
        (Math.random() - 0.5) * 15,
        (Math.random() - 0.5) * 12 - 8
      );
      shapes.push(dodeca);
      scene.add(dodeca);
    }

    // Reduced particle system
    const particleCount = 50;
    const particleGeometry = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      particlePositions[i] = (Math.random() - 0.5) * 40;
      particlePositions[i + 1] = (Math.random() - 0.5) * 30;
      particlePositions[i + 2] = (Math.random() - 0.5) * 20 - 15;
    }

    particleGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    
    const particleMaterial = new THREE.PointsMaterial({
      color: 0xD4AF37,
      size: 1.5,
      transparent: true,
      opacity: 0.3,
    });

    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    // Subtle lighting
    const ambientLight = new THREE.AmbientLight(0x404040, 0.3);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xD4AF37, 0.5);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    camera.position.z = 15;

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
      spheres: shapes,
      mouseX,
      mouseY,
    };

    // Subtle animation loop
    const animate = () => {
      frameRef.current = requestAnimationFrame(animate);

      const time = Date.now() * 0.0005; // Slower animation

      // Animate geometric shapes subtly
      shapes.forEach((shape, index) => {
        shape.rotation.x += 0.003;
        shape.rotation.y += 0.002;
        shape.position.y += Math.sin(time + index * 2) * 0.003; // Very subtle movement
      });

      // Minimal particle animation
      particles.rotation.y += 0.001;

      // Subtle parallax with mouse (reduced)
      camera.position.x += (mouseX * 0.5 - camera.position.x) * 0.02;
      camera.position.y += (mouseY * 0.5 - camera.position.y) * 0.02;
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
      hexGeometry.dispose();
      hexMaterial.dispose();
      dodecaGeometry.dispose();
      dodecaMaterial.dispose();
      particleGeometry.dispose();
      particleMaterial.dispose();
    };
  }, [isMobile]);

  if (isMobile) {
    return null;
  }

  return (
    <div 
      ref={mountRef} 
      className={`absolute inset-0 pointer-events-none ${className}`}
      style={{ zIndex: 0 }}
    />
  );
};

export default Hero3D;