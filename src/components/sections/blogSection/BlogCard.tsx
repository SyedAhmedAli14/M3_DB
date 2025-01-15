import User from "@/components/structureschema/User";
import { IAhmedBlogPost} from "@/Interfaces/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import userImg from "@/assets/images/sectionImages/user.png";

const BlogCard = ({ blog }: { blog: IAhmedBlogPost }) => {
  return (
    <div className="group border border-slate-300 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 p-4">
      <Link href={`/blogs/${blog.id}`} className="space-y-2">
        <div className="overflow-hidden rounded-lg">
          <Image
            src={blog.imageURL}
            alt="image"
            className="w-full h-full object-cover transform group-hover:scale-110 duration-500"
          />
        </div>
        <div className="py-2 space-y-3">
          <span className="px-4 py-2 bg-green-100 text-blue-600 rounded-md text-sm sm:text-lg font-semibold">
            {"Food and Travel Esports"} {/* Display category dynamically */}
          </span>
          <h1 className="text-xl font-bold transition-colors duration-300 group-hover:text-blue-500">
            {blog.title}
          </h1>
        </div>
        <User date={blog.date} img={userImg} name={"Syed Ahmed Ali Shah"} />
      </Link>
    </div>
  );
};

export default BlogCard;
