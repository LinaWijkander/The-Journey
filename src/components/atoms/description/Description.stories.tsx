import Description from "../description/Description";
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
    title: "Atoms/Description",
    component: Description  
} as ComponentMeta<typeof Description>;

const Template: ComponentStory<typeof Description> = (args) => <Description {...args} />;

// STORIES ------------------------------
export const Primary = Template.bind({});
Primary.args = {
  text: 'Primary description',
};