describe('When the user wants to register a book', () => {

	/**
     * Arrange y Act
     */
	before(()=>{
	  cy.visit("https://integracion-continua-front.herokuapp.com")
      cy.get('button.table-button.ant-btn.ant-btn-primary').click();
	  cy.wait(500);
	  cy.get('#name').type("Elemento a Leer QA");
	  cy.get('#author').type("Juan Sebastian Cardona");
      cy.get('button.ant-btn.ant-btn-primary.ng-star-inserted').click();

	})

	/**
     * Assert
     */
	it("Then the book should be listed with the right name and author" ,() =>{
		cy.get('table').contains('td', "Elemento a Leer QA").should('be.visible');
        cy.get('table').contains('td', "Juan Sebastian Cardona").should('be.visible');

        cy.get('table').contains('td', "Introduction to Algorithms").should('be.visible');
        cy.get('table').contains('td', "Thomas H. Cormen, Charles E. Leiserson, Ronald L. Rivest, and Clifford Stein").should('be.visible');

        cy.get('table').contains('td', "Soft Skills: The Software Developer's Life Manual").should('be.visible');
        cy.get('table').contains('td', "John Sonmez").should('be.visible');
	});

});