import React from 'react';
import ReactDOMServer from 'react-dom/server';
import styled from 'styled-components';
import ReactTooltip from "react-tooltip";

import { color } from '../1.foundation/color';
import { Paragraph } from '../2.component-text';


const TooltipWrap = styled.div`

`;

const Tooltip = ({
	name,
	content,
	className,
	children
}) => {
	const contentAsString = ReactDOMServer.renderToString(content);

	return (
		<TooltipWrap>
			<Paragraph
				className={className}
				data-for="main"
				data-tip={contentAsString}
				data-html={true}
				data-iscapture="true"
			>
				{children}
			</Paragraph>
			<ReactTooltip
				html={true}
				id="main"
				place={"bottom"}
				type={"light"}
				effect={"float"}
				multiline={true}
			>
				{contentAsString}
			</ReactTooltip>
		</TooltipWrap>
	)
}

export {
	Tooltip
}