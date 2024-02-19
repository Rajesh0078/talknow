"use client"
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import React from 'react'

const SideContent = ({ user }) => {

    const path = usePathname()

    return (
        <div className='w-full sm:max-w-[60%] rounded-md grid grid-cols-1  relative'>
            <div className='bg-gray-200 aspect-auto rounded-xl pt-[76px] px-3'>
                <div >
                    <div className='flex items-center gap-3'>
                        <p className=' font-semibold text-2xl text-rose-600'>{user?.username.charAt(0).toUpperCase() + user?.username.slice(1)}</p>
                        <p className='text-sm -mb-1'>Living In</p>
                    </div>
                    <p className='text-gray-600 text-sm'>{user?.region}</p>
                </div>
                <div className='text-[12px] my-3 pb-2'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. A qui harum soluta nisi. Quae minima expedita quasi, reprehenderit recusandae consectetur sed, tempora non ducimus rem magnam aperiam totam et qui.
                </div>

            </div>
            <div className='h-[120px] w-[120px] bg-slate-300 border-[9px] border-gray-800 rounded-full absolute -top-12 -left-1 z-10 circle flex justify-center items-center'>
                {user?.img_url ?
                    <Image src={user?.img_url} alt='profile' width={1000} height={1000} priority className='rounded-full object-cover object-center  ' /> :
                    <p className='text-[60px]'>{user?.username.charAt(0).toUpperCase()}</p>
                }
            </div>

        </div>
    )
}

export default SideContent