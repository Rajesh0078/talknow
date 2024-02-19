"use server"
import { allUsers, decryptData } from "@/lib/actions"
import { cookies } from "next/headers"
import Main from "@/components/discover/Main"

const page = async () => {

    const user = decryptData(cookies().get('user'))
    const users = await allUsers()

    return (
        <main className="w-full bg-gray-800 min-h-screen">
            <Main allusers={users.users.filter((i) => i.email !== user.email)} />
        </main>
    )
}

export default page