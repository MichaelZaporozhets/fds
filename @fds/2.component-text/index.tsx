import React from 'react';
import styled from 'styled-components';
import { typography } from '../1.foundation';

const Paragraph = styled.p`
	font-family: ${typography.tokens.Body.S.normal.font};
	font-size: ${typography.tokens.Body.S.normal.fontSize}px;

	${props => props.strong && `
		font-weight: ${typography.tokens.Body.S.strong.fontWeight};
	`}

	line-height: 1.3;
`;

const SmallHeading = styled.h4`
	font-family: ${typography.tokens.Heading.S.strong.font};
	font-size: ${typography.tokens.Heading.S.strong.fontSize}px;
	font-weight: ${typography.tokens.Heading.S.strong.fontWeight};
	
	line-height: 1.3;
`;

export {
	Paragraph,
	SmallHeading
}