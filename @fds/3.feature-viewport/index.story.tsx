import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Viewport } from '.';

export default {
	title: '3. Features/Viewport',
	component: Viewport,
	parameters: {
		// More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
		layout: 'fullscreen',
	},
} as ComponentMeta<typeof Viewport>;

const Template: ComponentStory<typeof Viewport> = (args) => <Viewport {...args} />;

export const Primary = Template.bind({});

Primary.args = {
	
}