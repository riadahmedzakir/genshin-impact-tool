
describe('Navigation', () => {
    beforeEach(() => {
        cy.visit(`/`);
        cy.wait(1000);
    });

    xit(`land on the introduction page`, () => {
        cy.get('.introduction-description')
            .contains('Genshin Impact');
    });

    xit(`should redirect to 5 star character menu`, () => {
        cy.navigateByMenu('Characters', '5-Star Characters');

        cy.get('.character-info-name').contains('Diluc');
    });

    xit(`should redirect to 4 star character menu`, () => {
        cy.navigateByMenu('Characters', '4-Star Characters');

        cy.get('.character-info-name').contains('Amber');
    });

    xit(`should redirect to sword menu`, () => {
        cy.navigateByMenu('Weapon', 'Sword');

        cy.get('.weapon-info-name').contains('Dull Blade');
    });

    xit(`should redirect to claymore menu`, () => {
        cy.navigateByMenu('Weapon', 'Claymore');

        cy.get('.weapon-info-name').contains('Waster Greatsword');
    });

    xit(`should redirect to bow menu`, () => {
        cy.navigateByMenu('Weapon', 'Bow');

        cy.get('.weapon-info-name').contains('Hunter\'s Bow');
    });

    xit(`should redirect to catalyst menu`, () => {
        cy.navigateByMenu('Weapon', 'Catalyst');

        cy.get('.weapon-info-name').contains('Apprentice\'s Notes');
    });

    xit(`should redirect to polearm menu`, () => {
        cy.navigateByMenu('Weapon', 'Polearm');

        cy.get('.weapon-info-name').contains('Beginner\'s Protector');
    });
});
