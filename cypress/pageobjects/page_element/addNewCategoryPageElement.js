/// <reference types="cypress" />
const element = require("../../locator.json")

export default class {
    nama() {
        return cy.get(element.addNewCategoryPage.nama)
    }

    deskripsi(){
        return cy.get(element.addNewCategoryPage.deskripsi)
    }

    btnSave() {
        return cy.get(element.addNewCategoryPage.btnSave)
    }

    alertEmptyField() {
        return cy.get(element.addNewCategoryPage.alertEmptyField)
    }
}