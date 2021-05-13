export interface ICharacterData {
    Name: string;
    img: string;
    Title: string;
    Allegiance: string;
    WeaponType: 'Claymore' | 'Sword' | 'Bow' | 'Catalyst' | 'Polearm';
    Birthday: string;
    Element: 'Anemo' | 'Geo' | 'Pyro' | 'Hydro' | 'Cryo' | 'Electro' | 'Dendro';
    Constellation: string;
    Rarity: 4 | 5;
}
