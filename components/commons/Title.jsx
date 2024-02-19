import Image from 'next/image'
import React from 'react'
import Chat from "../../public/assets/chat.svg"

const Title = ({ text, styles }) => {
    return (
        <h1 className="relative mb-[10px] w-full">
            <span className="font-bold text-[40px] font-courgette ">{text}</span>
            <Image src={Chat} alt="chat" width={22} height={22} className={`absolute ${styles} `} />
        </h1>
    )
}

export default Title