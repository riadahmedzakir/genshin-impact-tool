import { CharacterData } from './../../../src/app/shared/character-basic-data/character-data.constant';
import { forEach as _forEach, filter as _filter } from 'lodash';

describe('Details page', () => {
    beforeEach(() => {
        cy.visit(`/`);
        cy.wait(1000);

        cy.navigateByMenu('Characters', '5-Star Characters');

        cy.get('.character-info-name')
            .contains('Diluc')
            .click();
    });

    it(`should validate that all image is availabe`, () => {
        cy.get('.character-header').contains('Diluc');

        cy.get('img').should(($imgs) => {
            $imgs.map((i, img) => expect(img.naturalWidth).to.be.greaterThan(0));
        });
    });
});
