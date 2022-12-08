import React, { useEffect, useState, useRef } from 'react';
import * as THREE from 'three'
import { createRoot } from 'react-dom/client';
import { Canvas, useFrame, ThreeElements, useThree, render } from '@react-three/fiber';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";


import styled from 'styled-components';
import { Checkbox } from '../2.component-checkbox';
import { Icon } from '../2.component-icon';
import { Input } from '../2.component-input';
import { Panel } from '../2.component-panel';
import { Paragraph, SmallHeading } from '../2.component-text';
import { Tooltip } from '../2.component-tooltip';
import { color } from '../1.foundation/color';
import { Vector3, Vector3Tuple } from 'three';

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

type RenderFuncProps = {
	state: any,
	delta: any,
	target: THREE.Mesh
}

type EntityProps = ThreeElements['mesh'] & {
	type: 'Box' | 'Sphere'
	renderState: {
		isPlaying: boolean
	}
	renderFunc: ({ state, delta, target }: RenderFuncProps) => any,
}

function Entity({
	type,
	renderState,
	renderFunc,
	...props
}: EntityProps) {
	const ref = useRef<THREE.Mesh>(null!)
	const [hovered, hover] = useState(false)
	const [clicked, click] = useState(false)

	useFrame((state, delta) => renderState.isPlaying && renderFunc({ state, delta, target: ref.current }));

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


const exampleEntities = [
	{
		type: 'Box',
		renderFunc: ({ target }: RenderFuncProps) => (target.rotation.x += 0.01),
		position: [-1.2, 0, 0]
	},
	{
		type: 'Box',
		renderFunc: ({ target }: RenderFuncProps) => (target.rotation.x += 0.02),
		position: [1.2, 0, 0]
	}
	
]

interface CanvasContentProps {
	isPlaying: boolean
}

const CanvasContent = ({
	isPlaying
}: CanvasContentProps) => {
	const {invalidate, clock, advance} = useThree();
	
	return (
		<>
			<ambientLight />
			<pointLight position={[10, 10, 10]} />

			{
				exampleEntities.map((entity, index) => (
					<Entity
						type={entity.type as EntityProps['type']}
						renderState={{ isPlaying: isPlaying }}
						renderFunc={entity.renderFunc}
						position={entity.position as Vector3Tuple}
					/>
				))
			}

			<Entity type='Box' renderState={{ isPlaying: isPlaying }} renderFunc={({ target }) => (target.rotation.x += 0.01)} position={[-1.2, 0, 0]} />
			<Entity type='Box' renderState={{ isPlaying: isPlaying }} renderFunc={({ target }) => (target.rotation.x += 0.01)} position={[1.2, 0, 0]} />
			<CameraController />
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
				<CanvasEl>
					<CanvasContent isPlaying={isPlaying} />
				</CanvasEl>
				</ViewportContent>
		</ViewportSpace>
	)
}

export {
	Viewport
}