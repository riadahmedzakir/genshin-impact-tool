declare global {
    namespace Cypress {
        interface Chainable<Subject> {
            navigateByMenu(menu?: string, submenu?: string): void;
        }
    }
}

Cypress.Commands.add('navigateByMenu', (menu, submenu) => {
    cy.get('.mat-list-item-content').contains(menu).click();

    if (submenu) {
        cy.wait(100);
        cy.get('.mat-list-item-content').contains(submenu).click();
    }
});

export { }