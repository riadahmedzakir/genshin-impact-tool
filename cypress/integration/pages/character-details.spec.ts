// tslint:disable: radix
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

    xit(`should validate that all image is availabe`, () => {
        cy.get('.character-header').contains('Diluc');

        cy.get('img').should(($imgs) => {
            $imgs.map((i, img) => expect(img.naturalWidth).to.be.greaterThan(0));
        });
    });

    it(`should check values in base stats table`, () => {
        cy.get(`.character-base-stats-table`).within(() => {
            cy.get(`tbody`).within(() => {
                cy.get(`tr`).should((elements) => {
                    expect(elements).to.have.length(14);

                    _forEach(elements, element => {
                        debugger;
                        _forEach(element.children, (child, childIndex) => {
                            if (childIndex === 0) {
                                expect(child.innerHTML).to.have.length.greaterThan(0);
                            } else {
                                const htmlText = (child.innerHTML) ? child.innerHTML.replace(/<[^>]+>/g, '').trim() : undefined;
                                const value = parseInt(htmlText);
                                const isTrue = (value >= 0) ? true : false;
                                debugger;
                                expect(isTrue).to.be.true;
                            }
                        });
                    });

                });
            });
        });
    });
});
