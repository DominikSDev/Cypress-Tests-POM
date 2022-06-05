/// <reference types="cypress"/>

import SearchEngine from "../support/page-object/searchEngineClass.js"


describe("SearchEngine Test", () => {
it("visible", () => {
    cy.visit("/");
    SearchEngine.getSearchEngineId
    SearchEngine.isVisible();  
});

it("Type text and check result", () => {
    SearchEngine.typeTextAndConfirm();
    SearchEngine.checkResult();
});

it("Check result from span", () => {
    cy.contains('.lighter',"dress");
})

});