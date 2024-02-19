import React from 'react'
import Sidebar from './Sidebar'
import Content from './Content'

const Profile = ({ user }) => {
    return (
        <div className=' w-full h-full p-3 flex flex-col gap-3 z-10 bg-gray-800 '>
            <Sidebar user={user} />
            <Content user={user} />
        </div>
    )
}

export default Profile