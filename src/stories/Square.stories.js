import React from "react";
import Square from "../components/Square";
import { naught, cross } from "../core";

const meta = {
  title: "Example/Square",
  component: Square,
};
export default meta;
const Template = (args) => <Square {...args} />;
export const Default = Template.bind({});
export const Naught = Template.bind({});
Naught.args = { value: naught };
export const Cross = Template.bind({});
Cross.args = { value: cross };
