import React, { useEffect, useState, useRef } from 'react';
import * as THREE from 'three'
import { createRoot } from 'react-dom/client';
import { Canvas, useFrame, ThreeElements, useThree } from '@react-three/fiber';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";


import styled from 'styled-components';
import { Checkbox } from '../2.component-checkbox';
import { Icon } from '../2.component-icon';
import { Input } from '../2.component-input';
import { Panel } from '../2.component-panel';
import { Paragraph, SmallHeading } from '../2.component-text';
import { Tooltip } from '../2.component-tooltip';
import { color } from '../1.foundation/color';

const ViewportSpace = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	border: 2px solid ${color.tokens.layout.ApplicationBackgroundDefaultColor};
	border-top: 0;
	border-bottom: 0;
`;

const ViewportToolbar = styled.div`
	height: 32px;
	background: ${color.tokens.layout.PanelBackgroundDefaultColor};
	display: flex;
	min-height: 32px;
	flex-direction: row;
	align-items: center;
`;

const ViewportToolbarIcon = styled(Icon)`
	margin: 0px 10px;
`;


const ViewportContent = styled.div`
	height: 100%;
	position: relative;
`;

const CanvasEl = styled(Canvas)`
	// display: flex;
	// height: 100%;

	// canvas {
	// 	height: 100% !important;
	// }
`;

interface ViewportProps {
	className?: string
}

function Box(props: ThreeElements['mesh']) {
  const ref = useRef<THREE.Mesh>(null!)
  const [hovered, hover] = useState(false)
  const [clicked, click] = useState(false)
  useFrame((state, delta) => (ref.current.rotation.x += 0.01));

  return (
    <mesh
      {...props}
      ref={ref}
      scale={clicked ? 1.5 : 1}
      onClick={(event) => click(!clicked)}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}>
				<boxGeometry args={[1, 1, 1]} />
				<meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  )
}

function Sphere(props: ThreeElements['mesh']) {
  const ref = useRef<THREE.Mesh>(null!)
  const [hovered, hover] = useState(false)
  const [clicked, click] = useState(false)
  useFrame((state, delta) => (ref.current.rotation.x += 0.01));

  return (
    <mesh
      {...props}
      ref={ref}
      scale={clicked ? 1.5 : 1}
      onClick={(event) => click(!clicked)}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}>
				<sphereGeometry />
				<meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  )
}

const CameraController = () => {
  const { camera, gl } = useThree();
  useEffect(
    () => {
      const controls = new OrbitControls(camera, gl.domElement);

      controls.minDistance = 3;
      controls.maxDistance = 20;

      return () => {
        controls.dispose();
      };
    },
    [camera, gl]
  );

  return null;
};

interface CanvasContentProps {
	isPlaying: boolean
}

const CanvasContent = ({
	isPlaying
}: CanvasContentProps) => {
	const {invalidate, clock, advance} = useThree();
	clock.autoStart = false;
	

	useEffect(() => {
		if(isPlaying) {
			clock.start();
		} else {
			clock.stop();
		}
	}, [isPlaying])

	useEffect(() => {
			let delta = 0;
			const interval = 1/60;
			const update = () => {
					requestAnimationFrame(update);
					
					delta += clock.getDelta();

					if (delta > interval) {
							invalidate();
							delta = delta % interval;
					}
			}

			update();
	}, [])


	return (
		<>
			<CameraController />
			<ambientLight />
			<pointLight position={[10, 10, 10]} />
			<Box position={[-1.2, 0, 0]} />
			{/* <Sphere position={[0, 0, 0]} /> */}
			<Box position={[1.2, 0, 0]} />
		</>
	)
}

const Viewport = ({
	className
}: ViewportProps) => {
	const [isPlaying, setIsPlaying] = useState(false);
	
	return (
		<ViewportSpace className={className}>
			<ViewportToolbar>
				<div onClick={() => setIsPlaying(!isPlaying)}>
					{
						isPlaying ? (
							<ViewportToolbarIcon name="pause" size={18} />
						) : (
							<ViewportToolbarIcon name="playECS" size={18} />
						)
					}
				</div>
			</ViewportToolbar>
			<ViewportContent>
				<CanvasEl frameloop="demand">
					<CanvasContent isPlaying={isPlaying} />
				</CanvasEl>
				</ViewportContent>
		</ViewportSpace>
	)
}

export {
	Viewport
}