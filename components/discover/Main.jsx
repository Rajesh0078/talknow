"use client"
import React, { useEffect, useState } from 'react'
import TopNav from '../commons/TopNav'
import SearchBox from '../commons/SearchBox'
import { useForm } from 'react-hook-form'
import Image from 'next/image'
import person from "../../public/assets/pngegg.png"
import Link from 'next/link'

const Main = ({ allusers }) => {

    const { register, setValue, watch } = useForm()
    const [users, setUsers] = useState(allusers)

    useEffect(() => {
        const arr = allusers.filter((i) => i.username.toUpperCase().includes(watch("search").toUpperCase()))
        setUsers(arr)
    }, [watch("search")])

    return (
        <>
            <div className=' w-full fixed top-0 left-0 right-0 p-3 flex flex-col gap-3 z-10 bg-gray-800 '>
                <TopNav title={"Discover"} />
                <SearchBox register={register} placeholder={"Search profiles"} setValue={setValue} />
            </div>
            <div className='w-full pt-[106px] px-3 grid grid-cols-2 gap-3 pb-[70px]'>
                {
                    users && users.map((i, index) => (
                        <Link href={'/profile/[id]'} as={`/profile/${i.id}`} className='aspect-square rounded-md bg-slate-200 bg-opacity-30 relative' key={index}>
                            <Image src={person} width={1000} height={1000} alt='person' className='h-full w-full opacity-65 ' priority />
                            {i.online && <div className='h-3 w-3 rounded-full border-[2px] border-white bg-green-300 absolute top-2 right-2'></div>}
                            <div className='w-full h-6 bottom-0 rounded-b-md bg-opacity-55 absolute text-white bg-slate-300 text-center font-medium'>
                                {i.username}
                            </div>
                        </Link>
                    ))
                }
            </div>
        </>
    )
}

export default Main