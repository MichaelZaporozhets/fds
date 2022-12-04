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

const DataExplorerContentWrap = styled.div`
	display: flex;
	flex-direction: column;
`;

const DataExplorerToolbar = styled.div`
	display: flex;
`;


const DataExplorerContent = () => {
	return (
		<DataExplorerContentWrap>
			<DataExplorerToolbar>
				{`Create | Import | < | > |`}
			</DataExplorerToolbar>
			<br />
			<p>Data Explorer panel content goes here..</p>
		</DataExplorerContentWrap>
	)
}

const DataExplorer = ({
	...rest
}) => {
	return (
		<Panel
			initialTabs={[
				{
					id: '987324',
					icon: 'files',
					name: 'Data Explorer',
					content: DataExplorerContent
				}
			]}
			{...rest}
		/>
	)
}

export {
	DataExplorer
}