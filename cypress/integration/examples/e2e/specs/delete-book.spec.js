describe('When the user wants to register a book', () => {
	before(()=>{
	  cy.visit("https://integracion-continua-front.herokuapp.com")
	  cy.get(':nth-child(1) > .ant-table-selection-column > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-input').click();
	  cy.get('[nztype="default"]').click();

	})
	/**
	 * FALTA ESTO
	 */
	it("Then the cat should be listed with the right name and author" ,() =>{
		
	});

});