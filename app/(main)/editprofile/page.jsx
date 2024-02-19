import Edit_Profile from "@/components/Edit_Profile/Edit_Profile"
import { decryptData } from "@/lib/actions"
import { cookies } from "next/headers"

const page = () => {
    const user = decryptData(cookies().get('user'))
    return (
        <main className="w-full bg-gray-800 min-h-screen ">
            <Edit_Profile user={user} />
        </main>
    )
}

export default page