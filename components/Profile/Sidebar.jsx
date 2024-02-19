"use client"
import Image from 'next/image'
import React from 'react'
import { MdArrowBack, MdChatBubble } from "react-icons/md"
import { BiMessageSquareEdit } from "react-icons/bi";
import { BsPersonAdd } from "react-icons/bs";
import { usePathname, useRouter } from 'next/navigation';
import { client_routes } from '@/lib/helpers';
import Link from 'next/link';

const Sidebar = ({ user }) => {

    const navigate = useRouter()
    const path = usePathname()

    return (
        <div className='w-full flex justify-center items-center flex-col'>
            {
                (path !== client_routes.profile) ? <div className='w-full text-white py-2 mb-14 flex justify-between'>
                    <MdArrowBack className='text-2xl cursor-pointer' onClick={() => navigate.push(client_routes.discover)} />
                    <p>Profile</p>
                </div> :
                    <div className='w-full text-white py-2 mb-14 flex justify-between'>
                        <p>Account</p>
                    </div>
            }
            <div className='w-full sm:max-w-[60%] rounded-md grid grid-cols-1  relative'>
                <div className='bg-gray-200 aspect-auto rounded-xl pt-[76px] px-3'>
                    <div >
                        <div className='flex items-center gap-3'>
                            <p className='text-gray-800 font-semibold text-2xl'>{user?.username.charAt(0).toUpperCase() + user?.username.slice(1)}</p>
                            <p className='text-sm -mb-1'>Living In</p>
                        </div>
                        <p className='text-gray-600 text-sm'>{user?.region}</p>
                    </div>
                    <div className='text-[12px] my-3 '>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A qui harum soluta nisi. Quae minima expedita quasi, reprehenderit recusandae consectetur sed, tempora non ducimus rem magnam aperiam totam et qui.
                    </div>
                    {
                        path !== client_routes.profile ?
                            <>
                                <button className='bg-slate-600 shadow-lg w-full text-white h-[32px] rounded-full text-[13px] flex items-center justify-center gap-3 my-4'>
                                    <MdChatBubble />
                                    Send Message
                                </button>
                                <div className='absolute bg-rose-600 text-white p-2 rounded-full top-4 right-4'>
                                    <BsPersonAdd className=' text-2xl' />
                                </div>
                            </> :
                            <Link href={client_routes.edit_profile} className='absolute bg-rose-600 text-white p-2 rounded-full top-4 right-4'>
                                <BiMessageSquareEdit className=' text-2xl cursor-pointer' />
                            </Link>
                    }
                </div>
                <div className='h-[120px] w-[120px] bg-slate-300 border-[9px] border-gray-800 rounded-full absolute -top-12 -left-1 z-10 circle flex justify-center items-center'>
                    {user?.img_url ?
                        <Image src={user?.img_url} alt='profile' width={1000} height={1000} priority className='rounded-full object-cover object-center  ' /> :
                        <p className='text-[60px]'>{user?.username.charAt(0).toUpperCase()}</p>
                    }
                </div>

            </div>
        </div>
    )
}

export default Sidebar