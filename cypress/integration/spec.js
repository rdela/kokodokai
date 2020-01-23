/* eslint-disable no-undef */
describe('Sapper template app', () => {
	beforeEach(() => {
		cy.visit('/');
	});

	it('has the correct <h1>', () => {
		cy.contains('h1', 'Kokodokai');
	});

	it('navigates to /about', () => {
		cy.get('nav a').contains('about').click();
		cy.url().should('include', '/about');
	});

});