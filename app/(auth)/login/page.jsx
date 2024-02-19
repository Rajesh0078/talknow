"use client"
import Image from "next/image"
import Bg from "../../../public/assets/Preview.jpg"
import { useForm } from "react-hook-form"
import Title from "@/components/commons/Title"
import Link from "next/link"
import Buttons from "@/components/commons/Buttons"
import { loginAction } from "@/lib/actions"
import { setCookie } from "nookies"
import { useRouter } from "next/navigation"

const page = () => {

    const { register, handleSubmit } = useForm()

    const navigate = useRouter()

    const loginHandler = async (data) => {
        const res = await loginAction(data)
        if (res.msg) {
            console.log(res.msg)
        } else {
            setCookie(null, "user", res, { maxAge: 3600, path: "/" })
            navigate.push('/')
        }
    }

    return (
        <main className="h-screen w-full bg-gray-900 relative">
            <Image src={Bg} alt="chat" width={1000} height={1000} className="h-full w-full absolute object-cover object-right" />
            <div className="backdrop-blur w-full  h-full bg-[#302b2b] bg-opacity-10 flex flex-col justify-center items-center px-3">
                <div className="text-center mb-[70px]">
                    <Title text={"Login"} styles={"right-[70px] top-0"} />
                    <p className="">Your privacy is most important to us..!</p>
                </div>
                <form className="w-full  sm:max-w-[60%] md:max-w-[40%] text-xl flex flex-col items-center" onSubmit={handleSubmit(loginHandler)}>
                    <div className="w-full">
                        <input type="email" {...register("email", { required: true })} className="outline-none bg-transparent border-secondary border h-[42px] rounded-md w-full px-4 placeholder:text-gray-700" placeholder="Email" />
                    </div>
                    <div className="mt-4 w-full">
                        <input type="password" {...register("password", { required: true })} className="outline-none bg-transparent border-secondary border h-[42px] rounded-md w-full px-4 placeholder:text-gray-700" placeholder="Password" />
                    </div>
                    <div className="flex text-sm justify-between my-3 w-full mb-[80px]">
                        <div className="flex items-center gap-1">
                            <input type="checkbox" {...register("remember")} id="remember" className="" />
                            <label htmlFor="remember" className="text-sm">Remember me</label>
                        </div>
                        <Link href={'#'}>Forgotten Password</Link>
                    </div>
                    <Buttons type={"submit"}>Login</Buttons>
                </form>
            </div>
        </main>
    )
}

export default page