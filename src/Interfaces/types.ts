import { StaticImageData } from "next/image";

export interface IAhmedBlogComment {
  id: string;
  author: string;
  date: string;
  content: string;
}
export interface IAhmedBlogPost {
  id: string;
  title: string;
  content: string;
  date: string;
  imageURL: StaticImageData;
  detailImageURL: StaticImageData;
  comments: IAhmedBlogComment[];
}
