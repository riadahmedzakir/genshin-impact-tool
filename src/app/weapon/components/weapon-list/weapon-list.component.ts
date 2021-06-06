// tslint:disable: no-string-literal
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { filter as _filter } from 'lodash';
import { first } from 'rxjs/operators';

import { SwordData } from './../../../shared/weapon-basic-data/swords-data.constant';
import { stars } from './../../../shared/constants/stars.constant';
import { ClaymoreData } from './../../../shared/weapon-basic-data/claymore-data.constant';
import { PolearmData } from './../../../shared/weapon-basic-data/polearm-data.constant';
import { BowData } from './../../../shared/weapon-basic-data/bow-data.constant';
import { CatalystData } from './../../../shared/weapon-basic-data/catalyst-data.constant';
import { IWeaponData } from './../../../shared/interfaces/IWeaponData.interface';
import { WeaponService } from '../../services/weapon.service';
import { CommonCharacterAscensionMaterial } from './../../../shared/constants/common-character-ascension.material.constant';
import { WeaponAscensionMaterial } from './../../../shared/constants/weapon-ascension.material.constant';
import { CommonWeaponAscensionMaterial } from 'src/app/shared/constants/common-weapon-ascension.material.constant';

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

  commonCharacterAscensionMaterial = CommonCharacterAscensionMaterial;
  weaponAscensionMaterial = WeaponAscensionMaterial;
  commonWeaponAscensionMaterial = CommonWeaponAscensionMaterial;

  displayColumn = ['Level', 'BaseStats', 'SubStats'];
  displayColumnRefine = ['Level', 'Description'];
  displayColumnAscension = ['Phase', 'Mora', 'WeaponAscension', 'CommonWeaponAscensionMaterial', 'CommonMaterial'];

  weaponList: IWeaponData;
  weaponDetailsList = {};

  isLoading = false;

  currentWeaponType = this.activatedRoute.snapshot['_routerState'].url.replace('/', '');

  constructor(
    private activatedRoute: ActivatedRoute,
    private weaponService: WeaponService
  ) { }

  filterWeapon(star: number): void {
    this.weaponList = _filter(this.dataList[this.currentWeaponType], { Rarity: star });
  }

  getDetails(weapon): void {
    this.isLoading = true;
    if (!this.weaponDetailsList[weapon.Name]) {
      this.weaponService.getWeaponDetails(weapon.Name).pipe(first()).subscribe(res => {
        this.weaponDetailsList[weapon.Name] = res;
        this.isLoading = false;
        console.log(this.weaponDetailsList);
      });
    } else {
      this.isLoading = false;
    }
  }

  ngOnInit(): void {
    this.weaponList = this.dataList[this.currentWeaponType];
  }

}
