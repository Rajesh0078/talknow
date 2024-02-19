"use client"
import React, { useState } from 'react'
import { MdEdit } from 'react-icons/md'
import SearchBox from '../commons/SearchBox'
import { useForm } from 'react-hook-form'
import ChatElement from './ChatElement'
import MessageComponent from './MessageComponent'

const Chat = ({ user, allusers }) => {

    const { register, setValue } = useForm()
    const [active, isActive] = useState("chat")
    const [to, setTo] = useState('')

    return (
        <>
            {
                !to && <div className='w-full pt-3'>
                    <div className='fixed top-0 pt-3 left-0 right-0 bg-gray-800 z-10'>
                        <div className='text-white flex justify-between text-xl mb-3 px-3'>
                            <p className='font-medium font-courgette'>Chat</p>
                            <MdEdit />
                        </div>
                        <div className='px-3'>
                            <SearchBox register={register} placeholder={"Search chats"} setValue={setValue} />
                        </div>
                        <div className='w-full flex gap-5 justify-between pb-2 text-white mt-4 border-b border-slate-300 px-3 relative transition-all duration-200 '>
                            <p className={`${active === "chat" ? "text-rose-600" : "text-white"} cursor-pointer`} onClick={() => isActive("chat")}>Chats</p>
                            <p className={`${active === "group" ? "text-rose-600" : "text-white"} cursor-pointer`} onClick={() => isActive("group")}>Groups</p>
                            <p className={`${active === "status" ? "text-rose-600" : "text-white"} cursor-pointer`} onClick={() => isActive("status")}>Status</p>
                            <div className={`h-4 w-4 absolute rounded-br-md rotate-45  -bottom-[8.8px] bg-gray-800 flex justify-center items-center  border-b border-slate-300 border-r ${active === "chat" ? "left-[7.5%]" : active === "group" ? "left-[47%]" : "right-[7.5%]"}`}>
                                <p className='h-2 w-2 rounded-full bg-rose-600'></p>
                            </div>
                        </div>
                    </div>
                    {active === "chat" && <ChatElement to={to} setTo={setTo} user={user} allusers={allusers.filter((i) => user.email !== i.email)} />}
                </div>
            }
            {
                to && <MessageComponent to={to} setTo={setTo} currentUser={user} />
            }
        </>
    )
}

export default Chat