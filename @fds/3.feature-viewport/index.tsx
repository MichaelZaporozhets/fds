import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
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
`;

interface ViewportProps {
	className?: string
}

const Viewport = ({
	className
}: ViewportProps) => {
	return (
		<ViewportSpace className={className}>
			<p>Viewport goes here..</p>
		</ViewportSpace>
	)
}

export {
	Viewport
}