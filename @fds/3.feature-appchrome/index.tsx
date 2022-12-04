import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { Icon } from '../2.component-icon';
import { Paragraph, SmallHeading } from '../2.component-text';
import { Tooltip } from '../2.component-tooltip';
import { color } from '../1.foundation';

const ChromeWrap = styled.div`
	background: ${color.tokens.layout.ApplicationBackgroundDefaultColor};
	width: 100%;
	height: 32px;
	display: flex;
`;

const LogoWrap = styled.div`
	width: 50px;
	padding: 5px 0px;
	text-align: center;
	min-width: 50px;
`;

const TabGroup = styled.div`
	display: flex;
	width: 100%;
`;


const tabCornerAsB64 = btoa(`
	<svg width="16" height="32" viewBox="0 0 16 32" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M8.5 7C9.5 9 16 32 16 32H0V0C5.5 0 7.5 5 8.5 7Z" fill="#2F2F2F"/>
	</svg>
`)

const Tab = styled.div`
	display: flex;
	margin: 4px 0px;
	padding: 3px 10px;
	position: relative;
	color: ${color.tokens.text.BodyTextDefaultColor};

	border-right: 1px solid ${color.tokens.component.SeparatorBackground02Color};

	> img {
		opacity: 0.7;
	}

	${props => props.active && `
		background: ${color.tokens.layout.PanelBackgroundDefaultColor};
		padding: 7px 0px;
		margin: 0px 16px;
		color: ${color.tokens.text.BodyTextFocusedColor};

		> img {
			opacity: 1;
		}
		
		&:before {
			content: "";
			background: url(data:image/svg+xml;base64,${tabCornerAsB64});
			transform: rotateY(-180deg);
			height: 100%;
			position: absolute;
			width: 16px;
			top: 0;
			left: -16px;
			z-index: 0;
		}

		&:after {
			content: "";
			background: url(data:image/svg+xml;base64,${tabCornerAsB64});
			height: 100%;
			position: absolute;
			width: 16px;
			top: 0;
			right: -16px;
			z-index: 0;
		}
	`}

	&:hover {
		cursor: pointer;
		color: ${color.tokens.text.BodyTextMouseOverColor};
	}
`;

const TabIcon = styled(Icon)`
	position: relative;
	z-index: 1;
`;

const TabLabel = styled(Paragraph)`
	padding: 3px 6px;
	position: relative;
	z-index: 1;
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

const Separator = styled.div`
	
`;

const TabMenu = styled.div`
	display: flex;
`;

const TabMenuIcon = styled(Icon)`
	align-self: center;
	margin-left: 10px;
`;

const RightControls = styled.div`
	justify-self: right;
	display: flex;
	min-width: 300px;
	justify-content: right;
`;

const BuildDetails = styled.div`
	margin-right: 10px;
`;

const BuildDetailsLabel = styled(Tooltip)`
	color: ${color.tokens.text.BodyTextMouseOverColor};
	line-height: 32px;
`;

const WindowControls = styled.div`
	display: flex;
`;

const WindowControlsIcon = styled(Icon)`
	align-self: center;
	margin: 0px 10px;
`;

const AppChrome = ({
	initialDocuments
}) => {
	const [documents, setDocuments] = useState(initialDocuments);
	const [activeDocument, setActiveDocument] = useState(documents[0])

	useEffect(() => {
		if (documents.length == 1) {
			setActiveDocument(documents[0])
		}
	}, documents)

	return (
		<ChromeWrap>
			<LogoWrap>
				<Icon size={20} name="logo" />
			</LogoWrap>
			<TabGroup>
				{
					documents.map(document => (
						<Tab key={`chrome_tabs_${document.id}`} active={document.id === activeDocument.id} onClick={() => setActiveDocument(document)}>
							<TabIcon size={16} name="ecsPrefab" />
							<TabLabel strong>{document.title}</TabLabel>
							<CloseIcon size={10} name="x" onClick={(e) => {
								e.stopPropagation();
								setDocuments(documents.filter(doc => doc.id !== document.id))
							}} />
						</Tab>
					))
				}
				<TabMenu>
					<TabMenuIcon size={12} name="plus" />
					<TabMenuIcon size={16} name="burger" />
				</TabMenu>
			</TabGroup>
			<RightControls>
				<BuildDetails>
					<BuildDetailsLabel
						content={<>
							<SmallHeading>
								Build Details
							</SmallHeading>
							<br />
							<Paragraph>
								FrostEd 3 <br />
								ExampleData Database-dev-na <br />
								Local Build [main] <br />
								Working Set 1635.5 MB
							</Paragraph>
						</>}
					>
						Example_Data (CL 123456789)
					</BuildDetailsLabel>
				</BuildDetails>
				<WindowControls>
					<WindowControlsIcon size={10} name="minimise" />
					<WindowControlsIcon size={10} name="fullscreen" />
					<WindowControlsIcon size={10} name="x" />
				</WindowControls>
			</RightControls>
		</ChromeWrap>
	)
}

export {
	AppChrome
}