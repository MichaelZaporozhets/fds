import React from 'react';
import styled from 'styled-components';
import { icons } from './icons';

const IconImg = styled.img`
	width: 30px;
	height: 30px;

	${props => props.size && `
		width: ${props.size}px;
		height: ${props.size}px;
	`}
`;

interface Icon {
	name: keyof typeof icons
	size?: number,
	
	onClick?: any
	className?: string
	rest?: any
}

const Icon = ({
	name,
	size,
	className,
	onClick,
	rest
}: Icon) => {
	return (
		<IconImg size={size} src={icons[name].src} className={className} onClick={onClick} {...rest} />
	)
}

export {
	Icon
}