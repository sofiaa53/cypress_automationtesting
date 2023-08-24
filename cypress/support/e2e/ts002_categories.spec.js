const { login } = require('../e2e/login.spec')

describe('Create New Category', () => {
    it('Create new category successfully', () => {
        login()
        cy.contains('kategori').click()
        cy.contains('tambah').click()
        cy.get('#nama').click()
            .type('Electronics')
        cy.get('#deskripsi').click()
            .type('Android, iPhone, Laptop, Tablet, TV and many more')

        cy.contains('simpan').click()

        //ASSERT
        cy.contains('item ditambahkan')
    })

    it('User add new category without fill description', () => {
        login()
        cy.contains('kategori').click()
        cy.contains('tambah').click()
        cy.get('#nama').click()
            .type('Electronics')

        cy.contains('simpan').click()

        //ASSERT
        cy.contains('item ditambahkan')
    })

    it('User add new category without fill name', () => {
        login()
        cy.contains('kategori').click()
        cy.contains('tambah').click()
        cy.get('#deskripsi').click()
            .type('Android, iPhone, Laptop, Tablet, TV and many more')

        cy.contains('simpan').click()

        //ASSERT
        cy.contains('"name" is not allowed to be empty')
    })

})