/// <reference types="cypress" />

describe('Testando  a agenda de contatos', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })
    it('deve preencher os campos e adicionar novo contato', () => {
        cy.get('input[type="text"]').type('evenilson silva')
        cy.get('input[type="email"]').type('evenilsonguerreiro@gmail.com')
        cy.get('input[type="Tel"]').type('85 98854 0568')
        cy.get('.adicionar').click()

        cy.contains('evenilson silva').should('exist')
        cy.contains('evenilsonguerreiro@gmail.com').should('exist')
        cy.contains('85 98854 0568').should('exist')
        cy.get('button[type="submit"]').click()

    })
    it('Deve alterar um contato existente', () => {
        cy.get('.edit').first().click()
        cy.get('input[type="text"]').clear().type('Maria santos')
        cy.get('input[type="Tel"]').clear().type('85 98854 0568')
        cy.get('input[type="email"]').clear().type('Maria@gmail.com')
        cy.get('.alterar').click()

        cy.contains('Maria santos').should('exist')
        cy.contains('Maria@gmail.com').should('exist')
        cy.contains('85 98854 0568').should('exist')
    })
    it('Deve remover um contato', () => {
        cy.get('.delete').first().click()
        cy.get('.sc-eDDNvR.cTVgex > li').should('have.length', 9)
    })



})
