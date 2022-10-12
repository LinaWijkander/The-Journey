import Title from "./Title";
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
    title: "Atoms/Title",
    component: Title,  
    argTypes: {
        color: { control: 'color' },
      },
} as ComponentMeta<typeof Title>;

const Template: ComponentStory<typeof Title> = (args) => <Title {...args} />;



// STORIES ------------------------------
export const Regular = Template.bind({});
Regular.args = {
    text: "Facts about you",
}

