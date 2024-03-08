import {Suspense, useState, useEffect, useRef} from 'react';
import { Canvas } from '@react-three/fiber';
import Loader from '../components/Loader';
import HomeInfo from '../components/HomeInfo';
import sakura from '../assets/sakura.mp3';
import { soundoff, soundon } from '../assets/icons';
import DarkSky from '../models/DarkSky';
import Planet from '../models/Planet';

const Home = () => {

  const audioRef = useRef(new Audio(sakura));
  audioRef.current.volume = 0.4;
  audioRef.current.loop = true;

  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(1);
  const [isPlayMusic, setIsPlayMusic] = useState(false);
  const [currentAnimation, setCurrentAnimation] = useState('Animation');

  useEffect(() => {
    if(isPlayMusic) {
      audioRef.current.play();
    }
    return () => {
      audioRef.current.pause();
    }
  }, [isPlayMusic])

  const adjustIslandForScreenSize = () => {
    let screenScale = null;
     let screenPostion = [0, -6.5, -43];
    let rotation = [0.1, 4.7, 0]
    if(window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
    } else {
      screenScale = [1, 1, 1];
    }

    return [screenScale, screenPostion, rotation];
  }

  const adjustPlaneForScreenSize = () => {
    let screenScale, screenPostion;

    if(window.innerWidth < 768) {
      screenScale = [1.5, 1.5, 1.5];
      screenPostion = [0, -1.5, 0];
    } else {
      screenScale = [3, 3, 3];
      screenPostion = [0, -4, -4];
    }

    return [screenScale, screenPostion];
  }

  const [islandScale, islandPosition, islandRotation] = adjustIslandForScreenSize();
  const [planeScale, planePosition] = adjustPlaneForScreenSize();

  return (
    <section className='w-full h-screen relative'>
       <div className='absolute top-20 left-0 right-0 z-10 flex justify-center items-center'>
          {currentStage && <HomeInfo currentStage={currentStage}/>}
      </div>
      <Canvas 
        className={`w-full h-screen bg-transparent ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`}
        camera={{near: 0.1, far: 1000}}
        >
          <Suspense fallback={<Loader />}>
            <directionalLight position={[1, 1, 1]} intensity={2}/>
            <ambientLight intensity={0.5}/>
            <hemisphereLight skyColor="#b1e1ff" groundColor="#000000" intensity={1}/>
            <DarkSky isRotating={isRotating}/>
            <Planet position={islandPosition} scale={islandScale} rotation={islandRotation} 
            isRotating={isRotating} setIsRotating={setIsRotating} setCurrentStage={setCurrentStage} currentAnimation={currentAnimation}/>
          </Suspense>
      </Canvas>
      <div className='absolute bottom-2 left-2'>
        <img src={!isPlayMusic? soundoff : soundon} alt='sound' className='w-10 h-10 cursor-pointer object-contain'
          onClick={() => setIsPlayMusic(!isPlayMusic)}/>
      </div>
    </section>
  )
}

export default Home