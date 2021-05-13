interface ICharacterLevelUpCount {
    Phase: number;
    Mora: number;
    JewelLevel: string;
    JewelCount: number;
    ElementalStoneCount: number;
    LocalSpecialtyCount: number;
    CommonMaterilCount: number;
    CommonMaterialLevel: string;
}

export const CharacterLevelUpCount: ICharacterLevelUpCount[] = [
    {
        Phase: 1,
        Mora: 20000,
        JewelLevel: 'Item_1',
        JewelCount: 1,
        ElementalStoneCount: 0,
        LocalSpecialtyCount: 3,
        CommonMaterilCount: 3,
        CommonMaterialLevel: 'Item_1',
    },
    {
        Phase: 2,
        Mora: 40000,
        JewelLevel: 'Item_2',
        JewelCount: 3,
        ElementalStoneCount: 2,
        LocalSpecialtyCount: 10,
        CommonMaterilCount: 15,
        CommonMaterialLevel: 'Item_1',
    },
    {
        Phase: 3,
        Mora: 60000,
        JewelLevel: 'Item_2',
        JewelCount: 6,
        ElementalStoneCount: 4,
        LocalSpecialtyCount: 20,
        CommonMaterilCount: 12,
        CommonMaterialLevel: 'Item_2',
    },
    {
        Phase: 4,
        Mora: 80000,
        JewelLevel: 'Item_3',
        JewelCount: 3,
        ElementalStoneCount: 8,
        LocalSpecialtyCount: 30,
        CommonMaterilCount: 18,
        CommonMaterialLevel: 'Item_2',
    },
    {
        Phase: 5,
        Mora: 100000,
        JewelLevel: 'Item_3',
        JewelCount: 6,
        ElementalStoneCount: 12,
        LocalSpecialtyCount: 45,
        CommonMaterilCount: 12,
        CommonMaterialLevel: 'Item_3',
    },
    {
        Phase: 6,
        Mora: 120000,
        JewelLevel: 'Item_4',
        JewelCount: 6,
        ElementalStoneCount: 20,
        LocalSpecialtyCount: 60,
        CommonMaterilCount: 24,
        CommonMaterialLevel: 'Item_3',
    }
];
