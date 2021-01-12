import React from "react";
import Board from "../components/Board";

export default {
  title: "Example/Board",
  component: Board,
};

export const Default = () => <Board />
export const XWins = () => <Board squares={[
  'O', null, 'X',
  'O', 'X', 'O',
  'X', null, null,
]}/>

export const InProgress = () => <Board squares={[
  'O', null, 'X',
  'X', 'X', 'O',
  'O', null, null,
]} />
