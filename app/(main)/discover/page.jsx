"use server"
import { allUsers, decryptData } from "@/lib/actions"
import { cookies } from "next/headers"
import Main from "@/components/discover/Main"

async function getCookieData() {
    const cookieData = cookies().get("user")
    return new Promise((resolve) =>
        setTimeout(() => {
            resolve(cookieData)
        }, 1000)
    )
}

const page = async () => {
    const cookieData = await getCookieData()
    const user = decryptData(cookieData)
    const users = await allUsers()

    return (
        <main className="w-full bg-gray-800 min-h-screen">
            <Main allusers={users.users.filter((i) => i.email !== user.email)} />
        </main>
    )
}

export default page