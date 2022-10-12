import HomeCard from './HomeCard';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
    title: "Organisms/HomeCard",
    component: HomeCard  
} as ComponentMeta<typeof HomeCard>;

const Template: ComponentStory<typeof HomeCard> = (args) => <HomeCard {...args}/>;



// STORIES ------------------------------
export const Primary = Template.bind({});
Primary.args = {
};