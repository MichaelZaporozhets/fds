import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Outliner } from '.';

export default {
	title: '3. Features/Outliner',
	component: Outliner,
	parameters: {
		// More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
		layout: 'fullscreen',
	},
} as ComponentMeta<typeof Outliner>;

const Template: ComponentStory<typeof Outliner> = (args) => <Outliner {...args} />;

export const Primary = Template.bind({});

Primary.args = {
	
}