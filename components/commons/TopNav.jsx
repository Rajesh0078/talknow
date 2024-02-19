import React from 'react'

const TopNav = ({ title }) => {
    return (
        <div className='flex justify-between w-full text-white'>
            <p className='text-xl font-medium font-courgette'>{title}</p>
            <div>
                Icons
            </div>
        </div>
    )
}

export default TopNav