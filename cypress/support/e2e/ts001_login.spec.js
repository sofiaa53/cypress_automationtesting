const base_url = 'https://kasirdemo.belajarqa.com/'

async function login() {
    cy.visit('/')
    cy.url().should('match', /login/)
    cy.contains('hai, kasirAja')
}

describe('User Login', () => {
    it('User Login Successfully', () => {
        //cy.visit(base_url)
        //cy.contains('hai, kasirAja')
        login()
        cy.get('#email-label').click()
            .type('cofiali53@gmail.com')
        cy.get('#password').click()
            .type('Bandung5300')
        cy.contains('login').click()
        cy.contains('kasirAja')
    })

    it('User Login Failed', () => {
        //cy.visit(base_url)
        //cy.contains('hai, kasirAja')
        login()
        cy.get('#email-label').click()
            .type('cofiali53@gmail.com')
        cy.get('#password').click()
            .type('Bandung530')
        cy.contains('login').click()
        cy.contains('Kredensial yang Anda berikan salah')
    })
})