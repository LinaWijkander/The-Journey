import Label from "./Label";
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
    title: "Atoms/Label",
    component: Label  
} as ComponentMeta<typeof Label>;

const Template: ComponentStory<typeof Label> = (args) => <Label {...args} />;



// STORIES ------------------------------
export const Small = Template.bind({});
Small.args = {
  label: 'label',
};