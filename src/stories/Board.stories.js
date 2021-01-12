import React from "react";
import Board from "../components/Board";
import { defaultBoard } from "../core";

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
XWins.args = { squares: ["O", null, "X", "O", "X", "O", "X", null, null] };

export const OWins = Template.bind({});
OWins.args = {
  squares: [null, null, "O", "X", "X", "O", null, "X", "O"],
};

export const Draw = Template.bind({});
Draw.args = { squares: ["O", "X", "O", "X", "X", "O", "X", "O", "X"] };

export const XIsNext = Template.bind({});
XIsNext.args = { squares: ["O", null, "X", "X", "X", "O", "O", null, null] };

export const OIsNext = Template.bind({});
OIsNext.args = {
  squares: ["O", null, "X", "X", "X", "O", null, null, null],
  xIsNext: false,
};
