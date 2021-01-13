/// <reference types="cypress" />

import { cross, naught } from "../../../src/core";

describe("Square", () => {
  it("should be blank", () => {
    cy.visit("http://localhost:6006/iframe.html?id=example-square--default");
    cy.get("button").should('not.contain', naught).and('not.contain', cross);
  });

  it("should have a naught", () => {
    cy.visit("http://localhost:6006/iframe.html?id=example-square--naught");
    cy.get("button").should('contain', naught).and('not.contain', cross);
  });

  it("should have a cross", () => {
    cy.visit("http://localhost:6006/iframe.html?id=example-square--cross");
    cy.get("button").should('not.contain', naught).and('contain', cross);
  });
});
