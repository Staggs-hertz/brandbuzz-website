import React from "react";
import InputBox from "./InputBox";

const Form = () => {
  return (
    <div className="py-4">
      <form action="" method="post">
        <InputBox
          type="text"
          name="Name"
          id="name"
          placeholder="Your Name..."
        />
        <InputBox
          type="email"
          name="Email"
          id="email"
          placeholder="youremail123@gmail.com"
        />
        <InputBox
          type="text"
          name="Subject"
          id="subject"
          placeholder="Title..."
        />
        <label
          htmlFor="message"
          className="text-gray-700 dark:text-gray-100 font-semibold"
        >
          Message
        </label>
        <textarea
          name="message"
          id="message"
          placeholder="Your Message..."
          rows={4}
          className="outline-none w-full border-2 border-gray-100 dark:border-gray-400 p-2 rounded dark:text-gray-100"
        />

        {/* Below is the newsletter checkbox and the submit button */}
        <div className="flex justify-between items-center py-5 max-md:flex-col">
          <div className="max-md:w-full">
            <input type="checkbox" name="newsletter" id="newsletter" />
            <small className="ml-2 dark:text-gray-100">
              Subscribe to our email newsletter
            </small>
          </div>

          <button
            type="submit"
            className="text-sm py-3 px-6 max-md:px-3 max-md:w-full max-md:mt-4 rounded hover:scale-105 transition-all shadow-lg flex-wrap bg-primary text-white"
          >
            SEND MESSAGE
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
