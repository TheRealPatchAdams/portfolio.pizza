import { useAnimations, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useRef, useState } from "react";
import spacemanScene from "../assets/pizza.glb?url"; // Use "?url" to ensure proper handling
import CanvasLoader from "./Loader";
import PropTypes from "prop-types";

const Spaceman = ({ scale, position, rotation }) => {
  const spacemanRef = useRef();
  const { scene, animations } = useGLTF(spacemanScene);
  const { actions } = useAnimations(animations, spacemanRef);

  useEffect(() => {
    if (actions?.["Idle"]) {
      actions["Idle"].play();
    }
  }, [actions]);

  return (
    <mesh ref={spacemanRef} position={position} scale={scale} rotation={rotation}>
      <primitive object={scene} />
    </mesh>
  );
};

Spaceman.propTypes = {
  scale: PropTypes.arrayOf(PropTypes.number).isRequired,
  position: PropTypes.arrayOf(PropTypes.number).isRequired,
  rotation: PropTypes.arrayOf(PropTypes.number).isRequired,
};

const SpacemanCanvas = ({ scrollContainer }) => {
  const [rotationX, setRotationX] = useState(0);
  const [rotationY, setRotationY] = useState(0);
  const [scale, setScale] = useState([2, 2, 2]);
  const [position, setPosition] = useState([0.2, -0.7, 0]);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollContainer?.current) {
        const scrollTop = scrollContainer.current.scrollTop;
        const rotationXValue = scrollTop * -0.0006;
        const rotationYValue = scrollTop * -0.00075;

        setRotationX(rotationXValue);
        setRotationY(rotationYValue);
      }
    };

    const handleResize = () => {
      if (window.innerWidth < 768) {
        setScale([1, 1, 1]);
        setPosition([0.2, -0.1, 0]);
      } else if (window.innerWidth < 1024) {
        setScale([1.33, 1.33, 1.33]);
        setPosition([0.2, -0.3, 0]);
      } else if (window.innerWidth < 1280) {
        setScale([1.5, 1.5, 1.5]);
        setPosition([0.2, -0.4, 0]);
      } else if (window.innerWidth < 1536) {
        setScale([1.66, 1.66, 1.66]);
        setPosition([0.2, -0.5, 0]);
      } else {
        setScale([2, 2, 2]);
        setPosition([0.2, -0.7, 0]);
      }
    };

    scrollContainer.current?.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    handleResize(); // Call initially to set scale and position

    return () => {
      scrollContainer.current?.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [scrollContainer]);

  return (
    <Canvas className="w-full h-screen bg-transparent z-10" camera={{ near: 0.1, far: 1000 }}>
      <Suspense fallback={<CanvasLoader />}>
        {/* Optimized light setup */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} />
        <pointLight position={[0, 5, 10]} intensity={1} />

        <Spaceman
          rotation={[rotationX, rotationY, 0]} // Pass rotation as props
          scale={scale}
          position={position}
        />
      </Suspense>
    </Canvas>
  );
};

SpacemanCanvas.propTypes = {
  scrollContainer: PropTypes.shape({
    current: PropTypes.object,
  }).isRequired,
};

export default SpacemanCanvas;
