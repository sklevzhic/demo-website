import Link from "next/link";
import React from "react";
import {MainLayout} from "../../components/layout/MainLayout";
import {useAppSelector} from "../../hooks/useAppSelector";

interface GamesPageProps {

}

const GamesPage: React.FC<GamesPageProps> = () => {

    let {games} = useAppSelector(state => state.games)

    return <MainLayout>
        <header className="bg-white shadow">
            <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold text-gray-900">All games</h1>
            </div>
        </header>
        <main>
            <div className="max-w-7xl te mx-auto py-6 sm:px-6 lg:px-8">
                {/* Replace with your content */}
                <div className="px-4 py-6 sm:px-0">
                    <div className="flex flex-wrap justify-between">
                        {
                            Object.keys(games).map(key => {
                                return <Link key={key} href={"/games/" + key}>
                                    <div key={key} className="w-[30%] my-1 items-center bg-white rounded-lg border shadow-md overflow-hidden
                                    md:flex-row md:max-w-xl hover:bg-gray-100">
                                        <figure className={"overflow-hidden"}>
                                            <img
                                                className="object-none h-40 "
                                                src={games[key].image}
                                                alt=""/>
                                        </figure>
                                        <div className="flex flex-col justify-between p-4 leading-normal">
                                            <h5 className="mb-2 text-l line-clamp-1 font-bold tracking-tight text-gray-900">{games[key].name}</h5>
                                            <p className="mb-3 font-normal text-gray-700 line-clamp-2">{games[key].description}</p>
                                            <button className={"bg-red-50"}>Подробнее</button>
                                        </div>
                                    </div>
                                </Link>
                            })
                        }


                    </div>

                </div>
                {/* /End replace */}
            </div>
        </main>
    </MainLayout>
}

export default GamesPage

