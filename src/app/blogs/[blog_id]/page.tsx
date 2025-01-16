import BlogClient from "./blogClient";
import {IAhmedBlogPost } from "@/Interfaces/types";
import { Data } from "@/data/Data";

export const generateStaticParams = async () => {
  return Data.map((blog: IAhmedBlogPost) => ({
    blog_id: blog.id,
  }));
};
const BlogPostPage = async ({ params }: { params: Promise<{ blog_id: string }> }) => {
  const resolvedParams = await params; // Await the Promise
  const blog_id = resolvedParams.blog_id;

  return <BlogClient blog_id={blog_id} />;
};

export default BlogPostPage;
