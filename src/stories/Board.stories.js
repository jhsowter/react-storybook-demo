import React from "react";
import Board from "../components/Board";
import { defaultBoard } from "../core"

const meta = {
  title: "Example/Board",
  component: Board,
};

export default meta;

export const Default = () => <Board squares={[...defaultBoard]} />

export const XWins = () => <Board squares={[
  'O', null, 'X',
  'O', 'X', 'O',
  'X', null, null,
]} />

export const OWins = () => <Board squares={[
  null, null, 'O',
  'X', 'X', 'O',
  null, 'X', 'O'
]} />

export const Draw = () => <Board squares={[
  'O', 'X', 'O',
  'X', 'X', 'O',
  'X', 'O', 'X'
]} />

export const XIsNext = () => <Board squares={[
  'O', null, 'X',
  'X', 'X', 'O',
  'O', null, null,
]} />

export const OIsNext = () => <Board squares={[
  'O', null, 'X',
  'X', 'X', 'O',
  null, null, null,
]} xIsNext={false} />
