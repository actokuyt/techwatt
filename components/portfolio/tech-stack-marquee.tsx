"use client"

import Marquee from "react-fast-marquee";
import { useStackFetchContext } from "@/contexts/fetch-contexts/stack-fetch-context";
import Image from "next/image";

export default function TechStackMarquee() {
  const {stack} = useStackFetchContext()

  return (
    <div className="w-screen md:w-full">
    <Marquee gradient={true} >
      {stack.map((tech, index) => {
        return (
          <Image
            key={index}
            src={tech.imgsrc}
            alt={tech.title}
            className="mr-[10px] w-auto h-[55px]"
          />
        );
      })}
    </Marquee>
  </div>
  )
}