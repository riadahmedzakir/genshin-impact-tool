// tslint:disable: no-string-literal
// tslint:disable: max-line-length
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { filter as _filter } from 'lodash';

import { elements } from './../../../shared/constants/element.constant';
import { weaponClass } from './../../../shared/constants/weapon-class.constant';
import { CharacterData } from './../../../shared/character-basic-data/character-data.constant';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss']
})
export class CharacterListComponent implements OnInit {
  characterTypeMap = {
    'character-five-star': 5,
    'character-four-star': 4
  };
  currentRoute = this.activatedRoute.snapshot['_routerState'].url;
  currentCharacterType = this.characterTypeMap[this.currentRoute.replace('/', '')];
  elements = elements;
  weaponClass = weaponClass;
  allCharacterList = CharacterData;
  characterList;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  characterDetails(character): void {
    this.router.navigate([this.currentRoute + '/' + character.Name]);
  }

  filterElement(element: string): void {
    this.characterList = _filter(this.allCharacterList, { Rarity: this.currentCharacterType, Element: element.charAt(0).toUpperCase() + element.slice(1) });
  }

  filterWeapon(weapon: string): void {
    this.characterList = _filter(this.allCharacterList, { Rarity: this.currentCharacterType, WeaponType: weapon.charAt(0).toUpperCase() + weapon.slice(1) });
  }

  reset(): void {
    this.characterList = _filter(this.allCharacterList, { Rarity: this.currentCharacterType });
  }

  ngOnInit(): void {
    console.log(this.currentCharacterType);
    this.characterList = _filter(this.allCharacterList, { Rarity: this.currentCharacterType });
  }

}
