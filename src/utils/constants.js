

export const pageLinks = {
    homePage: '/',
    ready: '/ready',
    instructionPage: '/instruction',
    instructionPageV2: '/instruction-v2',
    instructionPageV3: '/instruction-v3',
    playerPage: '/player',
    playerDataPage: '/player-data',
    configurationPlayerPage: '/configuration-player',
    userPage: '/user',
    selectTeamPage: '/select-team',
    preGamePage: '/pre-game',
    preGamePageCop: '/pre-game-cop',
    modePage: '/mode',
    initGamePage: '/init-game',
    initGamePageCop: '/init-game-cop',
    chooseGame: '/choose-game',
    //Game Routes
    beforeGame: '/game/before-game',
    duringGame: '/game/during-game',
    duringCopGame: '/game/during-cop-game',
    winnerGame: '/game/winner-game',
    winnerCopGame: '/game/winner-cop-game',
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

export const instructionsListV2 = [
    {
        id: 'game1',
        name: 'HoopX',
        types: [
            {
                typeName: 'Co-op',
                instructions: [
                    {
                        image: 'https://placehold.co/400x100',
                        description: `Everyone plays towards a shared goal—score when the hoop's screen turns green.`,
                        title: 'The instructions are simple',
                        text: `Score when the hoop's screen turns green.`,
                    },
                    {
                        image: 'https://placehold.co/400x100',
                        description: `Everyone plays towards a shared goal—score when the hoop's screen turns green.`,
                        title: 'The instructions are simple',
                        text: `The screen won't stay on green for long—act fast!`,
                    },
                    {
                        image: 'https://placehold.co/400x100',
                        description: `Everyone plays towards a shared goal—score when the hoop's screen turns green.`,
                        title: 'The instructions are simple',
                        text: `If the screen turns Red, no points will be recorded.`,
                    },
                ],
            },
            {
                typeName: 'Competitive',
                instructions: [
                    {
                        image: 'https://placehold.co/400x100',
                        description: `Team Blue vs. Team Green! Work together to score when your team's color appears.`,
                        title: 'The instructions are simple',
                        text: `Score when the hoop's screen turns your team's color.`,
                    },
                    {
                        image: 'https://placehold.co/400x100',
                        description: `Team Blue vs. Team Green! Work together to score when your team's color appears.`,
                        title: 'The instructions are simple',
                        text: `Score fast - your team’s color won't stay on the screen for long.`,
                    },
                    {
                        image: 'https://placehold.co/400x100',
                        description: `Team Blue vs. Team Green! Work together to score when your team's color appears.`,
                        title: 'The instructions are simple',
                        text: `If you score when the opponent's color is displayed, your points go to them!`,
                    },
                ],
            },
        ],
    },
    {
        id: 'abc2',
        name: 'Game 2',
        comingSoon: true,
        types: [
            {
                typeName: 'Co-op 2',
                instructions: [
                    {
                        image: 'https://placehold.co/400x100',
                        title: 'The instruction are simple',
                        text: `When the hoop's screen shows your assigned color, score as much as you can 2`,
                    },
                    {
                        image: 'https://placehold.co/400x100',
                        title: 'The instruction are simple',
                        text: `The screens won't show your assigned color for long. If they turn red, no scores will be recorded. 2`,
                    },
                    {
                        image: 'https://placehold.co/400x100',
                        title: 'The instruction are simple',
                        text: `If you're playing in teams, be careful not to score when the screen shows your opponent's color! 2`,
                    },
                ],
            },
            {
                typeName: 'Competitive 2',
                instructions: [
                    {
                        image: 'https://placehold.co/400x100',
                        title: 'The instruction are simple',
                        text: `When the hoop's screen shows your assigned color, score as much as you can 2`,
                    },
                    {
                        image: 'https://placehold.co/400x100',
                        title: 'The instruction are simple',
                        text: `The screens won't show your assigned color for long. If they turn red, no scores will be recorded. 2`,
                    },
                    {
                        image: 'https://placehold.co/400x100',
                        title: 'The instruction are simple',
                        text: `If you're playing in teams, be careful not to score when the screen shows your opponent's color! 2`,
                    },
                ],
            },
        ],
    },
    {
        id: 'abc3',
        name: 'Game 3',
        comingSoon: true,
        types: [
            {
                typeName: 'Co-op 3',
                instructions: [
                    {
                        image: 'https://placehold.co/400x100',
                        title: 'The instruction are simple',
                        text: `When the hoop's screen shows your assigned color, score as much as you can 3`,
                    },
                    {
                        image: 'https://placehold.co/400x100',
                        title: 'The instruction are simple',
                        text: `The screens won't show your assigned color for long. If they turn red, no scores will be recorded. 3`,
                    },
                    {
                        image: 'https://placehold.co/400x100',
                        title: 'The instruction are simple',
                        text: `If you're playing in teams, be careful not to score when the screen shows your opponent's color! 3`,
                    },
                ],
            },
            {
                typeName: 'Competitive 3',
                instructions: [
                    {
                        image: 'https://placehold.co/400x100',
                        title: 'The instruction are simple',
                        text: `When the hoop's screen shows your assigned color, score as much as you can 3`,
                    },
                    {
                        image: 'https://placehold.co/400x100',
                        title: 'The instruction are simple',
                        text: `The screens won't show your assigned color for long. If they turn red, no scores will be recorded. 3`,
                    },
                    {
                        image: 'https://placehold.co/400x100',
                        title: 'The instruction are simple',
                        text: `If you're playing in teams, be careful not to score when the screen shows your opponent's color! 3`,
                    },
                ],
            },
        ],
    },
    {
        id: 'abc4',
        name: 'Game 4',
        comingSoon: true,
        types: [
            {
                typeName: 'Co-op 4',
                instructions: [
                    {
                        image: 'https://placehold.co/400x100',
                        title: 'The instruction are simple',
                        text: `When the hoop's screen shows your assigned color, score as much as you can 4`,
                    },
                    {
                        image: 'https://placehold.co/400x100',
                        title: 'The instruction are simple',
                        text: `The screens won't show your assigned color for long. If they turn red, no scores will be recorded. 4`,
                    },
                    {
                        image: 'https://placehold.co/400x100',
                        title: 'The instruction are simple',
                        text: `If you're playing in teams, be careful not to score when the screen shows your opponent's color! 4`,
                    },
                ],
            },
            {
                typeName: 'Competitive 4',
                instructions: [
                    {
                        image: 'https://placehold.co/400x100',
                        title: 'The instruction are simple',
                        text: `When the hoop's screen shows your assigned color, score as much as you can 4`,
                    },
                    {
                        image: 'https://placehold.co/400x100',
                        title: 'The instruction are simple',
                        text: `The screens won't show your assigned color for long. If they turn red, no scores will be recorded. 4`,
                    },
                    {
                        image: 'https://placehold.co/400x100',
                        title: 'The instruction are simple',
                        text: `If you're playing in teams, be careful not to score when the screen shows your opponent's color! 4`,
                    },
                ],
            },
        ],
    },
];

export const difficultiesList = [
    {
        id: 1,
        name: '1',
    },
    {
        id: 2,
        name: '2',
    },
    {
        id: 3,
        name: '3',
    },
    {
        id: 4,
        name: '4',
    },
    {
        id: 5,
        name: '5',
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

export const defaultPlayers = {
    user0: {
        name: 'Player 1',
        image: 'https://placehold.co/200x200'
    },
    user1: {
        name: 'Player 2',
        image: 'https://placehold.co/200x200'
    },
    user2: {
        name: 'Player 3',
        image: 'https://placehold.co/200x200'
    },
    user3: {
        name: 'Player 4',
        image: 'https://placehold.co/200x200'
    },
    user4: {
        name: 'Player 5',
        image: 'https://placehold.co/200x200'
    },
    user5: {
        name: 'Player 6',
        image: 'https://placehold.co/200x200'
    },
}

export const gameObjectTeams = [
    {
        id: 'team 1',
        score: 12,
        teamClassName: 'container-left',
        teamImage: '/images/team-green.png',
        imagePlayers: [
            'https://placehold.co/200x200',
            'https://placehold.co/200x200',
        ],
    },
    {
        id: 'team 2',
        score: 5,
        teamClassName: 'container-right',
        teamImage: '/images/team-blue.png',
        imagePlayers: [
            'https://placehold.co/200x200',
            'https://placehold.co/200x200',
        ],
    },
];

export const gameWinnerTeam = {
    id: 'team 1',
    score: 9,
    teamClassName: 'team-1',
    teamName: 'Green',
    teamImage: '/images/team-green.png',
    imagePlayers: [
        'https://placehold.co/200x200',
        'https://placehold.co/200x200',
    ],
};

export const gameObjectCop = {
    id: 'team 1',
    score: 9,
    teamClassName: 'team-1',
    imagePlayers: [
        'https://placehold.co/200x200',
        'https://placehold.co/200x200',
        'https://placehold.co/200x200',
        'https://placehold.co/200x200',
    ],
};