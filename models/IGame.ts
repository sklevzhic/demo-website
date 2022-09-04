export interface ILevelGame {
    question: string,
    answer: string,
}

export interface IGame {
    name: string,
    image: string,
    description: string,
    levels: ILevel
}

export interface ILevel {
    [key: number | string]: ILevelGame
}


export interface IGames {
    [key: string]: IGame
}

export interface GamesState {
    games: IGames
}
