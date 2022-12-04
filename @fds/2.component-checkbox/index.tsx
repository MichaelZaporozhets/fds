import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { Icon } from '../2.component-icon';
import { color, typography } from '../1.foundation';

const CheckboxWrap = styled.div`
	display: inline-block;
`;

const CheckboxInput = styled.input`
	display: inline-block;
	display: none;

	&:checked + div img {
		opacity: 1;
	}
`;

const Wrapper = styled.div`
	background-color: ${color.tokens.input.InputBackgroundDefaultColor};
    border: 1px solid ${color.tokens.input.InputBorderDefaultColor};
    border-radius: 2px;
    width: 14px;
    height: 14px;
    display: inline-flex;
    align-items: center;
    cursor: pointer;
    outline: none;
`;

const Check = styled(Icon)`
	margin: 2px;
	opacity: 0;
`;

interface CheckboxProps {
	isChecked: boolean
}

const Checkbox = ({
	isChecked
}: CheckboxProps) => {
	const [checked, setChecked] = useState(isChecked);

	return (
		<CheckboxWrap>
			<CheckboxInput type="checkbox" checked={checked} />
			<Wrapper className="wrapper" onClick={() => setChecked(!checked)}>
				<Check name="check" size={8} />
			</Wrapper>
		</CheckboxWrap>
	)
}

Checkbox.defaultProps = {
	isChecked: true
}

export {
	Checkbox
}