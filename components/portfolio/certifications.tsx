import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { certifications } from "@/utils/data";

export default async function Certifications() {
  const allCerts = await certifications()
  if (!allCerts) {
    return<></>
  }

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
        {allCerts.map((cert, index) => {
            return (
                <div key={index} className="mb-8" >
                    <img src={cert.imgsrc} alt={cert.title} className="mb-2" />
                    <h1 className="text-xl font-semibold" >{cert.title}</h1>
                </div>
            )
        })}
      </Carousel>
    </div>
  );
}
