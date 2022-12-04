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

const InspectorContentWrap = styled.div`
	display: flex;
	flex-direction: column;
`;

const InspectorToolbar = styled.div`
	display: flex;
`;


const InspectorContent = () => {
	return (
		<InspectorContentWrap>
			<InspectorToolbar>
				<Checkbox />
				<Icon size={16} name={"ecsEntity"} />
				<Input passedValue='Entity Name' />
				Static
				<Checkbox />
			</InspectorToolbar>
			<br />
			<p>Build results panel content goes here..</p>
		</InspectorContentWrap>
	)
}

const Inspector = ({
	
}) => {
	return (
		<Panel initialTabs={[
			{
				id: '987324',
				icon: 'information',
				name: 'Inspector',
				content: InspectorContent
			}
		]} />
	)
}

export {
	Inspector
}