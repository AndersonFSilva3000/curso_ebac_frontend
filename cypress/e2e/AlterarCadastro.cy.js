  /// <reference types="cypress" />

  describe('Teste para inclusão de contatos', () => {
    beforeEach(() => {
      cy.visit('https://agenda-contatos-react.vercel.app/')
    })
  
    it('Alteração de contato', () => {
      cy.get(':nth-child(3) > .sc-gueYoa > .edit').click()
      cy.get('[type="text"]').clear().type('AnderDev')
      cy.get('[type="email"]').clear().type('AnderDev@teste.com')
      cy.get('[type="tel"]').clear().type('11912345678')
      cy.get('.alterar').click()
    })
  })