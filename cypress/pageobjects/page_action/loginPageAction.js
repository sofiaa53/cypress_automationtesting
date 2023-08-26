/// <reference types="cypress" />
import loginPageElement from '../page_element/loginPageElement'

export default class loginPageAction {

    constructor() {

        globalThis.login_page_element = new loginPageElement()

    }

    navigatetoURL() {
        return cy.visit('/')
    }

    inputEmailPassword(user_name, user_password) {
        login_page_element.email().click()
            .type(user_name)

        login_page_element.password().click()
            .type(user_password)
    }

    clickLoginButton() {
        login_page_element.btnLogin().click()
    }

    validateAlert(alertLogin) {
        cy.contains(alertLogin)
    }

    successMessage(loginSuccess) {
        cy.contains(loginSuccess)
    }


}