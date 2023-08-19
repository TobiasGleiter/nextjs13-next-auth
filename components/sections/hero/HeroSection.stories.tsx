import { Meta, StoryFn } from '@storybook/react';
import HeroSection, { IHeroSection } from './HeroSection';
import { mockHeroSectionProps } from './HeroSection.mocks';

export default {
  title: 'sections/HeroSection',
  component: HeroSection,
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as Meta<typeof HeroSection>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof HeroSection> = (args) => (
  <HeroSection {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockHeroSectionProps.base,
} as IHeroSection;
