import Chat from "@/components/chat/Chat"
import { allUsers, decryptData } from "@/lib/actions"
import { cookies } from "next/headers"

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
        <main className="min-h-screen w-full bg-gray-800">
            <Chat user={user} allusers={users.users} />
        </main>
    )
}

export default page