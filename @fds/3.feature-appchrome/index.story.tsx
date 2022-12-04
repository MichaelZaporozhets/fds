import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { AppChrome } from '.';

export default {
	title: '3. Features/Application Chrome',
	component: AppChrome,
	parameters: {
		// More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
		layout: 'fullscreen',
	},
} as ComponentMeta<typeof AppChrome>;

const Template: ComponentStory<typeof AppChrome> = (args) => <AppChrome {...args} />;

export const Primary = Template.bind({});

Primary.args = {
	initialDocuments: [
		{
			id: '25876234',
			type: 'Prefab',
			title: 'Currently Active Document'
		},
		{
			id: '873248762',
			type: 'Prefab',
			title: 'Another Document'
		},
		{
			id: '0827348764',
			type: 'Prefab',
			title: 'Awesome Stuff'
		}
	]
}