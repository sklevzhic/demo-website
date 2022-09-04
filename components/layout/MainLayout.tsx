import React from "react";
import {Disclosure} from "@headlessui/react";
import {Header} from "../Header";
import Sidebar from "../Sidebar";

interface MainLayoutProps {
    children: React.ReactNode
}

export const MainLayout: React.FC<MainLayoutProps> = ({children}) => {
    return <div className="min-h-full">
        <Disclosure as="nav">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <Header/>
                <div className={"flex py-2 divide-x divide-gray-200"}>
                    <div className={"basis-9/12 shrink-0"}>
                        {children}
                    </div>
                    <div className={"basis-3/12 shrink-0 overflow-hidden"}>
                        <Sidebar />
                    </div>
                </div>
            </div>
        </Disclosure>
    </div>
}

