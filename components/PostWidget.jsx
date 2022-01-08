import React, { useState, useEffect } from "react";
import { getRecentPosts, getSimilarPosts } from "../services";
import moment from "moment";
import Link from "next/Link";

export default function PostWidget({ categories, slug }) {
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    if (slug) {
      getSimilarPosts(categories, slug).then((result) =>
        setRelatedPosts(result)
      );
    } else {
      getRecentPosts().then((result) => setRelatedPosts(result));
    }
  }, [slug]);
  console.log(relatedPosts);
  return (
    <div className="bg-white shadow-lg rounded-lg p-8 mb-8 ">
      <h3 className="text-xl mb-8 border-b-2 font-semibold  ">
        {slug ? "Related Post" : "Recent Post"}
      </h3>
      {relatedPosts.map((post) => (
        <div key={post.title} className="flex items-center w-full ">
          <div className=" flex-none  ">
            <img
              src={post.featuredImage.url}
              alt={post.title}
              className="  py-3  rounded-full align-middle"
              width="60px"
              height="60px"
            />
          </div>
          <div className="flex-grow ml-4">
            <p className="text-gray-500 font-xs">
              {moment(post.createdAt).format("MMM DD, YYYY")}
            </p>
            <Link
              href={`/post/${post.slug}`}
              key={post.title}
              className="text-md"
            >
              {post.title}
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
