import Card from './Card';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
    title: "Atoms/Card",
    component: Card  
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

// STORIES ------------------------------
export const Blue = Template.bind({});
Blue.args = {
    color: "#BDC9FF",
};

export const Green = Template.bind({});
Green.args = {
    color: "#99E9CA",
};

export const Yellow = Template.bind({});
Yellow.args = {
    color: "#FFF0BA",
};

export const Red = Template.bind({});
Red.args = {
    color: "#FFC3BA",
};

export const Pink = Template.bind({});
Pink.args = {
    color: "#FFDFF3",
};