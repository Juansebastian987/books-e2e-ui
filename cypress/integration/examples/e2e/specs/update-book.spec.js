describe('When the user wants to register a book', () => {
	before(()=>{
	  cy.visit("https://integracion-continua-front.herokuapp.com")
      cy.get(':nth-child(1) > :nth-child(4) > .ant-btn').click();
	  cy.wait(500); 
      cy.get('#name').clear();
      cy.get('#author').clear();
	  cy.get('#name').type("SSSSSS");
	  cy.get('#author').type("SSSSSSSS");
      cy.get('button.ant-btn.ant-btn-primary.ng-star-inserted').click();

	})
	/**
	 * FALTA ESTO
	 */
	it("Then the cat should be listed with the right name and author" ,() =>{
		
	});

});