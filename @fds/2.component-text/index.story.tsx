import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Paragraph, SmallHeading } from '.';

const TextExamples = ({

}) => {
	return (
		<>
			<SmallHeading>Small Heading</SmallHeading>
			<Paragraph>Body Copy</Paragraph>
			<Paragraph strong>Body Copy strong</Paragraph>
		</>
	)
}

export default {
	title: '2. Component/Text',
	component: TextExamples,
	parameters: {
		// More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
		layout: 'fullscreen',
	},
} as ComponentMeta<typeof TextExamples>;

const Template: ComponentStory<typeof TextExamples> = (args) => <TextExamples {...args} />;

export const Examples = Template.bind({});