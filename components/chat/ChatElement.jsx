"use client"

const ChatElement = ({ user, allusers, to, setTo }) => {

    return (
        <>
            <div className={`pt-[142px] flex flex-col p-3 transition-transform duration-300 origin-left ${to ? "scale-x-0" : "scale-x-100"}`}>
                {
                    allusers && allusers.map((i, inx) => (
                        <div key={inx} onClick={() => { setTo(i); }} className='flex justify-between items-center text-slate-300 bg-opacity-45 h-16 rounded cursor-pointer '>
                            <div className='flex items-center gap-2'>
                                <div className='h-12 w-12 bg-slate-300 rounded-full flex items-center justify-center text-black text-xl'>{i.username.charAt(0).toUpperCase()}</div>
                                <div>
                                    <p className='text-[15px] font-medium text-white'>{i.username.charAt(0).toUpperCase() + i.username.slice(1)}</p>
                                    <p className='text-[13px] text-slate-400'>Latest msg</p>
                                </div>
                            </div>
                            <div className='flex flex-col items-end gap-1 text-slate-400'>
                                <p className='bg-rose-600 h-4 w-4 rounded-full flex items-center justify-center text-white text-[12px]'>2</p>
                                <p className='text-[13px]'>just now</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default ChatElement