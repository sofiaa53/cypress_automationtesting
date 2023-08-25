import dashboardPageElement from "../page_element/dashboardPageElement";

export default class dashboardPageAction {
    constructor() {
        globalThis.dasboard = new dashboardPageElement()
    }

    clickBtnCategory() {
        dasboard.btnCategory().click()
    }

    clickBtnUser() {
        dasboard.btnUser().click()
    }
}