/// <reference types="cypress" />
import LoginPageAction from '../../pageobjects/page_action/loginPageAction'

describe('User Login', () => {
    const lgnPage = new LoginPageAction()

    before(() => {
        cy.fixture('testdata').then((data) => {
            globalThis.data = data
        })
    })

    beforeEach(()=>{
        lgnPage.navigatetoURL()

    })

    it('User Login Successfully', () => {
        lgnPage.inputEmailPassword(data.validCredential.user_email, data.validCredential.user_password)
        lgnPage.clickLoginButton()
        lgnPage.successMessage(data.loginSuccess)
    })

    it('User Login Failed', () => {
        lgnPage.inputEmailPassword(data.invalidCredential.user_email, data.invalidCredential.user_password)
        lgnPage.clickLoginButton()
        lgnPage.validateAlert(data.alertLogin)

    })
})