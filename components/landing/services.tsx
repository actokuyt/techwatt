import { services } from "@/utils/data";
import { ServicesCards } from "../mui-card";

export default async function Services() {
  let allServices = await services();

  if (!allServices) {
    return <></>;
  }

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:w-[90%] lg:mx-auto">
      {allServices.map((service) => {
        return (
          <ServicesCards
            key={service._id}
            img={service.imgsrc}
            title={service.title}
            description={service.description}
          />
        );
      })}
    </div>
  );
}
