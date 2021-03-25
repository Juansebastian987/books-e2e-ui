describe('When the user wants to register a book', () => {

	/**
     * Arrange y Act
     */
	before(()=>{
	  cy.visit("https://integracion-continua-front.herokuapp.com")
      cy.get(':nth-child(1) > :nth-child(4) > .ant-btn').click();
	  cy.wait(500); 
      cy.get('#name').clear();
      cy.get('#author').clear();
	  cy.get('#name').type("Nuevo Curso QA");
	  cy.get('#author').type("Juan Sebastian Cardona");
      cy.get('button.ant-btn.ant-btn-primary.ng-star-inserted').click();

	}) 

	/**
     * Assert
     */
	it("Then the book should be listed with the right name and author" ,() =>{
		cy.get('table').contains('td', "Nuevo Curso QA").should('be.visible');
	});

});