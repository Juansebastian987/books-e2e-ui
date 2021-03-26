describe('When the user wants to register a book', () => {
	/**
     * Arrange
     */
	 var name = "Nuevo Curso QA";
      var author = "Juan Sebastian Cardona";
	/**
     * Arrange y Act
     */
	before(()=>{
	  cy.visit("https://integracion-continua-front.herokuapp.com")
      cy.get('button.table-button.ant-btn.ant-btn-primary').click();
	  cy.wait(500);
	  cy.get('#name').type(name);
	  cy.get('#author').type(author);
      cy.get('button.ant-btn.ant-btn-primary.ng-star-inserted').click();

	})

	/**
     * Assert
     */
	it("Then the book should be listed with the right name and author" ,() =>{
	   cy.get('table').contains('td', name).should('be.visible');
        cy.get('table').contains('td', author).should('be.visible');
	});

});