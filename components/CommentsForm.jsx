import React, { useState, useEffect, useRef } from "react";
import { submitComment } from "../services";

export default function CommentsForm({slug}) {
  const [error, setError] = useState(false);
  const [localStorage, setLocalStorage] = useState(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const commentEl = useRef();
  const nameEl = useRef();
  const emailEl = useRef();
  const storeDataEl = useRef();

  useEffect(() => {
    nameEl.current.value = window.localStorage.getItem("name");
    emailEl.current.value = window.localStorage.getItem("email");
  }, []);

  const handleSubmission = () => {
    setError(false);
    const { value: comment } = commentEl.current;
    const { value: name } = nameEl.current;
    const { value: email } = emailEl.current;
    const { checked: storeData } = storeDataEl.current;

    if (!comment || !name || !email ) {
      setError(true);
      return;
    }

    const commentObj = { name, email, comment, slug };

    if (storeData) {
      window.localStorage.setItem("name", name);
      window.localStorage.setItem("email", email);
    } else {
      window.localStorage.removeItem("name", name);
      window.localStorage.removeItem("email", email);
    }

    submitComment(commentObj).then((res) => {
      setShowSuccessMessage(true);
      setTimeout(() => {
        setShowSuccessMessage(false);
      }, 3000);
    });
  };

  return (
    <div className="bg-white shadow-lg rounded-lg mb-8 pb-12 p-8  ">
      <h3 className=" text-xl mb-8 font-semibold border-b-2 pb-4 ">
        Leave a Comment
      </h3>

      <div className="grid grid-cols-1 gap-4 mb-4">
        <textarea
          ref={commentEl}
          placeholder="Comments"
          name="comment"
          className="p-4 outline-none w-full rounded-lg focus:ring-gray-200 bg-gray-200 text-gray-900  "
        ></textarea>
      </div>

      <div className="grid grid-cols-1 gap-4 mb-4">
        <input
          type="text"
          placeholder="Name"
          name="name"
          ref={nameEl}
          className="py-4 focus:ring-gray-200 bg-gray-200 text-gray-900  rounded-lg"
        />
        <input
          type="email"
          placeholder="Email"
          email="email"
          ref={emailEl}
          className="py-4 focus:ring-gray-200 bg-gray-200 text-gray-900 rounded-lg "
        />
      </div>

      <div className="grid grid-cols-1 gap-4 mb-4">
        <div>
          <input
            ref={storeDataEl}
            type="checkbox"
            id="storeData"
            name="storeData"
            value="true"
          />
          <label className="cursor-pointer text-gray-700 ml-2">
            Save my Email & Name for next comments
          </label>
        </div>
      </div>

      {error && <p>All fields ar required</p>}
      <div className="mt-8">
        <button
          type="button"
          className="bg-gray-500 text-white  transition duration-500 ease transform rounded-full px-4 py-2 hover:bg-pink-500"
          onClick={handleSubmission}
        >
          Submit
        </button>
        {showSuccessMessage && (
          <span className="text-xl float-right font-semibold mt-3 text-green-600 ">
            comment submitted for reviews{" "}
          </span>
        )}
      </div>
    </div>
  );
}
