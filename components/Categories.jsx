import React, { useState, useEffect } from "react";
import Link from "next/Link";

import { getCategories } from "../services";

export default function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories));
  }, []);

  return (
    <div className="bg-white shadow-lg rounded-lg p-8 mb-8 pb-12">
      <h3 className="text-xl mb-8 border-b-2 font-semibold pb-4 ">
        Categories
      </h3>
      {categories.map((category) => (
        <Link key={category.slug} href={`/category/${category.slug}`}>
          <span className="cursor-pointer block pb-2 mb-2">
            {category.name}
          </span>
        </Link>
      ))}
    </div>
  );
}
