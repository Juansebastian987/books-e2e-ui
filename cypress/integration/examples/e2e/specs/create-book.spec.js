describe('When the user wants to register a book', () => {
	/**
     * Arrange
     */
	 var name = "Nuevo Curso QA";
	
	/**
     * Act
     */
	before(()=>{
	  cy.visit("https://integracion-continua-front.herokuapp.com")
      cy.get('button.table-button.ant-btn.ant-btn-primary').click();
	  cy.wait(200);
	  cy.get('#name').type(name);
	  cy.get('#author').type("Juan Sebastian Cardona");
      cy.get('button.ant-btn.ant-btn-primary.ng-star-inserted').click();

	})

	
	/**
     * Assert
     */
	it("Then the book should be listed with the right name and author" ,() =>{
		cy.get('table').contains('td', name).should('be.visible');
	});

});