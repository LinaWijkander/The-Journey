import InputField from "./InputField";
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
    title: "Molecules/InputField",
    component: InputField  
} as ComponentMeta<typeof InputField>;

const Template: ComponentStory<typeof InputField> = (args) => <InputField {...args} />;



// STORIES ------------------------------
export const Profile = Template.bind({});
Profile.args = {
  placeholder: 'Full name',
  label: "Full name",
};

export const Interests = Template.bind({});
Interests.args = {
  placeholder: 'Pronoun',
  label: "Preferred pronoun (optional)",
};

export const Facts = Template.bind({});
Facts.args = {
  placeholder: 'Your interests',
  size: "small",
  label: "Or add your own",
};