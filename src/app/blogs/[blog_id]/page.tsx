import BlogClient from "./blogClient";
import {IAhmedBlogPost } from "@/Interfaces/types";
import { Data } from "@/data/Data";

export const generateStaticParams = async () => {
  return Data.map((blog: IAhmedBlogPost) => ({
    blog_id: blog.id,
  }));
};
const BlogPostPage = ({ params }: { params: { blog_id: string } }) => {
  return <BlogClient blog_id={params.blog_id} />;
};

export default BlogPostPage;
