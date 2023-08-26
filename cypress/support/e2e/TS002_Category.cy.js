/// <reference types="cypress" />
import LoginPageAction from '../../pageobjects/page_action/loginPageAction'
import categoryPageAction from '../../pageobjects/page_action/categoryPageAction'
import addNewCategoryPageAction from '../../pageobjects/page_action/addNewCategoryPageAction'
import dashboardPageAction from '../../pageobjects/page_action/dashboardPageAction'

describe('Create New Category', () => {
    const lgnPage = new LoginPageAction()
    const category = new categoryPageAction()
    const addNewCategory = new addNewCategoryPageAction()
    const dasboard = new dashboardPageAction()

    before(() => {
        cy.fixture('testdata').then((data) => {
            globalThis.data = data
        })
    })

    beforeEach(()=>{
        lgnPage.navigatetoURL()

    })

    it('Create new category successfully', () => {
        lgnPage.inputEmailPassword(data.validCredential.user_email, data.validCredential.user_password)
        lgnPage.clickLoginButton()
        dasboard.clickBtnCategory()
        category.addCategory()
        addNewCategory.inputCategoryName(data.category.category_name)
        addNewCategory.inputCategoryDescription(data.category.category_description)
        addNewCategory.saveCategory()
        addNewCategory.validateSuccessMessage(data.successMessage)
    })

    it('User add new category without fill description', () => {
        lgnPage.inputEmailPassword(data.validCredential.user_email, data.validCredential.user_password)
        lgnPage.clickLoginButton()
        dasboard.clickBtnCategory()
        category.addCategory()
        addNewCategory.inputCategoryName(data.category.category_name)
        addNewCategory.saveCategory()
        addNewCategory.validateSuccessMessage(data.successMessage)
    })

    it('User add new category without fill name', () => {
        lgnPage.inputEmailPassword(data.validCredential.user_email, data.validCredential.user_password)
        lgnPage.clickLoginButton()
        dasboard.clickBtnCategory()
        category.addCategory()
        addNewCategory.inputCategoryDescription(data.category.category_description)
        addNewCategory.saveCategory()
        addNewCategory.validateAlertEmpty("\"name\" " +data.emptyAlert)
    })

    
})