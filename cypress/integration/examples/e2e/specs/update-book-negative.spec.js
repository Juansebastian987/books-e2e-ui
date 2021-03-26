describe('When the user wants to register a book', () => {

	/**
     * Arrange y Act
     */
	before(()=>{
	  cy.visit("https://integracion-continua-front.herokuapp.com")
      cy.get(':nth-child(1) > :nth-child(4) > .ant-btn').click();
	  cy.wait(200); 
      cy.get('#name').clear();
      cy.get('#author').clear();
	  cy.get('#name').type(" ");
	  cy.get('#author').type(" ");
      cy.get('button.ant-btn.ant-btn-primary.ng-star-inserted').click();

	}) 

	/**
     * Assert
     */
	it("Then the book should be listed with the right name and author" ,() =>{
		cy.get('table').contains('td', "Update Book").should('not.exist');
	});

});