import React, { useRef, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

const Pizza = ({ scrollContainer }) => {
  const pizzaRef = useRef();

  // Load the pizza model
  const { scene } = useGLTF("/assets/pizza.glb");

  useEffect(() => {
    const handleScroll = () => {
      const rotationValue = scrollContainer.current?.scrollTop * 0.005 || 0;
      if (pizzaRef.current) {
        pizzaRef.current.rotation.y = rotationValue; // Spin the pizza on scroll
      }
    };

    // Add scroll listener
    scrollContainer.current?.addEventListener("scroll", handleScroll);

    return () => {
      scrollContainer.current?.removeEventListener("scroll", handleScroll);
    };
  }, [scrollContainer]);

  return (
    <Canvas
      className="absolute top-0 left-1/2 transform -translate-x-1/2 z-10"
      style={{ width: "100px", height: "100px", backgroundColor: "rgba(255, 0, 0, 0.2)" }}
      camera={{ position: [0, 0, 3], fov: 75 }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} />
      <mesh ref={pizzaRef}>
        <primitive object={scene} scale={0.02} />
      </mesh>
    </Canvas>
  );
};

export default Pizza;
