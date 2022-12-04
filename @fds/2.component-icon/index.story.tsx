import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Icon } from '.';
import { icons } from './icons';

const Example = ({}) => {
	return (
		<>
			{
				Object.entries(icons).map(([iconName, iconDef]) => (
					<Icon name={iconName as keyof typeof icons} />
				))
			}
		</>
	)
}

export default {
	title: '2. Component/Icon',
	component: Example,
	parameters: {
		// More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
		layout: 'fullscreen',
	},
} as ComponentMeta<typeof Example>;

const Template: ComponentStory<typeof Example> = (args) => <Example {...args} />;

export const IconSet = Template.bind({});