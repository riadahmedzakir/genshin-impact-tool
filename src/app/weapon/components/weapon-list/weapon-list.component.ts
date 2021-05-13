// tslint:disable: no-string-literal
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { filter as _filter } from 'lodash';

import { SwordData } from './../../../shared/weapon-basic-data/swords-data.constant';
import { stars } from './../../../shared/constants/stars.constant';
import { ClaymoreData } from './../../../shared/weapon-basic-data/claymore-data.constant';
import { PolearmData } from './../../../shared/weapon-basic-data/polearm-data.constant';
import { BowData } from './../../../shared/weapon-basic-data/bow-data.constant';
import { CatalystData } from './../../../shared/weapon-basic-data/catalyst-data.constant';

@Component({
  selector: 'app-weapon-list',
  templateUrl: './weapon-list.component.html',
  styleUrls: ['./weapon-list.component.scss']
})
export class WeaponListComponent implements OnInit {
  stars = stars;
  dataList = {
    sword: SwordData,
    claymore: ClaymoreData,
    bow: BowData,
    catalyst: CatalystData,
    polearm: PolearmData
  };

  weaponList;

  currentWeaponType = this.activatedRoute.snapshot['_routerState'].url.replace('/', '');

  constructor(
    private activatedRoute: ActivatedRoute
  ) { }

  filterWeapon(star: number): void {
    this.weaponList = _filter(this.dataList[this.currentWeaponType], { Rarity: star });
  }

  ngOnInit(): void {
    this.weaponList = this.dataList[this.currentWeaponType];
  }

}
