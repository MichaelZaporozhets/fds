import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

const ColorExample = ({

}) => (
	<span>hello</span>
);

export default {
	title: '1. Foundation/Color',
	component: ColorExample,
	parameters: {
		// More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
		layout: 'fullscreen',
	},
} as ComponentMeta<typeof ColorExample>;

const Template: ComponentStory<typeof ColorExample> = (args) => <ColorExample {...args} />;

export const Primary = Template.bind({});