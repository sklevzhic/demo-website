import {createSlice} from '@reduxjs/toolkit'
import { GamesState } from '../models/IGame'
import {PazliSlov} from "../games/igra-pazli-slov";
import PS from "../assets/images/pazli-slov.jpg"
import Zagadki from "../assets/images/350-zagadok.jpg"
import CrossyImg from "../assets/images/krossy.jpg"
import {ThreeHundredFiftyWords} from "../games/350words";
import { Crossy } from '../games/crossy';

const initialState: GamesState = {
    games: {
        "pazli-slov": {
            name: "Пазлы слов ВК",
            image: PS,
            description: "Описание игры 4",
            levels: PazliSlov
        },
        "350-zagadok": {
            name: "350 загадок",
            image: Zagadki,
            description: "Описание игры 4",
            levels: ThreeHundredFiftyWords
        },
        "crossy": {
            name: "Кроссы",
            image: CrossyImg,
            description: "Описание игры 4",
            levels: Crossy
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