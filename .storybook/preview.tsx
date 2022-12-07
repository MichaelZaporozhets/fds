import React from 'react';
import { color, globals } from '../@fds/1.foundation';

export const parameters = {
  options: {
    storySort: (a, b) =>
      a[1].kind === b[1].kind ? 0 : a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
  },
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  }
}

export const decorators = [
  (Story) => (
    <div style={{ margin: '0rem' }}>
      <style>
        {globals.css}
        {`
          html, body {
            background: #EEE;
          }
        `}
      </style>
      <Story />
    </div>
  ),
];