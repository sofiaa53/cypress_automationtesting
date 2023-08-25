/// <reference types="cypress" />
const element = require("../../locator.json")

export default class {
    nama() {
        return cy.get(element.addNewUserPage.nama)
    }

    email(){
        return cy.get(element.addNewUserPage.email)
    }

    password(){
        return cy.get(element.addNewUserPage.password)
    }

    btnSave() {
        return cy.get(element.addNewUserPage.btnSave)
    }

    alertEmptyField() {
        return cy.get(element.addNewUserPage.alertEmptyField)
    }
}