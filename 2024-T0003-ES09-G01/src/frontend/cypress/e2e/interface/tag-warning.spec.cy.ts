describe('Teste de interface - Tags de aviso de inconformidade no CSV', () => {
    it('Verifica se as tags de aviso estão presentes', () => {
      cy.visit('http://localhost:3000/') // Substitua pela URL do seu aplicativo
  
      cy.get('.styles_column__6wZ_d').each(tag => {
        cy.wrap(tag)
          .find('.styles_circle__3jEY8.styles_c-blue__wcnNQ')
          .should('exist')
        
        cy.wrap(tag)
          .find('p')
          .should('contain', 'Padrão | Cliente')
      })
    })
  })