import Image from "next/image";
import Hero from "./Hero/page";
import "./globals.css";
export default function Home() {
  return (
    <div className="h-screen w-full bg-cover bg-center absolute-inset-0 z-0 "> 
    <Image src = '/images/BG.svg'
    alt = "background"
    layout = "fill"
    objectFit = "cover"
    ></Image>
    <div className="relative z-10">
    <div className="text-center "> <Hero/>
    </div>
   
    </div>
    </div>
   

  );
}
