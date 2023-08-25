/// <reference types="cypress" />
const element = require("../../locator.json")

export default class {
    btnAdd() {
        return cy.get(element.userPage.btnAdd)
    }
}