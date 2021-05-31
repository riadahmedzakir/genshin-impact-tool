import { CharacterData } from './../../../src/app/shared/character-basic-data/character-data.constant';
import { forEach as _forEach, filter as _filter } from 'lodash';

describe('Dashboard page', () => {
    beforeEach(() => {
        cy.visit(`/`);
        cy.wait(1000);

        cy.navigateByMenu('Characters', '5-Star Characters');
    });

    // No need to test for all rarity
    xit(`Should check for all the 5 star characters`, () => {
        _forEach(CharacterData, character => {
            if (character.Rarity === 5) {
                cy.get('.character-info-name')
                    .contains(character.Name);
            }
        });
    });

    // No need to test for all elements
    xit(`should filter anemo characters`, () => {
        cy.get('.anemo').first().click();
        cy.wait(1000);

        let anemoCharacters = _filter(CharacterData, { Element: 'Anemo' });

        _forEach(anemoCharacters, character => {
            if (character.Rarity === 5) {
                cy.get('.character-info-name')
                    .contains(character.Name);
            }
        });
    });

    // No need to test for all weapon
    xit(`should filter claymore users`, () => {
        cy.get('.claymore').first().click();
        cy.wait(1000);

        let claymoreCharacters = _filter(CharacterData, { WeaponType: 'Claymore' });

        _forEach(claymoreCharacters, character => {
            if (character.Rarity === 5) {
                cy.get('.character-info-name')
                    .contains(character.Name);
            }
        });
    });

    xit(`should reset the filter`, () => {
        cy.get('.claymore').first().click();
        cy.wait(1000);

        cy.get('.reset').first().click();
        cy.wait(1000);

        _forEach(CharacterData, character => {
            if (character.Rarity === 5) {
                cy.get('.character-info-name')
                    .contains(character.Name);
            }
        });
    });
});
