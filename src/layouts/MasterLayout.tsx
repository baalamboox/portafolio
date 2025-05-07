import { ReactNode, useState } from "react"

import "/src/css/master-layout.css"

interface Props {
    children: ReactNode
}

const currentPathURL = window.location.pathname

const activeNav = "bg-bright-brick h-[36px] rounded-[10px] text-graphite w-[36px]"
const inactiveNav = "bg-black h-[36px] rounded-[10px] text-white w-[36px] hover:bg-craft"

const activeBulletNav = ""
const inactiveBulletNav = ""

console.log(localStorage)

const MasterLayout = (props:Props) => {
    return <main className="h-screen bg-white dark:bg-black p-[24px] relative">

        <div className="absolute flex flex-row flex-nowrap gap-1 items-center justify-center top-[24px] right-[24px] w-fit">
            <input className="absolute top-0 left-0 w-0 h-0 opacity-0" type="checkbox" />
            <svg className="text-concrete" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 18a6 6 0 1 1 0-12a6 6 0 0 1 0 12M11 1h2v3h-2zm0 19h2v3h-2zM3.515 4.929l1.414-1.414L7.05 5.636L5.636 7.05zM16.95 18.364l1.414-1.414l2.121 2.121l-1.414 1.414zm2.121-14.85l1.414 1.415l-2.121 2.121l-1.414-1.414zM5.636 16.95l1.414 1.414l-2.121 2.121l-1.414-1.414zM23 11v2h-3v-2zM4 11v2H1v-2z"/></svg>
            <label className="bg-graphite cursor-pointer h-[24px] rounded-full w-[48px]" htmlFor="">
                <span className="block bg-bright-brick h-[24px] rounded-full w-[24px]"></span>
            </label>
            <svg className="text-graphite" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M11.38 2.019a7.5 7.5 0 1 0 10.6 10.6C21.662 17.854 17.316 22 12.001 22C6.477 22 2 17.523 2 12c0-5.315 4.146-9.661 9.38-9.981"/></svg>
        </div>

        <nav className="absolute bg-graphite h-fit left-[24px] rounded-[10px] top-1/2 -translate-y-1/2 w-fit">
            <ul className="flex flex-col gap-4 p-2 py-6">
                <li className={ currentPathURL === "/" ? activeNav : inactiveNav }>
                    <a className="block content-center h-full w-full" href="/">
                        <svg className="block mx-auto" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10M7 12a5 5 0 0 0 10 0h-2a3 3 0 1 1-6 0z"/></svg>
                    </a>
                </li>
                <li className={ currentPathURL === "/experiencia" ? activeNav : inactiveNav }>
                    <a className="block content-center h-full w-full" href="/experiencia">
                        <svg className="block mx-auto" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 7a8 8 0 1 1 0 16a8 8 0 0 1 0-16m0 3.5l-1.322 2.68l-2.958.43l2.14 2.085l-.505 2.946L12 17.25l2.645 1.39l-.505-2.945l2.14-2.086l-2.958-.43zm1-8.501L18 2v3l-1.363 1.138A9.9 9.9 0 0 0 13 5.05zm-2 0v3.05a9.9 9.9 0 0 0-3.636 1.088L6 5V2z"/></svg>
                    </a>
                </li>
                <li className={ currentPathURL === "/habilidades" ? activeNav : inactiveNav }>
                    <a className="block content-center h-full w-full" href="/habilidades">
                        <svg className="block mx-auto" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M7.941 18c-.297-1.273-1.637-2.314-2.187-3a8 8 0 1 1 12.49.002c-.55.685-1.888 1.726-2.185 2.998zM16 20v1a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-1zm-3-9.995V6l-4.5 6.005H11v4l4.5-6z"/></svg>
                    </a>
                </li>
                <li className={ currentPathURL === "/proyectos" ? activeNav : inactiveNav }>
                    <a className="block content-center h-full w-full" href="/proyectos">
                        <svg className="block mx-auto" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M16.33 13.497a6.99 6.99 0 0 0 2.67-5.5h2a8.99 8.99 0 0 1-3.661 7.246l2.527 4.378a2 2 0 0 1-.732 2.732l-3.527-6.108a9 9 0 0 1-3.607.752a9 9 0 0 1-3.607-.752l-3.527 6.108a2 2 0 0 1-.732-2.732l5.064-8.77A4.002 4.002 0 0 1 11 4.123V1.997h2v2.126a4.002 4.002 0 0 1 1.803 6.728zm-1.73 1.001l-1.528-2.646a4 4 0 0 1-2.142 0l-1.528 2.646a7 7 0 0 0 2.599.499a7 7 0 0 0 2.599-.499M12 8.997a1 1 0 1 0 0-2a1 1 0 0 0 0 2"/></svg>
                    </a>
                </li>
            </ul>
        </nav>

        <div className="absolute h-fit right-[24px] top-1/2 -translate-1/2 w-fit">
            <div className="absolute bg-concrete h-full left-1/2 top-0 w-[1px] -translate-x-1/2 z-0"></div>
            <ul className="relative flex flex-col gap-6 items-center">
                <li className="bg-bright-brick content-center h-[24px] rounded-full w-[24px]">
                    <span className="block bg-graphite h-[12px] mx-auto rounded-full w-[12px]"></span>
                </li>
                <li className="bg-graphite content-center h-[24px] rounded-full w-[24px] dark:bg-white">
                    <span className="block bg-white h-[12px] mx-auto rounded-full w-[12px] dark:bg-graphite"></span>
                </li>
                <li className="bg-graphite content-center h-[24px] rounded-full w-[24px] dark:bg-white">
                    <span className="block bg-white h-[12px] mx-auto rounded-full w-[12px] dark:bg-graphite"></span>
                </li>
                <li className="bg-graphite content-center h-[24px] rounded-full w-[24px] dark:bg-white">
                    <span className="block bg-white h-[12px] mx-auto rounded-full w-[12px] dark:bg-graphite"></span>
                </li>
            </ul>
        </div>

        { props.children }
    </main>
}

export default MasterLayout
