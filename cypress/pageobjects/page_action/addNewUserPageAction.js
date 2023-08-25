import addNewUserPageElement from '../page_element/addNewUserPageElement';

export default class addNewUserPageAction {
    constructor() {
        globalThis.add_user_element = new addNewUserPageElement()
    }

    inputUserName(user_name) {
        add_user_element.nama().click()
            .type(user_name)
    }

    inputUserEmail(user_email) {
        add_user_element.email().click()
            .type(user_email)
    }

    inputUserPassword(user_password) {
        add_user_element.password().click()
            .type(user_password)
    }

    saveUser() {
        add_user_element.btnSave().click()
    }
}