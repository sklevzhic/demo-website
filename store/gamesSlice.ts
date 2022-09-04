import {createSlice} from '@reduxjs/toolkit'

interface ILevelGame {
    question: string,
    answer: string,
}

interface IGame {
    name: string,
    image: string,
    description: string,
    levels: {
        [key: number | string]: ILevelGame
    }
}

interface IGames {
    [key: string]: IGame
}

interface GamesState {
    games: IGames
}

const initialState: GamesState = {
    games: {
        "game1": {
            name: "Игра 1Игра 1Игра 1Игра 1Игра 1Игра 1Игра 1Игра 1",
            image: "https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1024&h=1280&q=80",
            description: "Описание игры 1Описание игры 1Описание игры 1Описание игры 1Описание игры 1Описание игры 1",
            levels: {
                "1": {
                    question: "«Все гениальное - просто!» - говорила она.",
                    answer: "АМЁБА",
                },
                "2": {
                    question: "«Все гениальное - просто!» - говорила она.",
                    answer: "АМЁБА",
                },
                "3": {
                    question: "«Все гениальное - просто!» - говорила она.",
                    answer: "АМЁБА",
                },
            }
        },
        "game2": {
            name: "Игра 2",
            image: "https://bygame.ru/uploads/ai1/recepty-alhimiya-na-bumage-zhivotnye.jpg",
            description: "Описание игры 2",
            levels: {
                "1": {
                    question: "«Все гениальное - просто!» - говорила она.",
                    answer: "АМЁБА",
                },
                "2": {
                    question: "«Все гениальное - просто!» - говорила она.",
                    answer: "АМЁБА",
                },
                "3": {
                    question: "«Все гениальное - просто!» - говорила она.",
                    answer: "АМЁБА",
                },
            }
        },
        "game3": {
            name: "Игра 3",
            image: "https://bygame.ru/uploads/ai1/recepty-alhimiya-na-bumage-zhivotnye.jpg",
            description: "Описание игры 3",
            levels: {
                "1": {
                    question: "«Все гениальное - просто!» - говорила она.",
                    answer: "АМЁБА",
                },
                "2": {
                    question: "«Все гениальное - просто!» - говорила она.",
                    answer: "АМЁБА",
                },
                "3": {
                    question: "«Все гениальное - просто!» - говорила она.",
                    answer: "АМЁБА",
                },
            }
        },
        "game4": {
            name: "Игра 4",
            image: "https://bygame.ru/uploads/ai1/recepty-alhimiya-na-bumage-zhivotnye.jpg",
            description: "Описание игры 4",
            levels: {
                "1": {
                    question: "«Все гениальное - просто!» - говорила она.",
                    answer: "АМЁБА",
                },
                "2": {
                    question: "«Все гениальное - просто!» - говорила она.",
                    answer: "АМЁБА",
                },
                "3": {
                    question: "«Все гениальное - просто!» - говорила она.",
                    answer: "АМЁБА",
                },
            }
        },
        "game5": {
            name: "Игра 4",
            image: "https://bygame.ru/uploads/ai1/recepty-alhimiya-na-bumage-zhivotnye.jpg",
            description: "Описание игры 4",
            levels: {
                "1": {
                    question: "«Все гениальное - просто!» - говорила она.",
                    answer: "АМЁБА",
                },
                "2": {
                    question: "«Все гениальное - просто!» - говорила она.",
                    answer: "АМЁБА",
                },
                "3": {
                    question: "«Все гениальное - просто!» - говорила она.",
                    answer: "АМЁБА",
                },
            }
        },
        "game6": {
            name: "Игра 4",
            image: "https://bygame.ru/uploads/ai1/recepty-alhimiya-na-bumage-zhivotnye.jpg",
            description: "Описание игры 4",
            levels: {
                "1": {
                    question: "«Все гениальное - просто!» - говорила она.",
                    answer: "АМЁБА",
                },
                "2": {
                    question: "«Все гениальное - просто!» - говорила она.",
                    answer: "АМЁБА",
                },
                "3": {
                    question: "«Все гениальное - просто!» - говорила она.",
                    answer: "АМЁБА",
                },
            }
        },
        "game7": {
            name: "Игра 4",
            image: "https://bygame.ru/uploads/ai1/recepty-alhimiya-na-bumage-zhivotnye.jpg",
            description: "Описание игры 4",
            levels: {
                "1": {
                    question: "«Все гениальное - просто!» - говорила она.",
                    answer: "АМЁБА",
                },
                "2": {
                    question: "«Все гениальное - просто!» - говорила она.",
                    answer: "АМЁБА",
                },
                "3": {
                    question: "«Все гениальное - просто!» - говорила она.",
                    answer: "АМЁБА",
                },
            }
        },
        "game8": {
            name: "Игра 4",
            image: "https://bygame.ru/uploads/ai1/recepty-alhimiya-na-bumage-zhivotnye.jpg",
            description: "Описание игры 4",
            levels: {
                "1": {
                    question: "«Все гениальное - просто!» - говорила она.",
                    answer: "АМЁБА",
                },
                "2": {
                    question: "«Все гениальное - просто!» - говорила она.",
                    answer: "АМЁБА",
                },
                "3": {
                    question: "«Все гениальное - просто!» - говорила она.",
                    answer: "АМЁБА",
                },
            }
        },
        "game9": {
            name: "Игра 4",
            image: "https://bygame.ru/uploads/ai1/recepty-alhimiya-na-bumage-zhivotnye.jpg",
            description: "Описание игры 4",
            levels: {
                "1": {
                    question: "«Все гениальное - просто!» - говорила она.",
                    answer: "АМЁБА",
                },
                "2": {
                    question: "«Все гениальное - просто!» - говорила она.",
                    answer: "АМЁБА",
                },
                "3": {
                    question: "«Все гениальное - просто!» - говорила она.",
                    answer: "АМЁБА",
                },
            }
        },
        "game10": {
            name: "Игра 4",
            image: "https://bygame.ru/uploads/ai1/recepty-alhimiya-na-bumage-zhivotnye.jpg",
            description: "Описание игры 4",
            levels: {
                "1": {
                    question: "«Все гениальное - просто!» - говорила она.",
                    answer: "АМЁБА",
                },
                "2": {
                    question: "«Все гениальное - просто!» - говорила она.",
                    answer: "АМЁБА",
                },
                "3": {
                    question: "«Все гениальное - просто!» - говорила она.",
                    answer: "АМЁБА",
                },
            }
        },
        "game11": {
            name: "Игра 4",
            image: "https://bygame.ru/uploads/ai1/recepty-alhimiya-na-bumage-zhivotnye.jpg",
            description: "Описание игры 4",
            levels: {
                "1": {
                    question: "«Все гениальное - просто!» - говорила она.",
                    answer: "АМЁБА",
                },
                "2": {
                    question: "«Все гениальное - просто!» - говорила она.",
                    answer: "АМЁБА",
                },
                "3": {
                    question: "«Все гениальное - просто!» - говорила она.",
                    answer: "АМЁБА",
                },
            }
        },
        "game12": {
            name: "Игра 4",
            image: "https://bygame.ru/uploads/ai1/recepty-alhimiya-na-bumage-zhivotnye.jpg",
            description: "Описание игры 4",
            levels: {
                "1": {
                    question: "«Все гениальное - просто!» - говорила она.",
                    answer: "АМЁБА",
                },
                "2": {
                    question: "«Все гениальное - просто!» - говорила она.",
                    answer: "АМЁБА",
                },
                "3": {
                    question: "«Все гениальное - просто!» - говорила она.",
                    answer: "АМЁБА",
                },
            }
        },
        "game13": {
            name: "Игра 4",
            image: "https://bygame.ru/uploads/ai1/recepty-alhimiya-na-bumage-zhivotnye.jpg",
            description: "Описание игры 4",
            levels: {
                "1": {
                    question: "«Все гениальное - просто!» - говорила она.",
                    answer: "АМЁБА",
                },
                "2": {
                    question: "«Все гениальное - просто!» - говорила она.",
                    answer: "АМЁБА",
                },
                "3": {
                    question: "«Все гениальное - просто!» - говорила она.",
                    answer: "АМЁБА",
                },
            }
        },
        "game14": {
            name: "Игра 4",
            image: "https://bygame.ru/uploads/ai1/recepty-alhimiya-na-bumage-zhivotnye.jpg",
            description: "Описание игры 4",
            levels: {
                "1": {
                    question: "«Все гениальное - просто!» - говорила она.",
                    answer: "АМЁБА",
                },
                "2": {
                    question: "«Все гениальное - просто!» - говорила она.",
                    answer: "АМЁБА",
                },
                "3": {
                    question: "«Все гениальное - просто!» - говорила она.",
                    answer: "АМЁБА",
                },
            }
        },

    }
}

export const gamesSlice = createSlice({
    name: 'games',
    initialState,
    reducers: {
        // increment: (state) => {
        //     state.games = []
        // },
    },
})

// export const {  } = gamesSlice.actions

// export const selectCount = (state: RootState) => state.games.games

export default gamesSlice.reducer