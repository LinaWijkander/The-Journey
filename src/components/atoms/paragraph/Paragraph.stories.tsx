import Paragraph from "./Paragraph";
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
    title: "Atoms/Paragraph",
    component: Paragraph  
} as ComponentMeta<typeof Paragraph>;

const Template: ComponentStory<typeof Paragraph> = (args) => <Paragraph {...args} />;

// STORIES ------------------------------
export const RegularBlack17 = Template.bind({});
RegularBlack17.args = {
  text: 'Regular Black 17',
};

export const ItalicGrey17 = Template.bind({});
ItalicGrey17.args = {
  text: 'Italic Grey 17 ',
  italic: true,
  color: "#757686",
};

export const Grey14 = Template.bind({});
Grey14.args = {
  text: 'Regular Grey 14',
  fontSize: 14,
  color: "#757686",
};