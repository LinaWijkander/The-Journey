import Input from "./Input";
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
    title: "Atoms/Input",
    component: Input  
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

// STORIES ------------------------------
export const Large = Template.bind({});
Large.args = {
  placeholder: 'Profile Placeholder',
};

export const Small = Template.bind({});
Small.args = {
  placeholder: 'Interests Placeholder',
  size: "small"
};
