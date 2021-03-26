describe('When the user wants to register a book', () => {
	/**
     * Arrange y Act
     */
	before(()=>{
	  cy.visit("https://integracion-continua-front.herokuapp.com")
      cy.get('button.table-button.ant-btn.ant-btn-primary').click();
	  cy.wait(200);
	  cy.get('#name').type("Elemento a Leer QA");
	  cy.get('#author').type("Juan Sebastian Cardona");
      cy.get('button.ant-btn.ant-btn-primary.ng-star-inserted').click();

	})

	/**
     * Assert
     */
	it("Then the book should be listed with the right name and author" ,() =>{
		cy.get('table').contains("unique_value").should('have.length', 0);

	});
});