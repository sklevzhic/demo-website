import {useRouter} from "next/router";
import React, {useMemo, useState} from "react";
import {MainLayout} from "../../../components/layout/MainLayout";
import {useAppSelector} from "../../../hooks/useAppSelector";
import Head from "next/head";
import Image from "next/image";
import {ILevel} from "../../../models/IGame";

interface GamePageProps {

}

const GamePage: React.FC<GamePageProps> = () => {
    const {games} = useAppSelector(state => state.games)

    const router = useRouter()
    const {game} = router.query

    let name = games[String(game)]?.name || "name"
    let img = games[String(game)]?.image || "img"
    let description = games[String(game)]?.description || "description"
    const [levels, setLevels] = useState(games[String(game)]?.levels || [])
    const [text, setText] = useState("")

    const handlerInputText = (e: React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value)
    }

    const filteredTasks = useMemo(() => {
        return Object.keys(levels)
            .filter(key => levels[key].question.toString().includes("а"))
            .reduce((obj: ILevel, key) => {
                obj[key] = levels[key];
                return obj;
            }, {})
    }, [text,levels])

    return <div>
        <MainLayout>
            <Head>
                <title>{name}: ответы на игру</title>
                <meta name="description" content="THE ANSWERS.SU - Ответы, Прохождение игр." />
                <meta name="keywords" content="Ответы, Прохождение игр." />
            </Head>


            <div className={"p-3"}>
                <div className="flex">
                    <div className="overflow-hidden w-32 h-32" >
                        {/*<Image className="object-fill rounded-2xl" src={img}/>*/}
                    </div>
                    <div className={"p-2"}>
                        <h1 className="text-3xl font-bold text-gray-900">{name}</h1>
                        <p>{description}</p>
                    </div>
                </div>
                <div className={"mb-2"}>
                    <label htmlFor="helper-text"
                           className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Быстрый поиск по ответам. Введите часть вопроса ....</label>
                    <input type="text" id="helper-text"
                           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                           placeholder="Текст" value={text} onChange={handlerInputText} />

                </div>

                {/*{*/}
                {/*    console.log(filteredTasks)*/}
                {/*    // Object.keys(filteredTasks).map(el => {*/}
                {/*    //     return <div key={el} className={"border rounded-l m-0.5 p-2"}>*/}
                {/*    //         <h5 className={"text-l font-semibold my-0.5"}>Вопрос: </h5>*/}
                {/*    //         <p>Ответ:  </p>*/}
                {/*    //     </div>*/}
                {/*    // })*/}
                {/*}*/}

            </div>

        </MainLayout>
    </div>
}

export default GamePage

