  /// <reference types="cypress" />

  describe('Teste para inclusão de contatos', () => {
    beforeEach(() => {
      cy.visit('https://agenda-contatos-react.vercel.app/')
    })

    it('Remoção de conta', () => {
      cy.get(':nth-child(2) > .sc-gueYoa > .delete').click()
    })
  })