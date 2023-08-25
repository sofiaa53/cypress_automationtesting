/// <reference types="cypress" />
const element = require("../../locator.json")

export default class loginPageElement {
    email() {
       return cy.get(element.loginPage.email)
    }

    password() {
        return cy.get(element.loginPage.password)
    }

    btnLogin() {
        return cy.get(element.loginPage.btnLogin)
    }

    alertLoginFailed() {
        return cy.get(element.loginPage.alertLoginFailed)
    }
}