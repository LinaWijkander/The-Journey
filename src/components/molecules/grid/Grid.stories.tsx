import Grid from "../grid/Grid";
import { ComponentStory, ComponentMeta } from '@storybook/react';


export default {
    title: "Molecules/Grid",
    component: Grid,
} as ComponentMeta<typeof Grid>;

const Template: ComponentStory<typeof Grid> = ({numberOfChildren = 4, ...args}) => (
    <Grid  {...args}>
    {[...Array(numberOfChildren).keys()].map(n => (
            <div 
                style={{
                    width: "50px", 
                    height:"50px", 
                    backgroundColor: "green", 
                    display: "flex", 
                    justifyContent: "center", 
                    alignItems: "center"
                }}>
                    {n+1}
                    </div>
    ))}
</Grid>
);

export const Horizontal = Template.bind({});
Horizontal.args = {
    spacing: 2,
    direction: "row",
    wrap: false
}

export const Vertical = Template.bind({});
Vertical.args = {
    spacing: 2,
    direction: "column",
    wrap: false
}

export const NoSpacing = Template.bind({});
NoSpacing.args = {
    spacing: 0,
    numberOfChildren: 40,
    direction: "row",
    wrap: false
}

export const WrapOverflow = Template.bind({});
WrapOverflow.args = {
    spacing: 2,
    numberOfChildren: 40,
    direction: "row",
    wrap: true
}

export const Empty = Template.bind({});
Empty.args = {
    spacing: 2,
    numberOfChildren: 0,
    direction: "row",
    wrap: false
}