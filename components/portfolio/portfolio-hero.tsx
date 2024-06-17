import { LocationOn } from "@mui/icons-material";
import TechStackMarquee from "./tech-stack-marquee";
import Image from "next/image";
import faceFoto from "../../public/felix-sam.jpg";
import { StackFetchProvider } from "@/contexts/fetch-contexts/stack-fetch-context";

export default function PortfolioHero() {
  return (
    <div className="pt-20 newsreader lg:grid lg:grid-cols-2 lg:pt-40 w-[80%] m-auto lg:h-screen">
      <div className="flex flex-col items-center basis-1/3">
        <div className="overflow-hidden mb-4 w-[150px] h-[150px] border-box rounded-full lg:w-[80%] lg:h-[auto]">
          <Image src={faceFoto} alt="Face Photo" className="lg:w-[460px]" />
        </div>

        <div className="flex flex-col items-center mb-8 ">
          <h1 className="text-2xl font-semibold">Felix Sam Nanor</h1>
          <p className="text-l">AI/ML Engineer</p>
          <span className="flex mb-2 items-center">
            <span className="mr-2">
              <LocationOn />
            </span>{" "}
            Accra, Greater Accra Region Ghana.
          </span>
        </div>
      </div>

      <div className="lg:basis-3/5 lg:pt-28 basis-2/3">
        <div className="mx-4 text-l mb-12">
          <p className="text-center">
            Transforming complex concepts into easy-to-understand lessons, I'm
            Felix Sam Nanor, the host of Tech Watt, a YouTube channel where I
            teach Programming, AI, ML, Computer Vision, Electronics and Robotics
            to thousands of eager learners worldwide. Whether you're an aspiring
            tech enthusiast or a seasoned professional, join me on a journey to
            master cutting-edge technologies and unleash your full potential.
          </p>
        </div>

        <div className="flex flex-col items-center my-4">
          <h1 className="text-xl  mb-2 font-semibold">Tech Stack</h1>
          <StackFetchProvider>
            <TechStackMarquee />
          </StackFetchProvider>
        </div>
      </div>
    </div>
  );
}
