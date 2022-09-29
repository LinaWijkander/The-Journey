import { ComponentStory, ComponentMeta } from '@storybook/react';
import Pill from './Pill';


export default {
  title: 'Molecules/Pill',
  component: Pill,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Pill>;

const Template: ComponentStory<typeof Pill> = (args) => <Pill {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Selection Pill',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Selection Pill',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Selection Pill',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Selection Pill',
};

export const NoBorder = Template.bind({});
NoBorder.args = {
    ...Primary.args, 
    outlined: true
};

