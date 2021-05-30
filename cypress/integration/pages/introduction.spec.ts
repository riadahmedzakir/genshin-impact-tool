
describe('Dashboard page', () => {
    beforeEach(() => {
        cy.visit(`/`);
        cy.wait(1000);
    });

    it(`land on the introduction page`, () => {
        cy.get('.introduction-description')
            .contains('Genshin Impact');
    });

    it(`should redirect to 5 star character menu`, () => {
        cy.navigateByMenu('Characters', '5-Star Characters');

        cy.get('.character-info-name').contains('Diluc');
    });
});
