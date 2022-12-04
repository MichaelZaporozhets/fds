import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { Icon } from '../2.component-icon';
import { Paragraph, SmallHeading } from '../2.component-text';
import { Tooltip } from '../2.component-tooltip';
import { color } from '../1.foundation';

const AppToolbarWrap = styled.div`
	background: ${color.tokens.layout.PanelBackgroundDefaultColor};
	width: 100%;
	height: 32px;
	display: flex;
`;

const AppToolbar = ({
	documentType
}) => {
	return (
		<AppToolbarWrap>
			
		</AppToolbarWrap>
	)
}

export {
	AppToolbar
}