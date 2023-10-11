  /// <reference types="cypress" />

describe('Teste para inclusão de contatos', () => {
  beforeEach(() => {
    cy.visit('https://agenda-contatos-react.vercel.app/')
  })

  it('Preenchendo formulário de cadastro de contato.', () => {
    cy.get('[type="text"]').type('Anderson F. Silva')
    cy.get('[type="email"]').type('anderson@teste.com')
    cy.get('[type="tel"]').type('11987654321')
    cy.get('.adicionar').click()
  })
})