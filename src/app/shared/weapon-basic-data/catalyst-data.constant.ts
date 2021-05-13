import { IWeaponData } from '../interfaces/IWeaponData.interface';

export const CatalystData: IWeaponData[] = [
    {
        Name: 'Apprentice\'s Notes',
        Rarity: 1,
        Atk: 23,
        SubStat: 'none',
        SubStatsValue: 0,
        SpecialAbility: ''
    },
    {
        Name: 'Pocket Grimoire',
        Rarity: 2,
        Atk: 33,
        SubStat: 'none',
        SubStatsValue: 0,
        SpecialAbility: ''
    },
    {
        Name: 'Emerald Orb',
        Rarity: 3,
        Atk: 40,
        SubStat: 'Elemental Mastery',
        SubStatsValue: 20,
        SpecialAbility: 'Upon causing a Vaporize, Electro-Charged, Frozen, or a Hydro-infused Swirl reaction, increases ATK by 20% for 12s.'
    },
    {
        Name: 'Magic Guide',
        Rarity: 3,
        Atk: 38,
        SubStat: 'Elemental Mastery',
        SubStatsValue: 41,
        SpecialAbility: 'Increases DMG against opponents affected by Hydro or Electro by 12%.'
    },
    {
        Name: 'Otherworldly Story',
        Rarity: 3,
        Atk: 39,
        SubStat: 'Energy Recharge%',
        SubStatsValue: 8,
        SpecialAbility: 'Picking up an Elemental Energy Orb/Particle recovers 1% HP.'
    },
    {
        Name: 'Thrilling Tales of Dragon Slayers',
        Rarity: 3,
        Atk: 39,
        SubStat: 'HP%',
        SubStatsValue: 7,
        SpecialAbility: 'When switching characters, the new character taking the field has their ATK increased by 24% for 10s. This effect can only occur once every 20s.'
    },
    {
        Name: 'Twin Nephrite',
        Rarity: 3,
        Atk: 40,
        SubStat: 'CRIT Rate%',
        SubStatsValue: 3,
        SpecialAbility: 'Defeating an opponent increases Movement SPD and ATK by 12% for 15s.'
    },
    {
        Name: 'Blackcliff Agate',
        Rarity: 4,
        Atk: 42,
        SubStat: 'CRIT DMG%',
        SubStatsValue: 12,
        SpecialAbility: 'After defeating an enemy, ATK is increased by 12% for 30s. This effect has a maximum of 3 stacks, and the duration of each stack is independent of the others.'
    },
    {
        Name: 'Favonius Codex',
        Rarity: 4,
        Atk: 42,
        SubStat: 'Energy Recharge%',
        SubStatsValue: 10,
        SpecialAbility: 'CRIT Hits have a 60% chance to generate a small amount of Elemental Particles, which will regenerate 6 Energy for the character. Can only occur once every 12s.'
    },
    {
        Name: 'Mappa Mare',
        Rarity: 4,
        Atk: 44,
        SubStat: 'Elemental Mastery',
        SubStatsValue: 24,
        SpecialAbility: 'Triggering an Elemental reaction grants a 8% Elemental DMG Bonus for 10s. Max 2 stacks.'
    },
    {
        Name: 'Prototype Amber',
        Rarity: 4,
        Atk: 42,
        SubStat: 'HP%',
        SubStatsValue: 9,
        SpecialAbility: 'Using an Elemental Burst regenerates 4 Energy every 2s for 6s. All party members will regenerate 4% HP every 2s for this duration.'
    },
    {
        Name: 'Royal Grimoire',
        Rarity: 4,
        Atk: 44,
        SubStat: 'ATK%',
        SubStatsValue: 6,
        SpecialAbility: 'Upon damaging an opponent, increases CRIT Rate by 8%. Max 5 stacks. A CRIT Hit removes all stacks.'
    },
    {
        Name: 'Sacrificial Fragments',
        Rarity: 4,
        Atk: 41,
        SubStat: 'Elemental Mastery',
        SubStatsValue: 48,
        SpecialAbility: 'After damaging an opponent with an Elemental Skill, the skill has a 40% chance to end its own CD. Can only occur once every 30s.'
    },
    {
        Name: 'Solar Pearl',
        Rarity: 4,
        Atk: 42,
        SubStat: 'CRIT Rate%',
        SubStatsValue: 6,
        SpecialAbility: 'Normal Attack hits increase Elemental Skill and Elemental Burst DMG by 20% for 6s. Likewise, Elemental Skill or Elemental Burst hits increase Normal Attack DMG by 20% for 6s.'
    },
    {
        Name: 'The Widsith',
        Rarity: 4,
        Atk: 42,
        SubStat: 'CRIT DMG%',
        SubStatsValue: 12,
        SpecialAbility: 'When the character takes the field, they will gain a random theme song for 10s. This can only occur once every 30s. Recitative: ATK is increased by 60%. Aria: Increases all Elemental DMG by 48%. Interlude: Elemental Mastery is increased by 240.'
    },
    {
        Name: 'Wine and Song',
        Rarity: 4,
        Atk: 44,
        SubStat: 'Energy Recharge%',
        SubStatsValue: 6,
        SpecialAbility: 'Hitting an opponent with a Normal Attack decreases the Stamina consumption of Sprint or Alternate Sprint by 14% for 5s. Additionally, using a Sprint or Alternate Sprint ability increases ATK by 20% for 5s.'
    },
    {
        Name: 'Eye of Perception',
        Rarity: 4,
        Atk: 41,
        SubStat: 'ATK%',
        SubStatsValue: 12,
        SpecialAbility: 'Normal and Charged Attacks have a 50% chance to fire a Bolt of Perception, dealing 240% ATK as DMG. This bolt can bounce between opponents a maximum of 4 times. This effect can occur once every 12s.'
    },
    {
        Name: 'Frostbearer',
        Rarity: 4,
        Atk: 42,
        SubStat: 'ATK%',
        SubStatsValue: 9,
        SpecialAbility: 'Hitting an opponent with Normal and Charged Attacks has a 60% chance of forming and dropping an Everfrost Icicle above them, dealing AoE DMG equal to 80% of ATK. Opponents affected by Cryo are instead dealt DMG equal to 200% of ATK.Can only occur once every 10s.'
    },
    {
        Name: 'Lost Prayer to the Sacred Winds',
        Rarity: 5,
        Atk: 46,
        SubStat: 'CRIT Rate%',
        SubStatsValue: 7,
        SpecialAbility: 'Increases Movement SPD by 10%. When in battle, gain an 8% Elemental DMG Bonus every 4s. Max 4 stacks. Lasts until the character falls or leaves combat.'
    },
    {
        Name: 'Skyward Atlas',
        Rarity: 5,
        Atk: 48,
        SubStat: 'ATK%',
        SubStatsValue: 7,
        SpecialAbility: 'Increases Elemental DMG Bonus by 12%. Normal Attack hits have a 50% chance to earn the favor of the clouds, which actively seek out nearby opponents to attack for 15s, dealing 160% ATK DMG. Can only occur once every 30s.'
    },
    {
        Name: 'Memory of Dust',
        Rarity: 5,
        Atk: 46,
        SubStat: 'ATK%',
        SubStatsValue: 10,
        SpecialAbility: 'Increases Shield Strength by 20%. Scoring hits on opponents increases ATK by 4% for 8s. Max 5 stacks. Can only occur once every 0.3s. While protected by a shield, this ATK increase effect is increased by 100%.'
    },
    {
        Name: 'Primordial Jade Regalia',
        Rarity: 5,
        Atk: 48,
        SubStat: 'none',
        SubStatsValue: 0,
        SpecialAbility: ''
    }
];
