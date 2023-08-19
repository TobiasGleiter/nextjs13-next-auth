import { Meta, StoryFn } from '@storybook/react';
import InfoSection, { IInfoSection } from './InfoSection';
import { mockInfoSectionProps } from './InfoSection.mocks';

export default {
  title: 'sections/InfoSection',
  component: InfoSection,
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as Meta<typeof InfoSection>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof InfoSection> = (args) => (
  <InfoSection {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockInfoSectionProps.base,
} as IInfoSection;
