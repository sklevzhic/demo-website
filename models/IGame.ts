export interface ILevelGame {
    question: string,
    answer: string,
}

export interface IGame {
    name: string,
    image: any,
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
