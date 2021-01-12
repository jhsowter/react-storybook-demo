import React from "react";
import Game from "../components/Game";

const meta =  {
  title: "Example/Game",
  component: Game,
};

export default meta;


const Template = (args) => <Game {...args} />;

export const Default = Template.bind({});

const oWinsHistory = [
  {"squares":[null,null,null,null,null,null,null,null,null]},
  {"squares":[null,null,"X",null,null,null,null,null,null]},
  {"squares":[null,null,"X",null,"O",null,null,null,null]},
  {"squares":[null,null,"X",null,"O",null,"X",null,null]},
  {"squares":[null,null,"X",null,"O","O","X",null,null]},
  {"squares":[null,null,"X",null,"O","O","X","X",null]},
  {"squares":[null,null,"X",null,"O","O","X","X","O"]},
  {"squares":[null,"X","X",null,"O","O","X","X","O"]},
  {"squares":[null,"X","X","O","O","O","X","X","O"]}]

export const OWins = Template.bind({})
OWins.args = {history: [...oWinsHistory], stepNumber:oWinsHistory.length-1};

const draw = [{"squares":[null,null,null,null,null,null,null,null,null]},{"squares":[null,"X",null,null,null,null,null,null,null]},{"squares":[null,"X","O",null,null,null,null,null,null]},{"squares":[null,"X","O",null,null,"X",null,null,null]},{"squares":[null,"X","O",null,null,"X",null,"O",null]},{"squares":[null,"X","O",null,null,"X",null,"O","X"]},{"squares":[null,"X","O",null,"O","X",null,"O","X"]},{"squares":["X","X","O",null,"O","X",null,"O","X"]},{"squares":["X","X","O","O","O","X",null,"O","X"]},{"squares":["X","X","O","O","O","X","X","O","X"]}];
export const Draw = Template.bind({})
Draw.args = {history: [...draw], stepNumber: draw.length - 1};

const xWinsHistory = [{"squares":[null,null,null,null,null,null,null,null,null]},{"squares":[null,"X",null,null,null,null,null,null,null]},{"squares":[null,"X",null,null,"O",null,null,null,null]},{"squares":[null,"X",null,null,"O","X",null,null,null]},{"squares":[null,"X",null,null,"O","X",null,null,"O"]},{"squares":["X","X",null,null,"O","X",null,null,"O"]},{"squares":["X","X",null,null,"O","X",null,"O","O"]},{"squares":["X","X","X",null,"O","X",null,"O","O"]}];
export const XWins = Template.bind({})
XWins.args = { history: [...xWinsHistory], stepNumber: xWinsHistory.length - 1 };