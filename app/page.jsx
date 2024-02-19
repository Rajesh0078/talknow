import Image from "next/image";
import Bg from "../public/assets/Preview.jpg"
import Buttons from "@/components/commons/Buttons";
import Link from "next/link";
import Title from "@/components/commons/Title";


export default function Home() {
  return (
    <>
      <main className="h-screen  relative w-full">
        <Image src={Bg} alt="chat" width={1000} height={1000} className="h-full w-full absolute object-cover object-left " />
        <div className="backdrop-blur h-full w-full flex flex-col justify-center items-center">
          <Title text={"TalkNow"} styles={"-right-6 top-0"} />
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
