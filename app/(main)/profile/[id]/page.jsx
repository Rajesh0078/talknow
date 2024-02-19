import Profile from '@/components/Profile/Profile'
import { searchUser } from '@/lib/actions'
import React from 'react'

const page = async ({ params }) => {

    const user = await searchUser(params.id)

    return (
        <main className="w-full bg-gray-800 min-h-screen">
            <Profile user={user.user} />
        </main>
    )
}

export default page