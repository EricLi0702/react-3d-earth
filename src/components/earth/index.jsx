import React from 'react'
import { useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three'
import { OrbitControls } from '@react-three/drei'
import EarthDayMap from '../../assets/textures/8k_earth_daymap.jpg'
import EarthCloudsMap from '../../assets/textures/8k_earth_clouds.jpg'
import EarthNightMap from '../../assets/textures/8k_earth_nightmap.jpg'
import EarthNormalMap from '../../assets/textures/8k_earth_normalmap.jpg'
import EarthSpecularMap from '../../assets/textures/8k_earth_specularmap.jpg'
export function Earth(props){

    const [colorMap, normalMap, specularMap, cloudsMap] = useLoader(TextureLoader, [EarthDayMap, EarthNormalMap, EarthSpecularMap, EarthCloudsMap])

    return (<>
        <ambientLight intensity={1} />
        <mesh>
            <sphereBufferGeometry args={[1, 32, 32]} />
            <meshPhongMaterial specularMap={specularMap} />
            <meshStandardMaterial map={colorMap} normalMap={normalMap} />
            <OrbitControls 
                enableZoom={true} 
                enablePan={true} 
                zoomSpeed={0.6} 
                panSpeed={0.5} 
                rotateSpeed={0.4} 
            />
        </mesh>
    </>);
}