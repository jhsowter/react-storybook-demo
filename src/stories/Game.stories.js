import React from "react";
import Game from "../components/Game";
import {cross, naught} from "../core"

const meta =  {
  title: "Example/Game",
  component: Game,
};

export default meta;


const Template = (args) => <Game {...args} />;

export const Default = Template.bind({});

const oWinsHistory = [
  {"squares":[null,null,null,null,null,null,null,null,null]},
  {"squares":[null,null,cross,null,naught,null,null,null,null]},
  {"squares":[null,null,cross,null,naught,null,cross,null,null]},
  {"squares":[null,null,cross,null,naught,naught,cross,null,null]},
  {"squares":[null,null,cross,null,naught,naught,cross,cross,null]},
  {"squares":[null,null,cross,null,naught,naught,cross,cross,naught]},
  {"squares":[null,cross,cross,null,naught,naught,cross,cross,naught]},
  {"squares":[null,cross,cross,naught,naught,naught,cross,cross,naught]}]

export const OWins = Template.bind({})
OWins.args = {history: [...oWinsHistory], stepNumber:oWinsHistory.length-1};

const draw = [{"squares":[null,null,null,null,null,null,null,null,null]},{"squares":[null,cross,null,null,null,null,null,null,null]},{"squares":[null,cross,naught,null,null,null,null,null,null]},{"squares":[null,cross,naught,null,null,cross,null,null,null]},{"squares":[null,cross,naught,null,null,cross,null,naught,null]},{"squares":[null,cross,naught,null,null,cross,null,naught,cross]},{"squares":[null,cross,naught,null,naught,cross,null,naught,cross]},{"squares":[cross,cross,naught,null,naught,cross,null,naught,cross]},{"squares":[cross,cross,naught,naught,naught,cross,null,naught,cross]},{"squares":[cross,cross,naught,naught,naught,cross,cross,naught,cross]}];
export const Draw = Template.bind({})
Draw.args = {history: [...draw], stepNumber: draw.length - 1};

const xWinsHistory = [{"squares":[null,null,null,null,null,null,null,null,null]},{"squares":[null,cross,null,null,null,null,null,null,null]},{"squares":[null,cross,null,null,naught,null,null,null,null]},{"squares":[null,cross,null,null,naught,cross,null,null,null]},{"squares":[null,cross,null,null,naught,cross,null,null,naught]},{"squares":[cross,cross,null,null,naught,cross,null,null,naught]},{"squares":[cross,cross,null,null,naught,cross,null,naught,naught]},{"squares":[cross,cross,cross,null,naught,cross,null,naught,naught]}];
export const XWins = Template.bind({})
XWins.args = { history: [...xWinsHistory], stepNumber: xWinsHistory.length - 1 };