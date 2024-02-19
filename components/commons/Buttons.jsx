"use client"
import { useState } from "react"

const Buttons = ({ children, disabled, type }) => {

    const [isHover, setIsHover] = useState(false)

    return (
        <button
            type={type}
            className={`bg-secondary text-white rounded-full h-[42px] min-w-[15rem] text-14px font-medium ${isHover && "bg-primary"}`}
            disabled={disabled}
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
        >
            {children}
        </button>
    )
}

export default Buttons