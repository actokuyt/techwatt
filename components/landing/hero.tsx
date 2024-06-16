import "animate.css";
import Link from "next/link";
import Image from "next/image";
import robotMl from "../../public/robot-ml.png";
import ml from "../../public/ml.png";

export default function Hero() {
  return (
    <div className="relative w-screen min-h-screen md:min-h-[40%] content-center py-8 ">
        <video
          autoPlay
          muted
          loop
          className="object-cover absolute top-0 w-screen h-full -z-50"
        >
          <source src="/bg-vid.mp4" type="video/mp4" />
        </video>

      <div className="flex flex-col lg:flex-row lg:w-[70%] lg:m-auto lg:items-center">
        <div className="w-[90%] h-[300px] mx-auto banner-img lg:basis-1/3">
          <div className="animate__animated animate__zoomIn pt-[3em]">
            <div className="relative w-[300px] h-[300px] mx-auto">
              <Image
                className="absolute w-[300px] h-[300px]"
                src={robotMl}
                alt="Header Img"
                priority
              />
              <Image
                className="absolute -top-4 right-24 w-[100px] h-[auto] -z-40"
                src={ml}
                alt={"Header Img"}
              />
            </div>
          </div>
        </div>
        <div className="w-[90%] mx-auto lg:basis-2/3">
          <div className="animate__animated animate__fadeIn">
            <h1 className="font-semibold p-2 text-2xl mb-2 text-white text-center">
              There&apos;s Power In Tech
            </h1>
            <p className="text-white text-xl w-[96%] text-center">
              Hey!, TechWatt here, wouldn&apos;t you like to integrate AI into
              your business SEAMLESSLY?
            </p>
          </div>
          <div className="w-full flex justify-center mt-4">
            <Link
              href={"/get-in-touch"}
              className="bg-blue-300 p-4 text-black rounded-lg text-center"
            >
              Book A Service
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
