import userPageElement from "../page_element/userPageElement";

export default class userPageAction {
    constructor() {
        globalThis.user_element = new userPageElement()
    }

    addUser() {
        user_element.btnAdd().click()
    }
}