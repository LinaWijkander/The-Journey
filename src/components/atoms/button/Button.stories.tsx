import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from './Button';
import {penIcon} from '../../../assets/icons';

export default {
  title: 'Atoms/Button',
  component: Button,
  
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;


// STORIES ------------------------------
export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};

export const SmallDisabled = Template.bind({});
SmallDisabled.storyName = "Small Disabled"
SmallDisabled.args = {
  size: 'small',
  label: 'Button',
  disabled: true,
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
};

export const LargeDisabled = Template.bind({});
LargeDisabled.storyName = " Large Disabled"
LargeDisabled.args = {
  size: 'large',
  label: 'Button',
  disabled: true,
};

export const WithIcon = Template.bind({});
WithIcon.storyName = "With Icon"
WithIcon.args = {
  size: 'small',
  label: 'Answer',
  icon: penIcon,
};

/* export const WithEmoji = Template.bind({});
WithEmoji.storyName = "With Emoji";
WithEmoji.args = {
  size: 'small',
  label:'😍',
}; */
