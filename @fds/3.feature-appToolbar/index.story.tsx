import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { AppToolbar } from '.';

export default {
	title: '3. Features/Application Toolbar',
	component: AppToolbar,
	parameters: {
		// More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
		layout: 'fullscreen',
	},
} as ComponentMeta<typeof AppToolbar>;

const Template: ComponentStory<typeof AppToolbar> = (args) => <AppToolbar {...args} />;

export const Primary = Template.bind({});

Primary.args = {
	
}