async function login() {
    cy.visit('/')
    cy.url().should('match', /login/)
    cy.contains('hai, kasirAja')
    cy.get('#email-label').click()
        .type('testing@gmail.com')
    cy.get('#password').click()
        .type('Bandung5300')
    cy.contains('login').click()
    cy.contains('kasirAja')
}

module.exports = {login}