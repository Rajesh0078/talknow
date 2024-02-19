"use client"

import { usePathname } from 'next/navigation'
import { client_routes } from '@/lib/helpers'
import { BsChatHeart, BsSearchHeart, BsPerson, BsBell } from "react-icons/bs"
import { SlUser } from "react-icons/sl";
import Link from 'next/link'
import { parseCookies } from "nookies"
import CircularNavigation from './CircularNavigation';

const Footer = () => {

    const path = usePathname()

    return (
        <>
            {
                (!path.includes('/profile/') && path !== client_routes.edit_profile && path !== client_routes.chat) &&
                <footer className='fixed bottom-2 left-3 w-[calc(100%-24px)] bg-slate-300 shadow  z-10 flex justify-around items-center h-[52px] rounded-full'>
                    <Link href={client_routes.discover} className={` text-black flex flex-col items-center `}>
                        <div className='p-2' >
                            <BsSearchHeart className={`h-6 w-6 ${path === client_routes.discover && "text-rose-600  "} `} />
                        </div>
                    </Link>
                    <Link href={client_routes.chat} className={` text-black flex flex-col items-center `}>
                        <div className='p-2' >
                            <BsChatHeart className={`h-6 w-6 ${path === client_routes.chat && "text-rose-600"} `} />
                        </div>
                    </Link>
                    <Link href={client_routes.notification} className={` text-black flex flex-col items-center `}>
                        <div className='p-2' >
                            <BsBell className={`h-6 w-6 ${path === client_routes.notification && "text-rose-600"} `} />
                        </div>
                    </Link>
                    <Link href={client_routes.profile} className={` text-[#101010] flex flex-col items-center `}>
                        <div className='p-2' >
                            <SlUser className={`h-6 w-6 ${path === client_routes.profile && "text-rose-600"} `} />
                        </div>
                    </Link>
                </footer>
            }
            {
                path === client_routes.chat &&
                <CircularNavigation />
            }
        </>
    )
}

export default Footer