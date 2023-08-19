import { Meta, StoryFn } from '@storybook/react';
import MiddlewareData, { IMiddlewareData } from './MiddlewareData';
import { mockMiddlewareDataProps } from './MiddlewareData.mocks';

export default {
  title: 'data/MiddlewareData',
  component: MiddlewareData,
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as Meta<typeof MiddlewareData>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof MiddlewareData> = (args) => (
  <MiddlewareData {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockMiddlewareDataProps.base,
} as IMiddlewareData;
