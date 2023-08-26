import addNewCategoryPageElement from '../page_element/addNewCategoryPageElement';

export default class addNewCategoryPageAction {
    constructor() {
        globalThis.add_category_element = new addNewCategoryPageElement()
    }

    inputCategoryName(category_name) {
        add_category_element.nama().click()
            .type(category_name)
    }

    inputCategoryDescription(category_description) {
        add_category_element.deskripsi().click()
            .type(category_description)
    }

    saveCategory() {
        add_category_element.btnSave().click()
    }

    validateSuccessMessage(successMessage) {
        cy.contains(successMessage)
    }

    validateAlertEmpty(emptyAlert) {
        cy.contains(emptyAlert)
    }
}