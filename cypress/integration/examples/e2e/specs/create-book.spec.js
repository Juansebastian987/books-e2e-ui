describe('When the user wants to register a book', () => {
	before(()=>{
	  cy.visit("https://integracion-continua-front.herokuapp.com")
      cy.get('button.table-button.ant-btn.ant-btn-primary').click();
	  cy.wait(500);
	  cy.get('#name').type("FFFFFF");
	  cy.get('#author').type("FFFFFFF");
      cy.get('button.ant-btn.ant-btn-primary.ng-star-inserted').click();

	})
	/**
	 * FALTA ESTO
	 */
	it("Then the cat should be listed with the right name and author" ,() =>{
		
	});

});