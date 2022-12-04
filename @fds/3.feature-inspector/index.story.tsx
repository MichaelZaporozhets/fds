import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Inspector } from '.';

export default {
	title: '3. Features/Inspector',
	component: Inspector,
	parameters: {
		// More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
		layout: 'fullscreen',
	},
} as ComponentMeta<typeof Inspector>;

const Template: ComponentStory<typeof Inspector> = (args) => <Inspector {...args} />;

export const Primary = Template.bind({});

Primary.args = {
	
}