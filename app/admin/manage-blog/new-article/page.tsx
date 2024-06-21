
import Link from "next/link";
import { ManageBlogForm } from "@/components/form";

export default function NewBlog() {
  return (
    <div className="pt-20 flex flex-col items-center ">
      <Link href={"/admin/manage-blog"} className="mb-8">
        Back to Manage Blog
      </Link>

      <div className="w-full p-4" >
        <ManageBlogForm />
      </div>
    </div>
  );
}
