"use client"

import { useStackFetchContext } from "@/contexts/fetch-contexts/stack-fetch-context";
import Marquee from "react-fast-marquee";


export default function TechStackMarquee() {
const {stack} = useStackFetchContext()

  return (
    <div className="w-screen md:w-full">
    <Marquee gradient={true} >
      {stack.map((tech, index) => {
        return (
          <img
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