// tslint:disable: no-string-literal
// tslint:disable: deprecation
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { first } from 'rxjs/operators';

import { CharacterService } from '../../services/character.service';
import { CommonCharacterAscensionMaterial } from './../../../shared/constants/common-character-ascension.material.constant';
import { ElementalJewelConstant } from './../../../shared/constants/elemental-jewel.constant';
import { ElementalStone } from './../../../shared/constants/elemental-stone.constant';
import { LocalMaterial } from './../../../shared/constants/local-material.constant';
import { TalentBook } from './../../../shared/constants/talent-book.constant';
import { TalentMaterial } from './../../../shared/constants/talent-material.constant';
import { TalentLevelUpCount } from './../../../shared/constants/talent-level-up-count.constant';
import { CharacterLevelUpCount } from './../../../shared/constants/character-level-up-count.constant';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.scss']
})
export class CharacterDetailsComponent implements OnInit {
  commonCharacterAscensionMaterial = CommonCharacterAscensionMaterial;
  elementalJewelConstant = ElementalJewelConstant;
  elementalStone = ElementalStone;
  localMaterial = LocalMaterial;
  talentBook = TalentBook;
  talentMaterial = TalentMaterial;
  talentLevelUpCount = TalentLevelUpCount;
  characterLevelUpCount = CharacterLevelUpCount;

  baseStatsDisplayColumns: string[] = ['Level', 'HP', 'ATK', 'DEF', 'ExtraStats'];
  baseStats;

  attackScalingDisplayColumns: string[] = ['Hits', 'Level1', 'Level2', 'Level3', 'Level4', 'Level5', 'Level6', 'Level7', 'Level8', 'Level9', 'Level10', 'Level11'];
  normalAttackScale;
  chargedAttackScale;
  plungingAttackScale;

  elementalSkillScalingDisplayColumns: string[] = ['Hits', 'Level1', 'Level2', 'Level3', 'Level4', 'Level5', 'Level6', 'Level7', 'Level8', 'Level9', 'Level10', 'Level11', 'Level12', 'Level13', 'Level14', 'Level15'];
  elementalSkillScale;

  elementalBrustScalingDisplayColumns: string[] = ['Hits', 'Level1', 'Level2', 'Level3', 'Level4', 'Level5', 'Level6', 'Level7', 'Level8', 'Level9', 'Level10', 'Level11', 'Level12', 'Level13', 'Level14', 'Level15'];
  elementalBrustScale;

  characterLevelingDisplayColumns: string[] = ['Phase', 'Mora', 'Jewel', 'ElementalStone', 'LocalSpecialty', 'CommonMaterial'];
  talentLevelingDisplayColumns: string[] = ['Phase', 'Mora', 'CommonMaterial', 'TalentMaterial', 'BossMaterial', 'Crown'];

  constellationDetails;

  currentRoute = this.activatedRoute.snapshot['_routerState'].url;
  selectedCharacter = this.currentRoute.split('/')[2].toLowerCase();
  selectedCharacterData;

  noDataAvailable = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private characterService: CharacterService
  ) { }

  getCharacterData(): void {
    this.characterService.getCharacterData(this.selectedCharacter).pipe(first()).subscribe(res => {
      this.selectedCharacterData = res;
      this.baseStats = res.BaseStats;
      this.normalAttackScale = res.NormalAttackScale;
      this.chargedAttackScale = res.ChargedAttackScale;
      this.plungingAttackScale = res.PlungingAttackScale;
      this.elementalSkillScale = res.ElementalSkill;
      this.elementalBrustScale = res.ElementalBrust;
      this.constellationDetails = res.ConstellationDetails;
    }, err => {
      this.noDataAvailable = true;
    });
  }

  ngOnInit(): void {
    this.getCharacterData();
  }

}
