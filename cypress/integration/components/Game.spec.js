/// <reference types="cypress" />

import { cross, naught } from "../../../src/core";

describe("Game", () => {
  beforeEach(() => {
    cy.visit("http://localhost:6006/iframe.html?id=example-game--default");

    cy.get("button").each((value, index, collection) => {
      cy.get(value).as("button" + index);
    });
  });

  it("X wins", () => {
    cy.get("@button1").click();
    cy.get("@button2").click();
    cy.get("@button4").click();
    cy.get("@button6").click();
    cy.get("@button7").click();
  });

  it("O wins", () => {
    cy.get("@button1").click();
    cy.get("@button2").click();
    cy.get("@button4").click();
    cy.get("@button5").click();
    cy.get("@button6").click();
    cy.get("@button8").click();
  });
});
