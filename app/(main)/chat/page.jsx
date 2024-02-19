import Chat from "@/components/chat/Chat"
import { allUsers, decryptData } from "@/lib/actions"
import { cookies } from "next/headers"

const page = async () => {
    const user = decryptData(cookies().get('user'))
    const users = await allUsers()
    return (
        <main className="min-h-screen w-full bg-gray-800">
            <Chat user={user} allusers={users.users} />
        </main>
    )
}

export default page