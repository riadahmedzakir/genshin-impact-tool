import { IWeaponData } from '../interfaces/IWeaponData.interface';

export const BowData: IWeaponData[] = [
    {
        Name: 'Hunter\'s Bow',
        Rarity: 1,
        Atk: 23,
        SubStat: 'none',
        SubStatsValue: 0,
        SpecialAbility: ''
    },
    {
        Name: 'Seasoned Hunter\'s Bow',
        Rarity: 2,
        Atk: 33,
        SubStat: 'none',
        SubStatsValue: 0,
        SpecialAbility: ''
    },
    {
        Name: 'Messenger',
        Rarity: 3,
        Atk: 40,
        SubStat: 'CRIT DMG%',
        SubStatsValue: 6,
        SpecialAbility: 'Charged Attack hits on weak points deal an additional 100% ATK DMG as CRIT DMG. Can only occur once every 10s.'
    },
    {
        Name: 'Raven Bow',
        Rarity: 3,
        Atk: 40,
        SubStat: 'Elemental Mastery',
        SubStatsValue: 20,
        SpecialAbility: 'Increases DMG against opponents affected by Hydro or Pyro by 12%.'
    },
    {
        Name: 'Recurve Bow',
        Rarity: 3,
        Atk: 38,
        SubStat: 'HP%',
        SubStatsValue: 10,
        SpecialAbility: 'Defeating an opponent restores 8% HP.'
    },
    {
        Name: 'Sharpshooter\'s Oath',
        Rarity: 3,
        Atk: 39,
        SubStat: 'CRIT DMG%',
        SubStatsValue: 10,
        SpecialAbility: 'Increases DMG against weak spots by 24%.'
    },
    {
        Name: 'Slingshot',
        Rarity: 3,
        Atk: 38,
        SubStat: 'CRIT Rate%',
        SubStatsValue: 6,
        SpecialAbility: 'If a Normal or Charged Attack hits a target within 0.3s of being fired, increases DMG by 36%. Otherwise, decreases DMG by 10%.'
    },
    {
        Name: 'The Stringless',
        Rarity: 4,
        Atk: 42,
        SubStat: 'Elemental Mastery',
        SubStatsValue: 36,
        SpecialAbility: 'Increases Elemental Skill and Elemental Burst DMG by 24%.'
    },
    {
        Name: 'Alley Hunter',
        Rarity: 4,
        Atk: 44,
        SubStat: 'ATK%',
        SubStatsValue: 6,
        SpecialAbility: 'While the character equipped with this weapon is in the party but not on the field, their DMG increases by 2% every second up to a max of 20%. When the character is on the field for more than 4s, the aforementioned DMG buff decreases by 4% per second until it reaches 0%.'
    },
    {
        Name: 'Blackcliff Warbow',
        Rarity: 4,
        Atk: 44,
        SubStat: 'CRIT DMG%',
        SubStatsValue: 8,
        SpecialAbility: 'After defeating an enemy, ATK is increased by 12% for 30s. This effect has a maximum of 3 stacks, and the duration of each stack is independent of the others.'
    },
    {
        Name: 'Compound Bow',
        Rarity: 4,
        Atk: 41,
        SubStat: 'Phys DMG%',
        SubStatsValue: 15,
        SpecialAbility: 'Normal Attack and Charged Attack hits increase ATK by 4% and Normal ATK SPD by 1.2% for 6s. Max 4 stacks. Can only occur once every 0.3s.'
    },
    {
        Name: 'Favonius Warbow',
        Rarity: 4,
        Atk: 41,
        SubStat: 'Energy Recharge%',
        SubStatsValue: 13,
        SpecialAbility: 'CRIT Hits have a 60% chance to generate a small amount of Elemental Particles, which will regenerate 6 Energy for the character. Can only occur once every 12s.'
    },
    {
        Name: 'Prototype Crescent',
        Rarity: 4,
        Atk: 42,
        SubStat: 'ATK%',
        SubStatsValue: 9,
        SpecialAbility: 'Charged Attack hits on weak points increase Movement SPD by 10% and ATK by 36% for 10s.'
    },
    {
        Name: 'Royal Bow',
        Rarity: 4,
        Atk: 42,
        SubStat: 'ATK%',
        SubStatsValue: 9,
        SpecialAbility: 'Upon damaging an opponent, increases CRIT Rate by 8%. Max 5 stacks. A CRIT Hit removes all stacks.'
    },
    {
        Name: 'Rust',
        Rarity: 4,
        Atk: 42,
        SubStat: 'ATK%',
        SubStatsValue: 9,
        SpecialAbility: 'Increases Normal Attack DMG by 40% but decreases Charged Attack DMG by 10%.'
    },
    {
        Name: 'Sacrificial Bow',
        Rarity: 4,
        Atk: 44,
        SubStat: 'Energy Recharge%',
        SubStatsValue: 6,
        SpecialAbility: 'After damaging an opponent with an Elemental Skill, the skill has a 40% chance to end its own CD. Can only occur once every 30s.'
    },
    {
        Name: 'The Viridescent Hunt',
        Rarity: 4,
        Atk: 42,
        SubStat: 'CRIT Rate%',
        SubStatsValue: 6,
        SpecialAbility: 'Upon hit, Normal and Aimed Shot Attacks have a 50% chance to generate a Cyclone, which will continuously attract surrounding opponents, dealing 40% of ATK as DMG to these opponents every 0.5s for 4s. This effect can only occur once every 14s.'
    },
    {
        Name: 'Windblume Ode',
        Rarity: 4,
        Atk: 42,
        SubStat: 'Elemental Mastery',
        SubStatsValue: 36,
        SpecialAbility: 'After using an Elemental Skill, receive a boon from the ancient wish of the Windblume, increasing ATK by 16% for 6s.'
    },
    {
        Name: 'Skyward Harp',
        Rarity: 5,
        Atk: 48,
        SubStat: 'CRIT Rate%',
        SubStatsValue: 4,
        SpecialAbility: 'Increases CRIT DMG by 20%. Hits have a 60% chance to inflict a small AoE attack, dealing 125% Physical ATK DMG. Can only occur once every 4s.'
    },
    {
        Name: 'Amos\' Bow',
        Rarity: 5,
        Atk: 46,
        SubStat: 'ATK%',
        SubStatsValue: 10,
        SpecialAbility: 'Increases Normal and Charged Attack DMG by 12%. After a Normal or Charged Attack is fired, DMG dealt increases by a further 8% every 0.1s the arrow is in the air for up to 5 times.'
    },
    {
        Name: 'Kunwu\'s Wyrmbane',
        Rarity: 5,
        Atk: 46,
        SubStat: 'none',
        SubStatsValue: 0,
        SpecialAbility: 'Increases Shield Strength by 20%. Scoring hits on opponents increases ATK by 4% for 8s. Max 5 stacks. Can only occur once every 0.3s. While protected by a shield, this ATK increase effect is increased by 100%.'
    },
    {
        Name: 'Elegy for the End',
        Rarity: 5,
        Atk: 46,
        SubStat: 'Energy Recharge%',
        SubStatsValue: 12,
        SpecialAbility: 'A part of the "Millennial Movement" that wanders amidst the winds. Increases Elemental Mastery by 60. When the Elemental Skills or Elemental Bursts of the character wielding this weapon hit opponents, that character gains a Sigil of Remembrance. This effect can be triggered once every 0.2s and can be triggered even if said character is not on the field. When you possess 4 Sigils of Remembrance, all of them will be consumed and all nearby party members will obtain the "Millennial Movement: Farewell Song" effect for 12s. "Millennial Movement: Farewell Song" increases Elemental Mastery by 100 and increases ATK by 20%. Once this effect is triggered, you will not gain Sigils of Remembrance for 20s. Of the many effects of the "Millennial Movement," buffs of the same type will not stack.'
    },
    {
        Name: 'Primordial Jade Vista',
        Rarity: 5,
        Atk: 46,
        SubStat: 'none',
        SubStatsValue: 0,
        SpecialAbility: 'HP increased by 20%. Additionally, provides an ATK Bonus based on 1.2% of the wielder\'s Max HP.'
    }
];
