import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { typography, color } from '../1.foundation';

import { SmallHeading } from '../2.component-text';
import { Icon } from '../2.component-icon';
import { icons } from '../2.component-icon/icons';


const PanelWrap = styled.div`
	min-width: 300px;
	min-height: 200px;
	width: 480px;
	height: 100%;
	background: ${color.tokens.layout.PanelBackgroundDefaultColor};

	${props => props.fullWidth && `
		width: 100%;
	`}
`;

const PanelHeaderWrap = styled.div`
	height: 28px;
	display: flex;
	background: ${color.tokens.layout.TabControlBackgroundDefaultColor};
`;

const PanelTabs = styled.div`
	border-bottom: 1px solid ${color.tokens.component.PanelSplitterMajorColor};
	width: 100%;
	display: flex;
`;

const PanelTab = styled.div`
	display: flex;
	color: ${color.tokens.text.BodyTextDefaultColor};
	height: 28px;
	padding: 0px 10px;

	${props => props.active && `
		background: ${color.tokens.layout.PanelBackgroundDefaultColor};
		color: ${color.tokens.text.BodyTextFocusedColor};
	`}

	border-right: 1px solid ${color.tokens.component.PanelSplitterMajorColor};

	&:first-child {
		border-left: 0px;
	}

	&:hover {
		cursor: pointer;
		color: ${color.tokens.text.BodyTextFocusedColor};
	}
`;

const PanelTabIcon = styled(Icon)`
	align-self: center;
`;

const PanelTabLabel = styled(SmallHeading)`
	align-self: center;
	margin: 0 5px;
`;

const CloseIcon = styled(Icon)`
	align-self: center;
	margin-left: 6px;
	position: relative;
	z-index: 1;

	&:hover {
		opacity: 1;
	}
`;

const PanelMenuWrap = styled.div`

`;

const PanelMenuWrapIcon = styled(Icon)`
	margin: 6px;
`;

const PanelContent = styled.div`
	padding: 16px;
	color: ${color.tokens.text.BodyTextDefaultColor};
	font-size: ${typography.tokens.Body.S.normal.fontSize}px;
`;

type Panel = {
	icon: keyof typeof icons
	id: string
	name: string
	content: React.ElementType
}

interface PanelProps {
	initialTabs: Array<Panel>
	className?: string
	fullWidth?: boolean
}

const Panel = ({
	initialTabs,
	className,
	fullWidth
}: PanelProps) => {
	const [tabs, setTabs] = useState(initialTabs);
	const [activeTab, setActiveTab] = useState(tabs[0])

	useEffect(() => {
		if (tabs.length == 1) {
			setActiveTab(tabs[0])
		}
	}, tabs)

	return (
		<PanelWrap className={className} fullWidth={fullWidth}>
			<PanelHeaderWrap>
				<PanelTabs>
					{tabs.map((tab, index) => (
						<PanelTab key={`panel_right_tabs_${tab.id}`} active={tab.id === activeTab.id} onClick={() => setActiveTab(tab)}>
							<PanelTabIcon name={tab.icon} size={14} />
							<PanelTabLabel>{tab.name}</PanelTabLabel>
							<CloseIcon size={10} name="x" onClick={(e) => {
								e.stopPropagation();
								setActiveTab(tabs[index - 1] ? tabs[index - 1] : tabs[index + 1]);
								setTabs(tabs.filter(t => t.id !== tab.id))
							}} />
						</PanelTab>
					))}
				</PanelTabs>
				<PanelMenuWrap>
					<PanelMenuWrapIcon size={16} name="burger" />
				</PanelMenuWrap>
			</PanelHeaderWrap>
			<PanelContent>
				<activeTab.content />
			</PanelContent>
		</PanelWrap>
	)
}

export {
	Panel
}