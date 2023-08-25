/// <reference types="cypress" />
const element = require("../../locator.json")

export default class {
    header() {
        return cy.get(element.dashboardPage.header)
    }

    btnCategory(){
        return cy.get(element.dashboardPage.btnCategory)
    }

    btnProduct() {
        return cy.get(element.dashboardPage.btnProduct)
    }

    btnUser() {
        return cy.get(element.dashboardPage.btnUser)
    }
}