import Image from "next/image";
import Bg from "../public/assets/Preview.jpg"
import Buttons from "@/components/commons/Buttons";
import Link from "next/link";
import Chat from "/public/assets/chat.svg"


export default function Home() {
  return (
    <>
      <main className="h-screen relative w-full overflow-x-hidden">
        <Image src={Bg} alt="chat" width={1000} height={1000} className="h-full w-full absolute object-cover object-left " />
        <div className="backdrop-blur h-full w-full flex flex-col justify-center items-center">
          {/* <Title text={"TalkNow"} styles={"-right-6 top-0"} /> */}
          <h1 className="relative mb-[10px] ">
            <span className="font-bold text-[40px] font-courgette ">TalkNow</span>
            <Image src={Chat} alt="chat" width={22} height={22} className='absolute top-0 -right-6' />
          </h1>

          <div className="text-center mb-[180px]">
            <p className="text-secondary text-2xl font-semibold p-1">Welcome to talkNow!</p>
            <p className="">Stay Connected Anytime, Anywhere!</p>
          </div>
          <Link href={'/login'}><Buttons>Continue</Buttons></Link>
        </div>
      </main>
    </>
  );
}
