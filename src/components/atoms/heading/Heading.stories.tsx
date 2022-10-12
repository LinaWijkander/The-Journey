import Heading from "./Heading";
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
    title: "Atoms/Heading",
    component: Heading,  
    argTypes: {
        color: { control: 'color' },
      },
} as ComponentMeta<typeof Heading>;

const Template: ComponentStory<typeof Heading> = (args) => <Heading {...args} />;



// STORIES ------------------------------
export const Regular14 = Template.bind({});
Regular14.args = {
    text: "Heading Regular 14",
    /* fontSize: "14px", */
    size: "xs"
}

export const Regular15 = Template.bind({});
Regular15.args = {
    text: "Heading Regular 15",
    // fontSize: "15px",
    size: "small"
}

export const Regular17 = Template.bind({});
Regular17.args = {
    text: "Heading Regular 17",
    size: "medium"
}

export const Bold17 = Template.bind({});
Bold17.args = {
    text: "Heading Bold 17",
    bold: true,
    size: "medium"
}

export const Bold22 = Template.bind({});
Bold22.args = {
    text: "Heading Bold 22",
    // fontSize: "22px",
    bold: true,
    size: "large"
}
