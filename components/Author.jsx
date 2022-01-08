import React from "react";
import Image from "next/Image";
export default function Author({ author }) {
  return (
    <div className="items-center mx-auto  bg-black bg-opacity-20 rounded-lg text-center relative mt-20 mb-8 p-12   ">
      <div className=" absolute right-0 left-0 -top-14 ">
        <Image
          src={author.photo.url}
          unoptimized
          alt={author.name}
          className="align-middle rounded-full "
          width="100px"
          height="100px"
        />
      </div>

      <h3 className="text-white font-semibold text-xl mb-1 ">{author.name}</h3>
      <p className=" text-lg text-white  ">{author.bio}</p>
    </div>
  );
}
