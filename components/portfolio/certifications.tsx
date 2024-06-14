"use client"

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { useCertsFetchContext } from "@/contexts/fetch-contexts/certs-fetch-context";
import Image from "next/image";

export default function Certifications() {
  const {certs} = useCertsFetchContext()

  return (
    <div className="md:w-[50%] md:mx-auto" >
      <Carousel
        showThumbs={false}
        autoFocus={true}
        autoPlay={true}
        infiniteLoop={true}
        interval={10000}
        showArrows={false}
        showStatus={false}
        stopOnHover={true}
      >
        {certs.map((cert, index) => {
            return (
                <div key={index} className="mb-8" >
                    <Image src={cert.imgsrc} alt={cert.title} className="mb-2" />
                    <h1 className="text-xl font-semibold" >{cert.title}</h1>
                </div>
            )
        })}
      </Carousel>
    </div>
  );
}
