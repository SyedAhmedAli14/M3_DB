"use client";
import WheitageBlogging from "@/components/structureschema/WheitageBlogging";
import { IAhmedBlogComment, IAhmedBlogPost } from "@/Interfaces/types";
import { useState } from "react";
import Image from "next/image";
import { Data } from "@/data/Data";

const BlogClient = ({ blog_id }: { blog_id: string }) => {
  const [blogs, setBlogs] = useState<IAhmedBlogPost[]>(Data);

  const formattedDate = (() => {
    const date = new Date();
    const months = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
    const day = date.getDate().toString().padStart(2, "0"); // Ensures two-digit format
    const month = months[date.getMonth()]; // Get the month name
    const year = date.getFullYear(); // Get the full year
  
    return `${month} ${day}, ${year}`;
  })();

  const [comment, setComment] = useState({
    id: crypto.randomUUID(),
    date: formattedDate,
    content: "",
    author: "",
  });

  const blog = blogs.find((blog: IAhmedBlogPost) => blog.id === blog_id);

  const updatedBlogs = blogs.map((blog:IAhmedBlogPost) => {
    if (blog.id === blog_id) {
      return {
        ...blog,
        comments: [
          ...(blog.comments || []),
          {
            id: crypto.randomUUID(),
            author: comment.author,
            content: comment.content,
            date: comment.date,
          },
        ],
      };
    } else {
      return blog;
    }
  });

  const handleCommentSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!comment.author || !comment.content) {
      return;
    }
    setBlogs(updatedBlogs);
    setComment({
      id: crypto.randomUUID(),
      date: new Date().toLocaleDateString(),
      content: "",
      author: "",
    });
  };

  return (
    <WheitageBlogging>
      <div className="bg-gradient-to-b from-gray-50 to-gray-200 text-black py-16">
        {/* Blog Content Section */}
        <div className="my-8 w-[90%] mx-auto bg-white shadow-lg rounded-lg p-6">
          <div>
            <Image
              src={blog ? blog.detailImageURL : ""}
              alt="image"
              className="rounded-lg w-full"
            />
          </div>
          <div className="mt-4 space-y-4">
            <h1 className="text-3xl sm:text-5xl font-bold mt-8 text-gray-800">
              {blog?.title}
            </h1>
            <h1 className="text-xl text-gray-600">{blog?.date}</h1>
            <p className="text-lg leading-relaxed text-gray-700">
              {blog?.content}
            </p>
          </div>
        </div>

        {/* Comment Form */}
        <div className="p-6 w-[90%] mx-auto bg-white shadow-lg rounded-lg mt-8">
          <form onSubmit={handleCommentSubmit}>
            <div className="flex flex-col gap-4">
              <label htmlFor="comment" className="text-xl font-semibold">
                Share your feedback
              </label>
              <input
                type="text"
                placeholder="Your Name"
                id="author"
                className="py-3 px-4 rounded-lg bg-gray-100 text-gray-800 shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={comment.author}
                onChange={(event) =>
                  setComment({ ...comment, author: event.target.value })
                }
              />
              <textarea
                placeholder="Your Comment"
                id="comment"
                rows={4}
                className="py-3 px-4 rounded-lg bg-gray-100 text-gray-800 shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={comment.content}
                onChange={(event) =>
                  setComment({ ...comment, content: event.target.value })
                }
              />
            </div>
            <button
              type="submit"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-bold shadow mt-4"
            >
              Post Comment
            </button>
          </form>
        </div>

        {/* Comments Section */}
        <div className="p-6 w-[90%] mx-auto bg-white shadow-lg rounded-lg mt-8">
          <h2 className="text-2xl font-bold mb-4">Comments</h2>
          {blog?.comments?.length ? (
            blog.comments.map((comment: IAhmedBlogComment) => (
              <div
                key={comment.id}
                className="mb-4 p-4 rounded-lg bg-gray-100 shadow"
              >
                <p className="text-sm text-gray-500">{comment.date}</p>
                <p className="font-semibold text-gray-800">{comment.author}</p>
                <p className="mt-1 text-gray-700">{comment.content}</p>
              </div>
            ))
          ) : (
            <p className="text-gray-600">No comments yet. Be the first to comment in Ahmed Blog</p>
          )}
        </div>
      </div>
    </WheitageBlogging>
  );
};

export default BlogClient;
