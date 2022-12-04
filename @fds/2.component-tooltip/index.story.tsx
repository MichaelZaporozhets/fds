import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Tooltip } from '.';
import { Paragraph, SmallHeading } from '../2.component-text';

export default {
	title: '2. Component/Tooltip',
	component: Tooltip,
	parameters: {
		// More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
		layout: 'fullscreen',
	},
} as ComponentMeta<typeof Tooltip>;

const Template: ComponentStory<typeof Tooltip> = (args) => <Tooltip {...args}>Hover over me</Tooltip>;

export const Primary = Template.bind({});

Primary.args = {
	content: <>
		<SmallHeading>
			Build Details
		</SmallHeading>
		<br />
		<Paragraph>
			FrostEd 3 <br />
			ExampleData Database-dev-na <br />
			Local Build [main] <br />
			Working Set 1635.5 MB
		</Paragraph>
	</>
}