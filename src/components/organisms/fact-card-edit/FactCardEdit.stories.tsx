import FactCardEdit from './FactCardEdit';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
    title: "Organisms/FactCardEdit",
    component: FactCardEdit  
} as ComponentMeta<typeof FactCardEdit>;

const Template: ComponentStory<typeof FactCardEdit> = (args) => <FactCardEdit{...args}/>;



// STORIES ------------------------------
export const Primary = Template.bind({});
Primary.args = {
  heading: "When I was little, I used to dream about growing up to be",
};
