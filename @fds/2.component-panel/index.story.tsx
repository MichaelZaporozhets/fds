import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Panel } from '.';

export default {
	title: '2. Component/Panel',
	component: Panel,
	parameters: {
		// More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
		layout: 'fullscreen',
	},
} as ComponentMeta<typeof Panel>;

const Template: ComponentStory<typeof Panel> = (args) => <Panel {...args} />

export const Primary = Template.bind({});

Primary.args = {
	initialTabs: [
		{
			id: '987234',
			icon: 'buildResults',
			name: 'Build Results',
			content: () => <p>Build results panel content goes here..</p>
		},
		{
			id: '982734',
			icon: 'components',
			name: 'Components',
			content: () => <p>Components panel content goes here..</p>
		}
	]
}