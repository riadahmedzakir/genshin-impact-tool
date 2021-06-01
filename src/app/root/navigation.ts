export interface INavigation {
    id: string;
    title: string;
    url: string;
    icon: string;
    isParent?: boolean;
    showChild?: boolean;
    children?: INavigation[];
}

export const navigations: INavigation[] = [
    {
        id: 'home',
        title: 'Introduction',
        url: '/home',
        icon: 'home',
        isParent: true,
        showChild: false,
        children: []
    },
    {
        id: 'character',
        title: 'Characters',
        url: '/character',
        icon: 'face',
        isParent: true,
        showChild: false,
        children: [
            {
                id: 'character-five-star',
                title: '5-Star Characters',
                url: '/character-five-star',
                icon: 'people'
            },
            {
                id: 'character-four-star',
                title: '4-Star Characters',
                url: '/character-four-star',
                icon: 'perm_identity'
            }
        ]
    },
    {
        id: 'weapon',
        title: 'Weapon',
        url: '/weapon',
        icon: 'construction',
        isParent: true,
        showChild: false,
        children: [
            {
                id: 'sword',
                title: 'Sword',
                url: '/sword',
                icon: 'arrow_right'
            },
            {
                id: 'claymore',
                title: 'Claymore',
                url: '/claymore',
                icon: 'arrow_right'
            },
            {
                id: 'bow',
                title: 'Bow',
                url: '/bow',
                icon: 'arrow_right'
            },
            {
                id: 'catalyst',
                title: 'Catalyst',
                url: '/catalyst',
                icon: 'arrow_right'
            },
            {
                id: 'polearm',
                title: 'Polearm',
                url: '/polearm',
                icon: 'arrow_right'
            }
        ]
    },
    {
        id: 'future-plans',
        title: 'Future plans',
        url: '/future-plans',
        icon: 'menu_book',
        isParent: true,
        showChild: false,
        children: []
    }
];
