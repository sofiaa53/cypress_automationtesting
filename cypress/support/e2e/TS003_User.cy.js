/// <reference types="cypress" />
import LoginPageAction from '../../pageobjects/page_action/loginPageAction'
import dashboardPageAction from '../../pageobjects/page_action/dashboardPageAction'
import userPageAction from '../../pageobjects/page_action/userPageAction'
import addNewUserPageAction from '../../pageobjects/page_action/addNewUserPageAction'

describe('Create New User', () => {
    const lgnPage = new LoginPageAction()
    const dasboard = new dashboardPageAction()
    const user = new userPageAction()
    const add_new_user = new addNewUserPageAction()

    before(() => {
        cy.fixture('testdata').then((data) => {
            globalThis.data = data
        })
    })

    beforeEach(()=>{
        lgnPage.navigatetoURL()

    })

    it('Create new user successfully', () => {
        lgnPage.inputEmailPassword(data.validCredential.user_email, data.validCredential.user_password)
        lgnPage.clickLoginButton()
        dasboard.clickBtnUser()
        user.addUser()
        add_new_user.inputUserName(data.user.new_user_name)
        add_new_user.inputUserEmail(data.user.new_user_email)
        add_new_user.inputUserPassword(data.user.new_user_password)
    })

    it('User add new user without fill name', () => {
        lgnPage.inputEmailPassword(data.validCredential.user_email, data.validCredential.user_password)
        lgnPage.clickLoginButton()
        dasboard.clickBtnUser()
        user.addUser()
        add_new_user.inputUserEmail(data.user.new_user_email)
        add_new_user.inputUserPassword(data.user.new_user_password)
    })

    it('User add new user without fill email', () => {
        lgnPage.inputEmailPassword(data.validCredential.user_email, data.validCredential.user_password)
        lgnPage.clickLoginButton()
        dasboard.clickBtnUser()
        user.addUser()
        add_new_user.inputUserName(data.user.new_user_name)
        add_new_user.inputUserPassword(data.user.new_user_password)
    })

    it('User add new user without fill password', () => {
        lgnPage.inputEmailPassword(data.validCredential.user_email, data.validCredential.user_password)
        lgnPage.clickLoginButton()
        dasboard.clickBtnUser()
        user.addUser()
        add_new_user.inputUserName(data.user.new_user_name)
        add_new_user.inputUserEmail(data.user.new_user_email)
    })
    
})