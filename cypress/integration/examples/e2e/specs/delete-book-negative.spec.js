
describe('When the user wants to register a book', () => {
	/**
     * Arrange
     */
	var name;
	
	/**
     * Act
     */
	before(()=>{
	  cy.visit("https://integracion-continua-front.herokuapp.com")
	  cy.get(':nth-child(1) > .ant-table-selection-column > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-input').click();
	  cy.get('tbody td.ant-table-cell').eq(1).then(($cellname) => {
		name = $cellname.text();
	})  
	  cy.get('[nztype="default"]').click();	  	  
	})

	/**
     * Assert
     */
	it("Then the book should be listed with the right name and author" ,() =>{
		cy.get('table').contains('td', name).should('be.visible');
	});

});