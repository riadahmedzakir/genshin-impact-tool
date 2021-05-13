interface ITalentLevelUpCount {
    Phase: number;
    Mora: number;
    ItemLevel: string;
    CommonMeterialCount: number;
    TalentBookCount: number;
    TalentBossCount: number;
    Crown: number;
}

export const TalentLevelUpCount: ITalentLevelUpCount[] = [
    {
        Phase: 1,
        Mora: 12500,
        ItemLevel: 'Item_1',
        CommonMeterialCount: 6,
        TalentBookCount: 3,
        TalentBossCount: 0,
        Crown: 0
    },
    {
        Phase: 2,
        Mora: 17500,
        ItemLevel: 'Item_2',
        CommonMeterialCount: 3,
        TalentBookCount: 2,
        TalentBossCount: 0,
        Crown: 0
    },
    {
        Phase: 3,
        Mora: 25000,
        ItemLevel: 'Item_2',
        CommonMeterialCount: 4,
        TalentBookCount: 4,
        TalentBossCount: 0,
        Crown: 0
    },
    {
        Phase: 4,
        Mora: 30000,
        ItemLevel: 'Item_2',
        CommonMeterialCount: 6,
        TalentBookCount: 6,
        TalentBossCount: 0,
        Crown: 0
    },
    {
        Phase: 5,
        Mora: 37500,
        ItemLevel: 'Item_2',
        CommonMeterialCount: 9,
        TalentBookCount: 9,
        TalentBossCount: 0,
        Crown: 0
    },
    {
        Phase: 6,
        Mora: 120000,
        ItemLevel: 'Item_3',
        CommonMeterialCount: 4,
        TalentBookCount: 4,
        TalentBossCount: 1,
        Crown: 0
    },
    {
        Phase: 7,
        Mora: 260000,
        ItemLevel: 'Item_3',
        CommonMeterialCount: 6,
        TalentBookCount: 6,
        TalentBossCount: 1,
        Crown: 0
    },
    {
        Phase: 8,
        Mora: 450000,
        ItemLevel: 'Item_3',
        CommonMeterialCount: 9,
        TalentBookCount: 12,
        TalentBossCount: 2,
        Crown: 0
    },
    {
        Phase: 9,
        Mora: 12500,
        ItemLevel: 'Item_2',
        CommonMeterialCount: 12,
        TalentBookCount: 16,
        TalentBossCount: 2,
        Crown: 1
    }
];
