import {useRouter} from "next/router";
import React from "react";
import {MainLayout} from "../../components/layout/MainLayout";
import {useAppSelector} from "../../hooks/useAppSelector";

interface GamePageProps {

}

const GamePage: React.FC<GamePageProps> = () => {
    const {games} = useAppSelector(state => state.games)

    const router = useRouter()
    const {game} = router.query

    let name = games[String(game)]?.name || "name"
    let img = games[String(game)]?.image || "img"
    let description = games[String(game)]?.description || "description"
    let levels = games[String(game)]?.levels || []

    return <div>
        <MainLayout>
            <div className={"p-3"}>
                <div className="flex">
                    <figure className={"overflow-hidden"}>
                        <img className={"w-48 h-48 object-none"} src={img} alt=""/>
                    </figure>
                    <div className={"p-2"}>
                        <h1 className="text-3xl font-bold text-gray-900 my-8">{name}</h1>
                        <p>{description}</p>
                    </div>
                </div>

                {
                    Object.keys(levels).map(el => {
                        return <div key={el}>
                            Вопрос: {levels[el].question} <br/>
                            Answer: {levels[el].answer} <br/>
                        </div>
                    })
                }

            </div>

        </MainLayout>
    </div>
}

export default GamePage

