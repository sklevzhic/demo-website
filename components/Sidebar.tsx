import React from "react";
import {useAppSelector} from "../hooks/useAppSelector";
import Link from "next/link";

interface SidebarProps {

}

const Sidebar: React.FC<SidebarProps> = () => {
    let {games} = useAppSelector(state => state.games)
    return <div className={"p-2"}>
        <div className="flex justify-between items-center mb-4">
            <h5 className="text-xl font-bold leading-none text-gray-900">Popular Games</h5>
            {/*<Link href={"/games"}>*/}
            {/*    <a*/}
            {/*        className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">*/}
            {/*        View all*/}
            {/*    </a>*/}
            {/*</Link>*/}

        </div>
        <div className="flow-root">
            <ul role="list" className="divide-y divide-gray-200">
                {
                    Object.keys(games).map(key => {
                        return <li key={key} className="py-3 sm:py-4">
                            <div className="flex items-center space-x-4">
                                <div className="flex-shrink-0">
                                    <img className="w-8 h-8 rounded-full"
                                         src="https://bygame.ru/uploads/ai1/recepty-alhimiya-na-bumage-zhivotnye.jpg"
                                         alt="1"/>
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="text-sm font-medium text-gray-900 truncate">
                                        {games[key].name}
                                    </p>
                                    <p className="text-sm text-gray-500 truncate">
                                        {Object.keys(games[key].levels).length} уровней
                                    </p>
                                </div>
                            </div>
                        </li>
                    })
                }
            </ul>
        </div>
    </div>
}

export default Sidebar

