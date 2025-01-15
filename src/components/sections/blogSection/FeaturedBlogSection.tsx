import WheitageBlogging from "@/components/structureschema/WheitageBlogging";
import { IAhmedBlogPost } from "@/Interfaces/types";

import React from "react";
import BlogCard from "@/components/sections/blogSection/BlogCard";
import { Data } from "@/data/Data";

const FeaturedBlogSection = () => {
  return (
    <WheitageBlogging>
      <div id="featured">
        <div className="my-0 sm:my-12">
          <h1 className="text-3xl sm:text-6xl font-bold text-center my-20 ">
            Featured Dynamic Blogs
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Data.slice(0, 6).map((blog: IAhmedBlogPost) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>
        </div>
      </div>
    </WheitageBlogging> 
  );
};

export default FeaturedBlogSection;
