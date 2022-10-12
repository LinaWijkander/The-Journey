import TextAreaField from './TextAreaField';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
    title: "Molecules/TextAreaField",
    component: TextAreaField  
} as ComponentMeta<typeof TextAreaField>;

const Template: ComponentStory<typeof TextAreaField> = (args) => <TextAreaField {...args} />;



// STORIES ------------------------------
export const Primary = Template.bind({});
Primary.args = {
  placeholder: 'Your answer',
  labelText: "Write your answer"
};
