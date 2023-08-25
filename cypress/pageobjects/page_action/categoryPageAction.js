import categoryPageElement from "../page_element/categoryPageElement";

export default class categoryPageAction {
    constructor() {
        globalThis.category_element = new categoryPageElement()
    }

    addCategory() {
        category_element.btnAdd().click()
    }
}