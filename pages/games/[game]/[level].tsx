import {useRouter} from "next/router";
import React, {useState} from "react";

import {useAppSelector} from "../../../hooks/useAppSelector";
import {MainLayout} from "../../../components/layout/MainLayout";
import Head from "next/head";


interface GamePageProps {

}

const GamePage: React.FC<GamePageProps> = () => {
    const {games} = useAppSelector(state => state.games)
    const router = useRouter()
    const { game, level } = router.query

    let name = games[String(game)]?.name || "name"
    let img = games[String(game)]?.image || "img"
    let description = games[String(game)]?.description || "description"
    let levelAnswer = games[String(game)]?.levels[String(level)] || []

    return <div>
        <MainLayout>
            <div className={"p-3"}>
                <div className="flex">
                    <div className="overflow-hidden w-32 h-32" >
                        {/*<Image className="object-fill rounded-2xl" src={img}/>*/}
                    </div>
                    <div className={"p-2"}>
                        <h1 className="text-3xl font-bold text-gray-900">Ответ на {levelAnswer.question} уровень игры {name}</h1>
                        <p></p>
                    </div>
                </div>
            </div>
            <div>
                <div className={"border rounded-l m-0.5 p-2"}>
                    <h5 className={"text-l font-semibold my-0.5"}>Вопрос: {levelAnswer.question} </h5>
                    <p>Ответ: {levelAnswer.answer} </p>
                </div>
            </div>

        </MainLayout>
    </div>
}

export default GamePage

