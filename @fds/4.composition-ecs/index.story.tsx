import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ECSComposition } from '.';

export default {
	title: '4. Compositions/ECS',
	component: ECSComposition,
	parameters: {
		// More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
		layout: 'fullscreen',
	},
} as ComponentMeta<typeof ECSComposition>;

const Template: ComponentStory<typeof ECSComposition> = (args) => <ECSComposition {...args} />;

export const Primary = Template.bind({});

Primary.args = {
	
}