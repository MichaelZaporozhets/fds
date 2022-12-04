import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { DataExplorer } from '.';

export default {
	title: '3. Features/Data Explorer',
	component: DataExplorer,
	parameters: {
		// More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
		layout: 'fullscreen',
	},
} as ComponentMeta<typeof DataExplorer>;

const Template: ComponentStory<typeof DataExplorer> = (args) => <DataExplorer {...args} />;

export const Primary = Template.bind({});

Primary.args = {
	
}