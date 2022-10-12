import TextArea from './TextArea';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
    title: "Atoms/TextArea",
    component: TextArea  
} as ComponentMeta<typeof TextArea>;

const Template: ComponentStory<typeof TextArea> = (args) => <TextArea {...args} />;



// STORIES ------------------------------
export const Primary = Template.bind({});
Primary.args = {
  placeholder: 'Placeholder text',
};
