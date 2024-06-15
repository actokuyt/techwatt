"use client";

import { ServicesCards } from "../mui-card";
import { useServicesFetchContext } from "@/contexts/fetch-contexts/services-fetch-context";

export default function Services() {
  const { services } = useServicesFetchContext();

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:w-[90%] lg:mx-auto">
      {services.map((service) => {
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
