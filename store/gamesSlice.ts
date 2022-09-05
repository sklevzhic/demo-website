import {createSlice} from '@reduxjs/toolkit'
import { GamesState } from '../models/IGame'
import {PazliSlov} from "../games/igra-pazli-slov";
import PS from "../assets/images/pazli-slov.jpg"
import Zagadki from "../assets/images/350-zagadok.jpg"
import CrossyImg from "../assets/images/krossy.jpg"
import CurortAlisyImg from "../assets/images/kurort-alisy.jpg"
import DoodleAlchemyAnimalsImg from "../assets/images/daa.jpg"
import AlchemysioImg from "../assets/images/alchemy2.jpg"
import DoodleAlchemyImg from "../assets/images/da.jpg"
import SlovariumImg from "../assets/images/slovarium.jpg"
import SemSlovImg from "../assets/images/7-slov.jpg"
import StenaSlovImg from "../assets/images/stena-slov.jpg"
import SlovesnitSousImg from "../assets/images/stena-slov.jpg"
import WordsgramImg from "../assets/images/wordsgram.jpg"
import {ThreeHundredFiftyWords} from "../games/350words";
import { Crossy } from '../games/crossy';
import {CurortAlisy} from "../games/cururtalisy";
import { DoodleAlchemyAnimals } from '../games/daa';
import {Alchemysio} from "../games/alchemysio";
import {DoodleAlchemy} from "../games/da";
import {Slovarium} from "../games/slovarium";
import {SemSlov} from "../games/sem-slov";
import { StenaSlov } from '../games/stenaSlov';
import {SlovesniySous} from "../games/slovesniysous";
import { Wordsgram } from '../games/wordsgram';

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
        "cururtAlisy": {
            name: "Курорт Алисы",
            image: CurortAlisyImg,
            description: "Описание игры 4",
            levels: CurortAlisy
        },
        "doodle-alchemy-animals": {
            name: "Doodle Alchemy Animals",
            image: DoodleAlchemyAnimalsImg,
            description: "Описание игры 4",
            levels: DoodleAlchemyAnimals
        },
        "alchemy-2": {
            name: "Алхимия - Смешивай и открывай",
            image: AlchemysioImg,
            description: "Описание игры 4",
            levels: Alchemysio
        },
        "doodle-alchemy": {
            name: "Doodle Alchemy",
            image: DoodleAlchemyImg,
            description: "Описание игры 4",
            levels: DoodleAlchemy
        },
        "slovarium": {
            name: "Словариум",
            image: SlovariumImg,
            description: "Описание игры 4",
            levels: Slovarium
        },
        "sem-slov": {
            name: "7 слов",
            image: SemSlovImg,
            description: "Описание игры 4",
            levels: SemSlov
        },
        "stena-slov": {
            name: "Стена Слов",
            image: StenaSlovImg,
            description: "Описание игры 4",
            levels: StenaSlov
        },
        "slovesniy-sous": {
            name: "Словесный Соус (Word Sauce)",
            image: SlovesnitSousImg,
            description: "Описание игры 4",
            levels: SlovesniySous
        },
        "wordsgram": {
            name: "Wordsgram",
            image: WordsgramImg,
            description: "Описание игры 4",
            levels: Wordsgram
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