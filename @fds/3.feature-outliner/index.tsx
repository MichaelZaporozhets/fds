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

const OutlinerContentWrap = styled.div`
	display: flex;
	flex-direction: column;
`;

const OutlinerToolbar = styled.div`
	display: flex;
`;


const OutlinerContent = () => {
	return (
		<OutlinerContentWrap>
			<p>Outliner content goes here..</p>
		</OutlinerContentWrap>
	)
}

const Outliner = ({
	
}) => {
	return (
		<Panel initialTabs={[
			{
				id: '987324',
				icon: 'ecsOutliner',
				name: 'ECS Outliner',
				content: OutlinerContent
			}
		]} />
	)
}

export {
	Outliner
}