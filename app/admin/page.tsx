import Link from "next/link";
import { KeyboardArrowRight } from "@mui/icons-material";


export default function page() {
  return (
      <div className="pt-20">
        <h1 className="text-2xl text-center font-semibold mb-8">
          Welcome To The Admin Dashboard
        </h1>

        <div className="h-[60vh] m-4 md:w-[70%] md:mx-auto lg:w-[50%]">
          <ul className="grid grid-cols-1 gap-4">
            <Link href={"/admin/manage-blog"}>
              <li className="bg-gray-200 p-4 flex justify-between cursor-pointer hover:bg-gray-400 hover:text-white">
                Manage Blog Posts <KeyboardArrowRight />{" "}
              </li>
            </Link>
            <Link href={"/admin/manage-projects"}>
              {" "}
              <li className="bg-gray-200 p-4 flex justify-between cursor-pointer hover:bg-gray-400 hover:text-white">
                Manage Projects <KeyboardArrowRight />{" "}
              </li>
            </Link>
            <Link href={"/admin/manage-services"}>
              {" "}
              <li className="bg-gray-200 p-4 flex justify-between cursor-pointer hover:bg-gray-400 hover:text-white">
                Manage Services <KeyboardArrowRight />{" "}
              </li>
            </Link>
            <Link href={"/admin/manage-tech-stack"}>
              <li className="bg-gray-200 p-4 flex justify-between cursor-pointer hover:bg-gray-400 hover:text-white">
                Manage Tech Stack <KeyboardArrowRight />{" "}
              </li>
            </Link>
            <Link href={"/admin/manage-certifications"}>
              {" "}
              <li className="bg-gray-200 p-4 flex justify-between cursor-pointer hover:bg-gray-400 hover:text-white">
                Manage Certifications <KeyboardArrowRight />{" "}
              </li>
            </Link>
          </ul>
        </div>
      </div>
  );
}
