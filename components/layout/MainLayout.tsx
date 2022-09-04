import React from "react";
import {Disclosure} from "@headlessui/react";
import {Header} from "../Header";

interface MainLayoutProps {
    children: React.ReactNode
}

export const MainLayout: React.FC<MainLayoutProps> = ({children}) => {
    return <div className="min-h-full">
        <Disclosure as="nav">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <Header/>
                {children}
            </div>
        </Disclosure>
    </div>
}

