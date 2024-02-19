import Profile from "@/components/Profile/Profile"
import { decryptData } from "@/lib/actions"
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
    return (
        <main className="w-full bg-gray-800 min-h-screen">
            <Profile user={user} />
        </main>
    )
}

export default page