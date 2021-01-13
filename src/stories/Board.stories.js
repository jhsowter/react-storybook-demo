import React from "react";
import Board from "../components/Board";
import { defaultBoard, naught, cross } from "../core";

const meta = {
  title: "Example/Board",
  component: Board,
};

export default meta;

const Template = (args) => <Board {...args} />;

export const Initial = Template.bind({});
Initial.args = {
  squares: [...defaultBoard],
  onClick: () => {
    console.log("clicked dammit");
  },
};

export const XWins = Template.bind({});
XWins.args = { squares: [naught, null, cross, naught, cross, naught, cross, null, null] };

export const OWins = Template.bind({});
OWins.args = {
  squares: [null, null, naught, cross, cross, naught, null, cross, naught],
};

export const Draw = Template.bind({});
Draw.args = { squares: [naught, cross, naught, cross, cross, naught, cross, naught, cross] };

export const XIsNext = Template.bind({});
XIsNext.args = { squares: [naught, null, cross, cross, cross, naught, naught, null, null] };

export const OIsNext = Template.bind({});
OIsNext.args = {
  squares: [naught, null, cross, cross, cross, naught, null, null, null],
  xIsNext: false,
};
