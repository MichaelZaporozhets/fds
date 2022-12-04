import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { Icon } from '../2.component-icon';
import { color, typography } from '../1.foundation';

const InputEl = styled.input`
	background-color: ${color.tokens.input.InputBackgroundDefaultColor};
	color: ${color.tokens.text.BodyTextDefaultColor};
    border: 1px solid ${color.tokens.input.InputBorderDefaultColor};
	font-size: ${typography.tokens.Body.S.normal.fontSize}px;
	padding: 4px;
	border-radius: 4px;

	${props => props.rounded && `
		border-radius: 16px;
	`}
`;

interface InputProps {
	passedValue: string
	placeholder: string
	rounded: boolean
}

const Input = ({
	passedValue,
	placeholder,
	rounded
}: InputProps) => {
	const [value, setValue] = useState(passedValue);

	console.log(rounded)

	return (
		<InputEl rounded={rounded} placeholder={placeholder} value={value} onChange={(e) => setValue(e.target.value) } />
	)
}

Input.defaultProps = {
	passedValue: null,
	placeholder: "Your text here..",
	rounded: false
}

export {
	Input
}