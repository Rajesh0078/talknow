import React from 'react'
import { BsArrowLeft, BsThreeDotsVertical } from 'react-icons/bs'

const MessageComponent = ({ to, setTo, currentUser }) => {
    return (
        <div className='w-full'>
            <div className='flex justify-between items-center bg-gray-900 p-3 fixed top-0 left-0 right-0'>
                <div className='flex items-center gap-3'>
                    <BsArrowLeft className='text-2xl text-white cursor-pointer' onClick={() => setTo("")} />
                    <div className='flex items-center gap-2'>
                        <div className='h-11 w-11 bg-slate-300 rounded-full flex items-center justify-center text-black text-xl'>{to.username.charAt(0).toUpperCase()}</div>
                        <div>
                            <p className='text-[15px] font-medium text-white'>{to.username.charAt(0).toUpperCase() + to.username.slice(1)}</p>
                            <p className='text-[13px] text-slate-400'>Active now</p>
                        </div>
                    </div>
                </div>
                <BsThreeDotsVertical className='text-xl text-white cursor-pointer' />
            </div>
        </div>
    )
}

export default MessageComponent