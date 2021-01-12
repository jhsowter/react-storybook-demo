import React from "react";
import Square from "../components/Square";

const meta = {
  title: "Example/Square",
  component: Square,
};
export default meta;
const Template = (args) => <Square {...args} />;
export const Default = Template.bind({});
export const Naught = Template.bind({});
Naught.args = { value: "O" };
export const Cross = Template.bind({});
Cross.args = { value: "X" };
