import React from "react";
import gif from '../../../src/assets/images/4575f6_ec4b613c4b6c4e9b89ad9c530b51c52a_mv2.gif'
import useTitle from "../../hooks/useTitle";

const Contact = () => {
  useTitle('Contact')
  return (
    <div>
        <h2 className="text-center bg-slate-800 text-white text-4xl font-bold p-5">Contact Me</h2>
      <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 dark:bg-gray-800 dark:text-gray-100">
        <div className="flex flex-col justify-between">
          <img
            src={gif}
            alt=""
            className=""
          />
        </div>
        <form
          className="space-y-6 ng-untouched ng-pristine ng-valid"
        >
          <div>
            <label className="text-sm">
              Full name
            </label>
            <input
              id="name"
              type="text"
              placeholder=""
              className="w-full p-3 rounded dark:bg-gray-800 border"
            />
          </div>
          <div>
            <label className="text-sm">
              Email
            </label>
            <input
              id="email"
              type="email"
              className="w-full p-3 rounded dark:bg-gray-800 border"
            />
          </div>
          <div>
            <label className="text-sm">
              Message
            </label>
            <textarea
              id="message"
              rows="3"
              className="w-full p-3 rounded dark:bg-gray-800 border"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded dark:bg-violet-400 dark:text-gray-900"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
