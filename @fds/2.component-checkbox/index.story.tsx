import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Checkbox } from '.';

const TextExamples = ({

}) => {
	return (
		<Checkbox />
	)
}

export default {
	title: '2. Component/Checkbox',
	component: TextExamples,
	parameters: {
		// More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
		layout: 'fullscreen',
	},
} as ComponentMeta<typeof TextExamples>;

const Template: ComponentStory<typeof TextExamples> = (args) => <TextExamples {...args} />;

export const Primary = Template.bind({});