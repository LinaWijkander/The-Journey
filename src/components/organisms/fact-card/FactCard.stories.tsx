import FactCard from './FactCard';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
    title: "Organisms/FactCard",
    component: FactCard  
} as ComponentMeta<typeof FactCard>;

const Template: ComponentStory<typeof FactCard> = (args) => <FactCard{...args}/>;



// STORIES ------------------------------
export const Primary = Template.bind({});
Primary.args = {
  heading: "My secret talent is"
};

export const Secondary = Template.bind({});
Secondary.args = {
    heading: "When I was little, I used to dream about growing up to be"
};