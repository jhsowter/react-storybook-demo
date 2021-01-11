import React from "react";
import Square from "../components/Square";

export default {
  title: "Example/Square",
  component: Square,
};

export const Default = () => (<Square />)

export const Filled = () => (<Square value="X"/>)