import Heading from "../heading/Heading";
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
export const Title = Template.bind({});
// might need separate css class
Title.args = {
    text: "Title",
    size: "huge"
}

export const HeadingLarge = Template.bind({});
HeadingLarge.storyName = "Heading Large" ;
HeadingLarge.args = {
    text: "Heading large",
    size: "large"
}

export const HeadingMedium = Template.bind({});
HeadingMedium.storyName = "Heading Medium" ;
HeadingMedium.args = {
    text: "Heading medium",
    size: "medium"
}

export const HeadingSmall = Template.bind({});
HeadingSmall.storyName = "Heading Small" ;
HeadingSmall.args = {
    text: "Heading small",
    size: "small"
}

/* export const heading1 = () => <Heading text="Heading 1" size={1}/> 
export const heading2 = () => <Heading text="Heading 2" size={2}/> 
export const heading3 = () => <Heading text="Heading 3" size={3}/>  */


