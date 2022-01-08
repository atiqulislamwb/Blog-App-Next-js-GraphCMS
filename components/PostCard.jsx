import React from "react";
import moment from "moment";
import Link from "next/Link";

export default function PostCard({ post }) {

  return (
    <div className="shadow-lg bg-white rounded-lg p-0 lg:p-8 pb-12 mb-8">
      <div className="relative overflow-hidden shadow-md pb-80 mb-6">
        <img
          src={post.featuredImage.url}
          alt={post.title}
          className="object-top absolute h-80 w-full object-cover shadow-t-lg lg:rounded-t-lg  "
        />
      </div>
      <h1 className="transition duration-200 text-center mb-8 cursor-pointer  text-2xl hover:text-pink-600 font-semibold ">
        <Link href={`/post/${post.slug}`}>{post.title}</Link>
      </h1>

      <div className="block lg:flex justify-between text-center   mb-8 w-full">
        <div className="flex items-center justify-center mb-4 lg:mb-0 w-full lg:w-auto mr-8  ">
          <img
            alt={post.author.name}
            src={post.author.photo.url}
            height="30px"
            width="30px"
            className="rounded-full align-middle"
          />
          <p className="inline align-middle text-gray-700 ml-2 text-lg ">
            {post.author.name}
          </p>
        </div>
        <div className="font-medium text-gray-700 align-middle flex items-center justify-center mx-auto   ">
          <img
            className="rounded-full align-middle  "
            src="https://img.icons8.com/color/48/fa314a/planner.png"
          />
          <span className="inline align-middle text-gray-700 ml-2 text-sm ">
            {moment(post.createdAt).format("MMM DD, YYYY")}
          </span>
        </div>
      </div>
      <p className="text-center text-lg text-gray-700 font-normal px-4 lg:px-20 ">
        {post.excerpt}
      </p>

      <div className="text-center ">
        <Link href={`/post/${post.slug}`}>
          <span className="uppercase transition duration-200 transform hover:-translate-y-1 inline-block bg-purple-700 font-medium px-5 py-2 text-sm rounded-full text-white mt-5 cursor-pointer ">
            continue reading
          </span>
        </Link>
      </div>
    </div>
  );
}
