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
import { AppChrome } from '../3.feature-appchrome';
import { Inspector } from '../3.feature-inspector';
import { Outliner } from '../3.feature-outliner';
import { Viewport } from '../3.feature-viewport';
import { DataExplorer } from '../3.feature-dataExplorer';
import { AppToolbar } from '../3.feature-appToolbar';

const Window = styled.div`
	width: 100%;
	height: 100%;
	background: ${color.tokens.layout.ApplicationBackgroundDefaultColor};
	position: relative;
	display: flex;
	flex-direction: column;
	min-height: 80vh;
`;

const MainWindowContents = styled.div`
	height: 100%;
	display: flex;
	flex-direction: row;
	flex-grow: 1;

	> * {
		height: auto;
	}
`;

const BottomWindowContents = styled.div`
	height: 100%;
	display: flex;
	flex-direction: row;
	flex-grow: 1;
	max-height: 20vh;

	> * {
		height: auto;
	}
`;

const initialDocuments = [
	{
		id: '25876234',
		type: 'Prefab',
		title: 'Currently Active Document'
	},
	{
		id: '873248762',
		type: 'Prefab',
		title: 'Another Document'
	},
	{
		id: '0827348764',
		type: 'Prefab',
		title: 'Awesome Stuff'
	}
]

const ECSComposition = ({
	
}) => {
	return (
		<Window>
			<AppChrome initialDocuments={initialDocuments} />
			<AppToolbar documentType={"ecsPrefab"} />
			<MainWindowContents>
				<Outliner />
				<Viewport />
				<Inspector />
			</MainWindowContents>
			<BottomWindowContents>
				<DataExplorer fullWidth />
			</BottomWindowContents>
		</Window>
	)
}

export {
	ECSComposition
}