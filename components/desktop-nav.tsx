import Link from "next/link";
import { Dancing_Script } from "next/font/google";

const ds = Dancing_Script({ subsets: ["latin"] });

export default function DesktopNav() {
  return (
    <div className="hidden md:flex fixed top-0 left-0 right-0 bg-gray-700 w-full z-50 drop-shadow-lg items-center z-100">
      <Link
        href={"/"}
        className={`text-2xl text-white font-semibold lg:basis-2/4 basis-1/4 dancing-script pl-8 ${ds.className}`}
      >
        <h1>TechWatt.ai</h1>
      </Link>
      <div className="flex text-white items-center justify-center lg:basis-1/4 basis-2/4">
        <Link href={"/projects"} className="ml-6 ">
          Projects
        </Link>
        <Link href={"/blog"} className="ml-6">
          Blog
        </Link>
        <Link href={"/portfolio"} className="ml-6 ">
          Meet Felix
        </Link>
      </div>
      <div className="basis-1/4 flex justify-center my-2">
        <Link
          href={"/get-in-touch"}
          className="bg-blue-300 p-4 text-black rounded-lg text-center"
        >
          Book A Service
        </Link>
      </div>
    </div>
  );
}
