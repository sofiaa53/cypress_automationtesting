const { login } = require('../e2e/login.spec')

describe('Create New User', () => {
    it('Create new user successfully', () => {
        login()
        cy.contains('pengguna').click()
        cy.contains('tambah').click()
        cy.get('#nama').click()
            .type('Sofia Awiliyah')
        cy.get('#email').click()
            .type('sofiaa53@gmail.com')
        cy.get('#password').click()
            .type('qwerty123@')
        cy.contains('simpan').click()

        //ASSERT
        cy.contains('item ditambahkan')
    })

    it('User add new user without fill name', () => {
        login()
        cy.contains('pengguna').click()
        cy.contains('tambah').click()
        cy.get('#email').click()
            .type('sofiaa53@gmail.com')
        cy.get('#password').click()
            .type('qwerty123@')
        cy.contains('simpan').click()

        //ASSERT
        cy.contains('"name" is not allowed to be empty')
    })

    it('User add new user without fill email', () => {
        login()
        cy.contains('pengguna').click()
        cy.contains('tambah').click()
        cy.get('#nama').click()
            .type('Sofia Awiliyah')
        cy.get('#password').click()
            .type('qwerty123@')
        cy.contains('simpan').click()

        //ASSERT
        cy.contains('"email" is not allowed to be empty')
    })

   /* it('User add new user without fill password', () => {
        login()
        cy.contains('pengguna').click()
        cy.contains('tambah').click()
        cy.get('#nama').click()
            .type('Sofia Awiliyah')
        cy.get('#email').click()
            .type('sofiaa53@gmail.com')
        cy.contains('simpan').click()

        //ASSERT
        cy.contains('"password" is not allowed to be empty')
    })*/

})