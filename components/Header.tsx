import React from 'react'
import {Disclosure} from "@headlessui/react";
import Link from 'next/link';

interface HeaderProps {

}
const userNavigation = [
    {name: 'Your Profile', href: '#'},
    {name: 'Settings', href: '#'},
    {name: 'Sign out', href: '#'},
]



const user = {
    name: 'Tom Cook',
    email: 'tom@example.com',
    imageUrl:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}



function classNames(...classes: any) {
    return classes.filter(Boolean).join(' ')
}

const navigation = [
    {name: 'Main', href: '/', current: true},
    {name: 'All games', href: '/games', current: false},
]


export const Header: React.FC<HeaderProps> = () => {
    return <Disclosure as="nav" className="">
        {({open}) => (
            <>
                    <div className="flex items-center justify-between h-16 border-b">
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                                <Link href={"/"}>
                                    <img
                                        className="h-8 w-8 cursor-pointer"
                                        src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                                        alt="Workflow"
                                    />
                                </Link>
                            </div>
                            <div className="hidden md:block">
                                <div className="ml-10 flex items-baseline space-x-4">
                                    {navigation.map((item) => (
                                        <Link key={item.href} href={item.href}>
                                            <a className={classNames(
                                                    item.current
                                                        ? 'bg-gray-900 text-white'
                                                        : 'text-gray-900 hover:bg-gray-900 hover:text-white',
                                                    'px-3 py-2 rounded-md text-sm font-medium'
                                                )}
                                                aria-current={item.current ? 'page' : undefined}
                                            >
                                                {item.name}
                                            </a>
                                        </Link>

                                    ))}
                                </div>
                            </div>
                        </div>
                        {/*<UserInfo />*/}
                        <div className="-mr-2 flex md:hidden">
                            {/* Mobile menu button */}
                            <Disclosure.Button
                                className="bg-gray-100 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-600 focus:ring-white">
                                <span className="sr-only">Open main menu</span>
                                {open ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                        <path fillRule="evenodd" d="M5.23 15.79a.75.75 0 01-.02-1.06l4.25-4.5a.75.75 0 011.08 0l4.25 4.5a.75.75 0 11-1.08 1.04L10 11.832 6.29 15.77a.75.75 0 01-1.06.02zm0-6a.75.75 0 01-.02-1.06l4.25-4.5a.75.75 0 011.08 0l4.25 4.5a.75.75 0 11-1.08 1.04L10 5.832 6.29 9.77a.75.75 0 01-1.06.02z" clipRule="evenodd" />
                                    </svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                        <path fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10zm0 5.25a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75a.75.75 0 01-.75-.75z" clipRule="evenodd" />
                                    </svg>

                                )}
                            </Disclosure.Button>
                        </div>
                    </div>

                <Disclosure.Panel className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navigation.map((item) => (
                            <Disclosure.Button
                                key={item.name}
                                as="a"
                                href={item.href}
                                className={classNames(
                                    item.current ? 'bg-gray-900 text-white' : 'text-gray-900 hover:bg-gray-700 hover:text-white',
                                    'block px-3 py-2 rounded-md text-base font-medium'
                                )}
                                aria-current={item.current ? 'page' : undefined}
                            >
                                {item.name}
                            </Disclosure.Button>
                        ))}
                    </div>
                    {/*<div className="pt-4 pb-3 border-t border-gray-700">*/}
                    {/*    <div className="flex items-center px-5">*/}
                    {/*        <div className="flex-shrink-0">*/}
                    {/*            <img className="h-10 w-10 rounded-full" src={user.imageUrl} alt=""/>*/}
                    {/*        </div>*/}
                    {/*        <div className="ml-3">*/}
                    {/*            <div className="text-base font-medium leading-none text-white">{user.name}</div>*/}
                    {/*            <div className="text-sm font-medium leading-none text-gray-400">{user.email}</div>*/}
                    {/*        </div>*/}
                    {/*        <button*/}
                    {/*            type="button"*/}
                    {/*            className="ml-auto bg-gray-800 flex-shrink-0 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"*/}
                    {/*        >*/}
                    {/*            <span className="sr-only">View notifications</span>*/}
                    {/*            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">*/}
                    {/*                <path d="M3.375 3C2.339 3 1.5 3.84 1.5 4.875v.75c0 1.036.84 1.875 1.875 1.875h17.25c1.035 0 1.875-.84 1.875-1.875v-.75C22.5 3.839 21.66 3 20.625 3H3.375z" />*/}
                    {/*                <path fillRule="evenodd" d="M3.087 9l.54 9.176A3 3 0 006.62 21h10.757a3 3 0 002.995-2.824L20.913 9H3.087zm6.163 3.75A.75.75 0 0110 12h4a.75.75 0 010 1.5h-4a.75.75 0 01-.75-.75z" clipRule="evenodd" />*/}
                    {/*            </svg>*/}

                    {/*        </button>*/}
                    {/*    </div>*/}
                    {/*    <div className="mt-3 px-2 space-y-1">*/}
                    {/*        {userNavigation.map((item) => (*/}
                    {/*            <Disclosure.Button*/}
                    {/*                key={item.name}*/}
                    {/*                as="a"*/}
                    {/*                href={item.href}*/}
                    {/*                className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"*/}
                    {/*            >*/}

                    {/*                {item.name}*/}
                    {/*            </Disclosure.Button>*/}
                    {/*        ))}*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                </Disclosure.Panel>
            </>
        )}
    </Disclosure>;
};