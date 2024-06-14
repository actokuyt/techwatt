import Marquee from "react-fast-marquee";
import Image from "next/image";
import { techStack } from "@/utils/data";

export default async function TechStackMarquee() {
  const stack = await techStack()
  if (!stack) {
    return<></>
  }

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