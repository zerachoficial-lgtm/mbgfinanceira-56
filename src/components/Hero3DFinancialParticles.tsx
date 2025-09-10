import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

interface Hero3DFinancialParticlesProps {
  className?: string;
}

const Hero3DFinancialParticles: React.FC<Hero3DFinancialParticlesProps> = ({ className = "" }) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if mobile device
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);

    // Don't render on mobile for performance
    if (window.innerWidth < 768) {
      return () => window.removeEventListener('resize', checkMobile);
    }

    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    mountRef.current.appendChild(renderer.domElement);

    // Create dollar sign geometry
    const createDollarGeometry = () => {
      const shape = new THREE.Shape();
      
      // Create a stylized dollar sign shape
      shape.moveTo(0, -1);
      shape.lineTo(0, 1);
      shape.moveTo(-0.3, 0.6);
      shape.bezierCurveTo(-0.5, 0.6, -0.5, 0.2, -0.3, 0.2);
      shape.lineTo(0.3, 0.2);
      shape.bezierCurveTo(0.5, 0.2, 0.5, -0.2, 0.3, -0.2);
      shape.lineTo(-0.3, -0.2);
      shape.bezierCurveTo(-0.5, -0.2, -0.5, -0.6, -0.3, -0.6);

      const extrudeSettings = {
        depth: 0.1,
        bevelEnabled: true,
        bevelSegments: 2,
        steps: 2,
        bevelSize: 0.02,
        bevelThickness: 0.02
      };

      return new THREE.ExtrudeGeometry(shape, extrudeSettings);
    };

    // Create golden material
    const dollarMaterial = new THREE.MeshPhongMaterial({
      color: 0xFFD700,
      shininess: 100,
      transparent: true,
      opacity: 0.8
    });

    // Create particles
    const particles: THREE.Mesh[] = [];
    const particleCount = 12;

    for (let i = 0; i < particleCount; i++) {
      const geometry = createDollarGeometry();
      const particle = new THREE.Mesh(geometry, dollarMaterial.clone());
      
      // Position particles in layers for depth effect
      const layer = Math.floor(i / 4);
      const baseSize = layer === 0 ? 0.3 : layer === 1 ? 0.2 : 0.15;
      const baseOpacity = layer === 0 ? 0.8 : layer === 1 ? 0.6 : 0.4;
      
      particle.scale.setScalar(baseSize);
      (particle.material as THREE.MeshPhongMaterial).opacity = baseOpacity;
      
      // Random positioning
      particle.position.x = (Math.random() - 0.5) * 20;
      particle.position.y = (Math.random() - 0.5) * 15;
      particle.position.z = (Math.random() - 0.5) * 10 - layer * 3;
      
      // Random initial rotation
      particle.rotation.x = Math.random() * Math.PI;
      particle.rotation.y = Math.random() * Math.PI;
      particle.rotation.z = Math.random() * Math.PI;
      
      // Store animation properties
      (particle as any).animSpeed = 0.005 + Math.random() * 0.01;
      (particle as any).floatSpeed = 0.01 + Math.random() * 0.02;
      (particle as any).floatOffset = Math.random() * Math.PI * 2;
      (particle as any).layer = layer;
      
      scene.add(particle);
      particles.push(particle);
    }

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);
    
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);
    
    const pointLight = new THREE.PointLight(0xFFD700, 0.6, 20);
    pointLight.position.set(0, 0, 5);
    scene.add(pointLight);

    // Camera position
    camera.position.z = 10;

    // Mouse interaction for subtle parallax
    let mouseX = 0;
    let mouseY = 0;
    const handleMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      const time = Date.now() * 0.001;

      particles.forEach((particle) => {
        const props = particle as any;
        
        // Slow rotation
        particle.rotation.y += props.animSpeed;
        
        // Floating motion
        particle.position.y += Math.sin(time * props.floatSpeed + props.floatOffset) * 0.001;
        
        // Subtle parallax based on layer and mouse position
        const parallaxStrength = (props.layer + 1) * 0.1;
        particle.position.x += (mouseX * parallaxStrength - particle.position.x) * 0.01;
        particle.position.z += (mouseY * parallaxStrength - particle.position.z) * 0.01;
        
        // Respawn particles that drift too far
        if (particle.position.y > 8) {
          particle.position.y = -8;
          particle.position.x = (Math.random() - 0.5) * 20;
        }
      });

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

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', checkMobile);
      
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      
      // Dispose of geometries and materials
      particles.forEach(particle => {
        particle.geometry.dispose();
        if (particle.material instanceof THREE.Material) {
          particle.material.dispose();
        }
      });
      
      renderer.dispose();
    };
  }, []);

  if (isMobile) {
    return null;
  }

  return (
    <div 
      ref={mountRef} 
      className={`absolute inset-0 pointer-events-none ${className}`}
      style={{ zIndex: 1 }}
    />
  );
};

export default Hero3DFinancialParticles;