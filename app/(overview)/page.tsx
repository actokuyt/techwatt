import Link from "next/link";
import Hero from "../../components/landing/hero";
import HotestTopics from "@/components/landing/hotest-topics";
import Services from "@/components/landing/services";
import { BlogArticlesFetchProvider } from "@/contexts/fetch-contexts/blog-articles-fetch-context";
import { ServicesFetchProvider } from "@/contexts/fetch-contexts/services-fetch-context";

export default function Home() {
  return (
    <div className="pt-[5em]">
      <div>
        <Hero />
      </div>

      <div className="p-2 mt-8 ">
        <h1 className="text-center text-2xl font-semibold mb-4">
          Hottest Topics
        </h1>
        <BlogArticlesFetchProvider>
          <HotestTopics />
        </BlogArticlesFetchProvider>
      </div>

      <div className="p-2 mt-8 ">
        <h1 className="text-center text-2xl font-semibold mb-4">Services</h1>
        <ServicesFetchProvider>
          <Services />
        </ServicesFetchProvider>
      </div>

      <div className="bg-gray-200 text-center p-4 rounded-lg w-[95%] m-auto mt-8 drop-shadow-lg lg:w-[50%]">
        <h1 className="text-2xl font-semibold mb-4">Vision</h1>
        <p>
          Our vision is to empower individuals and businesses with
          transformative AI solutions. Through cutting-edge technology and
          data-driven approaches, we strive to create futuristic solutions. Our
          aim is to be at the forefront of AI innovation, enabling our clients
          to harness the full potential of artificial intelligence in their
          digital transformation journey.
        </p>
      </div>

      <div className="w-[95%] mt-8 p-4 text-center m-auto lg:w-[35%]">
        <h1 className="text-2xl font-semibold mb-2">Book Our Services</h1>
        <p>
          At TechWatt.ai we believe we can&apos;t build without you. Your
          concerns are our priority.
        </p>
        <div className="w-full flex justify-center my-2">
          <Link
            href={"/get-in-touch"}
            className="bg-blue-300 p-4 text-black rounded-lg text-center"
          >
            Book A Service
          </Link>
        </div>
      </div>
    </div>
  );
}
