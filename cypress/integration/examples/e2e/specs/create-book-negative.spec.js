describe('When the user wants to register a book', () => {

	/**
     * Arrange y Act
     */
	before(()=>{
	  cy.visit("https://integracion-continua-front.herokuapp.com")
      cy.get('button.table-button.ant-btn.ant-btn-primary').click();
	  cy.wait(500);
	  cy.get('#name').type(" ");
	  cy.get('#author').type(" ");
      cy.get('button.ant-btn.ant-btn-primary.ng-star-inserted').click();

	})

	/**
     * Assert
     */
	it("Then the book should be listed with the right name and author" ,() =>{
		cy.get('table').contains('td', "This Not Exist QA").should('not.exist');
	});

});