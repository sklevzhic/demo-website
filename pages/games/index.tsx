import Link from "next/link";
import React from "react";
import {MainLayout} from "../../components/layout/MainLayout";
import {useAppSelector} from "../../hooks/useAppSelector";
import Image from "next/image";

interface GamesPageProps {

}

const GamesPage: React.FC<GamesPageProps> = () => {

    let { games } = useAppSelector(state => state.games)

    return <MainLayout>
        <header className="bg-white">
            <div className="mx-auto py-2 px-2 sm:px-6 lg:px-8">
                <h1 className="text-xl font-bold text-gray-900">All games</h1>
            </div>
        </header>
        <main>
            
            <div className="flex flex-col">
                {
                    Object.keys(games).map(key => {
                        return <Link key={key} href={"/games/" + key}>
                            <div key={key} className="shadow-md flex rounded-lg my-1 overflow-hidden">
                                <div className="bg-yellow-300 overflow-hidden w-20 h-20">
                                    <Image className="object-fill" src={games[key].image}/>
                                </div>
                                <div className="flex flex-col justify-between p-4 leading-normal">
                                    <h5 className="text-l line-clamp-1 mt-3 font-bold tracking-tight text-gray-900">{games[key].name}</h5>
                                    {/*<p className="font-light text-gray-700 line-clamp-2">{games[key].description}</p>*/}
                                </div>
                            </div>
                        </Link>
                    })
                }
            </div>
        </main>
    </MainLayout>
}

export default GamesPage

