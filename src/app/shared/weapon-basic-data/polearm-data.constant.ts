import { IWeaponData } from '../interfaces/IWeaponData.interface';

export const PolearmData: IWeaponData[] = [
    {
        Name: 'Beginner\'s Protector',
        Rarity: 1,
        Atk: 23,
        SubStat: 'none',
        SubStatsValue: 0,
        SpecialAbility: ''
    },
    {
        Name: 'Iron Point',
        Rarity: 2,
        Atk: 33,
        SubStat: 'none',
        SubStatsValue: 0,
        SpecialAbility: ''
    },
    {
        Name: 'Black Tassel',
        Rarity: 3,
        Atk: 38,
        SubStat: 'HP%',
        SubStatsValue: 10,
        SpecialAbility: 'Increases DMG against slimes by 40%.'
    },
    {
        Name: 'Halberd',
        Rarity: 3,
        Atk: 40,
        SubStat: 'ATK%',
        SubStatsValue: 5,
        SpecialAbility: 'Normal Attacks deal an additional 160% ATK as DMG. Can only occur once every 10s.'
    },
    {
        Name: 'White Tassel',
        Rarity: 3,
        Atk: 39,
        SubStat: 'CRIT Rate%',
        SubStatsValue: 5,
        SpecialAbility: 'Increases Normal Attack DMG by 24%.'
    },
    {
        Name: 'Blackcliff Pole',
        Rarity: 4,
        Atk: 42,
        SubStat: 'CRIT DMG%',
        SubStatsValue: 12,
        SpecialAbility: 'After defeating an enemy, ATK is increased by 12% for 30s. This effect has a maximum of 3 stacks, and the duration of each stack is independent of the others.'
    },
    {
        Name: 'Crescent Pike',
        Rarity: 4,
        Atk: 44,
        SubStat: 'Phys DMG%',
        SubStatsValue: 7,
        SpecialAbility: 'After picking up an Elemental Orb/Particle, Normal and Charged Attacks deal additional DMG equal to 20% of ATK for 5s.'
    },
    {
        Name: 'Deathmatch',
        Rarity: 4,
        Atk: 41,
        SubStat: 'CRIT Rate%',
        SubStatsValue: 8,
        SpecialAbility: 'If there are at least 2 opponents nearby, ATK is increased by 16% and DEF is increased by 16%. If there are less than 2 opponents nearby, ATK is increased by 24%.'
    },
    {
        Name: 'Dragon\'s Bane',
        Rarity: 4,
        Atk: 41,
        SubStat: 'Elemental Mastery',
        SubStatsValue: 48,
        SpecialAbility: 'Increases DMG against opponents affected by Hydro or Pyro by 20%.'
    },
    {
        Name: 'Lithic Spear',
        Rarity: 4,
        Atk: 44,
        SubStat: 'ATK%',
        SubStatsValue: 6,
        SpecialAbility: 'For every character in the party who hails from Liyue, the character who equips this weapon gains a 7% ATK increase and a 3% CRIT Rate increase. This effect stacks up to 4 times.'
    },
    {
        Name: 'Prototype Starglitter',
        Rarity: 4,
        Atk: 42,
        SubStat: 'Energy Recharge%',
        SubStatsValue: 10,
        SpecialAbility: 'After using an Elemental Skill, increases Normal and Charged Attack DMG by 8% for 12s. Max 2 stacks.'
    },
    {
        Name: 'Favonius Lance',
        Rarity: 4,
        Atk: 44,
        SubStat: 'Energy Recharge%',
        SubStatsValue: 6,
        SpecialAbility: 'CRIT Hits have a 60% chance to generate a small amount of Elemental Particles, which will regenerate 6 Energy for the character. Can only occur once every 12s.'
    },
    {
        Name: 'Royal Spear',
        Rarity: 4,
        Atk: 44,
        SubStat: 'ATK%',
        SubStatsValue: 6,
        SpecialAbility: 'Upon damaging an opponent, increases CRIT Rate by 8%. Max 5 stacks. A CRIT Hit removes all stacks.'
    },
    {
        Name: 'Dragonspine Spear',
        Rarity: 4,
        Atk: 41,
        SubStat: 'Phys DMG%',
        SubStatsValue: 15,
        SpecialAbility: 'Hitting an opponent with Normal and Charged Attacks has a 60% chance of forming and dropping an Everfrost Icicle above them, dealing AoE DMG equal to 80% of ATK. Opponents affected by Cryo are instead dealt DMG equal to 200% of ATK.Can only occur once every 10s.'
    },
    {
        Name: 'Vortex Vanquisher',
        Rarity: 5,
        Atk: 46,
        SubStat: 'ATK%',
        SubStatsValue: 10,
        SpecialAbility: 'Increases Shield Strength by 20%. Scoring hits on opponents increases ATK by 4% for 8s. Max 5 stacks. Can only occur once every 0.3s. While protected by a shield, this ATK increase effect is increased by 100%.'
    },
    {
        Name: 'Primordial Jade Winged-Spear',
        Rarity: 5,
        Atk: 48,
        SubStat: 'CRIT Rate%',
        SubStatsValue: 4,
        SpecialAbility: 'On hit, increases ATK by 3.2% for 6s. Max 7 stacks. This effect can only occur once every 0.3s. While in possession of the maximum possible stacks, DMG dealt is increased by 12%.'
    },
    {
        Name: 'Skyward Spine',
        Rarity: 5,
        Atk: 48,
        SubStat: 'Energy Recharge%',
        SubStatsValue: 8,
        SpecialAbility: 'Increases CRIT Rate by 8% and increases Normal ATK SPD by 12%. Additionally, Normal and Charged Attacks hits on opponents have a 50% chance to trigger a vacuum blade that deals 40% of ATK as DMG in a small AoE.This effect can occur no more than once every 2s.'
    },
    {
        Name: 'Staff of Homa',
        Rarity: 5,
        Atk: 46,
        SubStat: 'CRIT DMG%',
        SubStatsValue: 14,
        SpecialAbility: 'HP increased by 20%. Additionally, provides an ATK Bonus based on 0.8% of the wielder\'s Max HP.When the wielder\'s HP is less than 50%, this ATK Bonus is increased by an additional 1% of Max HP.'
    }
];
