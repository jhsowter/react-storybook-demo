import React from "react";
import Square from "../components/Square";

const meta = {
  title: "Example/Square",
  component: Square,
};
export default meta;

export const Default = () => <Square />;
export const Naught = () => <Square value="O" />;
export const Cross = () => <Square value="X" />;
