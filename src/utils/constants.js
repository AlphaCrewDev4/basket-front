

export const pageLinks = {
    homePage: '/',
    ready: '/ready',
    instructionPage: '/instruction',
    playerPage: '/player',
    playerDataPage: '/player-data',
    configurationPlayerPage: '/configuration-player',
    userPage: '/user',
    selectTeamPage: '/select-team',
    preGamePage: '/pre-game',
    modePage: '/mode',
    initGamePage: '/init-game',
}

export const instructionsList = [
    {
        image: 'https://placehold.co/400x100',
        title: 'The instruction are simple',
        text: `When the hoop's screen shows your assigned color, score as much as you can`,
    },
    {
        image: 'https://placehold.co/400x100',
        title: 'The instruction are simple',
        text: `The screens won't show your assigned color for long. If they turn red, no scores will be recorded.`,
    },
    {
        image: 'https://placehold.co/400x100',
        title: 'The instruction are simple',
        text: `If you're playing in teams, be careful not to score when the screen shows your opponent's color!`,
        last: true,
    },
];

export const usersList = [
    {
        id: '1',
        name: 'Name 1',
        image: '/images/team-blue-1.png',
    },
    {
        id: '2',
        name: 'Name 2',
        image: '/images/team-blue-2.png',
    },
    {
        id: '3',
        name: 'Name 3',
        image: '/images/team-blue-3.png',
    },
    {
        id: '4',
        name: 'Name 4',
        image: '/images/team-blue-1.png',
    },
    {
        id: '5',
        name: 'Name 5',
        image: '/images/team-blue-2.png',
    },
    {
        id: '6',
        name: 'Name 6',
        image: '/images/team-blue-3.png',
    },
];

export const usersListTeam = [
    {
        id: '1',
        name: 'Name 1',
        image: '/images/team-green-1.png',
        team: 'Green'
    },
    {
        id: '2',
        name: 'Name 2',
        image: '/images/team-green-2.png',
        team: 'Green'
    },
    {
        id: '3',
        name: 'Name 3',
        image: '/images/team-green-3.png',
        team: 'Green'
    },
    {
        id: '4',
        name: 'Name 4',
        image: '/images/team-blue-1.png',
        team: 'Blue'
    },
    {
        id: '5',
        name: 'Name 5',
        image: '/images/team-blue-2.png',
        team: 'Blue'
    },
    {
        id: '6',
        name: 'Name 6',
        image: '/images/team-blue-3.png',
        team: 'Blue'
    },
];

export const modeList = [
    {
        id: 0,
        name: 'Solo',
        image: 'https://placehold.co/400x300',
        difficulties: [
            'Normal1',
            'Mayhem',
        ]
    },
    {
        id: 1,
        name: 'Multipleyer - Competitive Up to X players',
        image: 'https://placehold.co/400x300',
        difficulties: [
            'Normal2',
            'Mayhem',
        ]
    },
    {
        id: 2,
        name: 'Multipleyer - Competitive Up to X players',
        image: 'https://placehold.co/400x300',
        difficulties: [
            'Normal3',
            'Mayhem',
        ]
    },
];

export const animationConfig = {
    duration: '1500',
};