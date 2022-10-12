import { ComponentStory, ComponentMeta } from '@storybook/react';
import Pill from './Pill';
//import { penIcon } from '../../../assets/icons';

export default {
  title: 'Molecules/Pill',
  component: Pill,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Pill>;

const Template: ComponentStory<typeof Pill> = (args) => <Pill {...args} />;


// STORIES ------------------------------
export const Primary = Template.bind({});
Primary.args = {
  label: 'Primary',
};

export const PrimarySelected = Template.bind({});
PrimarySelected.storyName = "Primary Selected"
PrimarySelected.args = {
  backgroundColor: "#99E9CA",
  label: 'Selected',
};

export const Flexible = Template.bind({});
Flexible.args = {
  flexible: true,
  label: 'Flex',
};

export const FlexibleSelected = Template.bind({});
FlexibleSelected.storyName = "Flexible Selected"
FlexibleSelected.args = {
  backgroundColor: "#DCDBDF",
  flexible: true,
  label: 'Flex Selected',
};

/* export const WithIcon = Template.bind({});
WithIcon.storyName = "With Icon";
WithIcon.args = {
  backgroundColor: "#fc038c",
  label: 'Icon',
  icon: penIcon
}; */

