import InputField from "../inputField/InputField";
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
    title: "Atoms/InputField",
    component: InputField  
} as ComponentMeta<typeof InputField>;

const Template: ComponentStory<typeof InputField> = (args) => <InputField {...args} />;

// STORIES ------------------------------
export const Primary = Template.bind({});
Primary.args = {
  label: 'Field Name',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Field Name',
};