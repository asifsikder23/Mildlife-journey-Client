import React, { useContext } from "react";
import { AuthContext } from "../../../../Context/UserContext";

const Reviews = () => {
  const { user } = useContext(AuthContext);

  const handleReview = (event)=>{
    event.preventDefault();
    const form = event.target;
    const rating = form.rating.value;
    const photoURL = form.photoURL.value;
    const message = form.message.value;
    form.reset();
    console.log(rating, photoURL, message);
  }
  return (
    <div>
      <section className="py-6 dark:bg-gray-800 dark:text-gray-100">
        <div className="container flex flex-col items-center justify-center p-4 mx-auto sm:p-10">
          <p className="p-2 text-sm font-medium tracking-wider text-center uppercase">
            Reviews
          </p>
          <h1 className="text-4xl font-bold leading-none text-center sm:text-5xl">
            A good, sympathetic review is always a wonderful surprise.
          </h1>

          <div className="md:flex md:flex-col-3">
          <div className="flex flex-row flex-wrap-reverse justify-center mt-8">
            <div className="flex flex-col justify-center w-full px-8 mx-6 my-12 text-center rounded-md md:w-96 lg:w-80 xl:w-64 dark:bg-gray-100 dark:text-gray-800">
              <img
                alt=""
                className="self-center flex-shrink-0 w-24 h-24 -mt-12 bg-center bg-cover rounded-full dark:bg-gray-500"
                src="https://source.unsplash.com/100x100/?portrait?0"
              />
              <div className="flex-1 my-4">
                <p className="text-xl font-semibold leading-snug">
                  Leroy Jenkins
                </p>
                <p>Very good services. Overall Awesome.</p>
              </div>
              <div className="flex items-center justify-center p-3 space-x-3 border-t-2 bg-slate-800 rounded-t-2xl">
                <i className="fa-regular fa-star text-amber-500">
                  <span className="font-sans"> 4.5 Stars</span>
                </i>
              </div>
            </div>
          </div>
          <div className="flex flex-row flex-wrap-reverse justify-center mt-8">
            <div className="flex flex-col justify-center w-full px-8 mx-6 my-12 text-center rounded-md md:w-96 lg:w-80 xl:w-64 dark:bg-gray-100 dark:text-gray-800">
            {
                user?.photoURL&& 
              <img
                alt=""
                className="self-center flex-shrink-0 w-24 h-24 -mt-12 bg-center bg-cover rounded-full dark:bg-gray-500"
                src={user.photoURL}
              />
            }
              <div className="flex-1 my-4">
                {
                user?.displayName && 
                  <p className="text-xl font-semibold leading-snug">
                    {user.displayName}
                  </p>
                }
                {
                user?.email && 
                <p>{user.email}</p>
                }
                <p>Very nice service and his behavior</p>
              </div>
              <div className="flex items-center justify-center p-3 space-x-3 border-t-2 bg-slate-800 rounded-t-2xl">
                <i className="fa-regular fa-star text-amber-500">
                  <span className="font-sans"> 4.5 Stars</span>
                </i>
              </div>
            </div>
          </div>
          </div>

          <div className="md:flex md:flex-row-reverse">
          <div className="">
            <img src="https://i.giphy.com/media/lMl2tZmYHhrJHvY4rP/giphy.webp" alt="" />
          </div>
          <div className="p-8 shadow-sm rounded-xl lg:p-12 dark:bg-gray-900 dark:text-gray-100 md:w-1/2">
            <div className="flex flex-col items-center w-full">
              <h2 className="text-3xl font-semibold text-center">
                Your opinion matters!
              </h2>
              <div className="flex flex-col items-center py-6 space-y-3">
                <span className="text-center">How was your experience?</span>
              </div>
              <form onSubmit={handleReview}>
              <div className="flex flex-col w-full">
                <div className="flex">
                <div>
                <input
                  className="p-2 rounded-md dark:text-gray-100 dark:bg-gray-900 border mb-2 w-4/5"
                  type="number"
                  name="rating"
                  id="rating"
                  placeholder="Rating..."
                />
                </div>
                <div>
                <input
                  className="p-2 rounded-md dark:text-gray-100 dark:bg-gray-900 border mb-2"
                  type="text"
                  name="photoURL"
                  id="photo"
                  placeholder="photoURL..."
                />
                </div>
                </div>

                <textarea
                name="message"
                  type="text"
                  rows="3"
                  placeholder="Message..."
                  className="p-4 rounded-md resize-none dark:text-gray-100 dark:bg-gray-900 border"
                ></textarea>
                <button
                  type="submit"
                  className="py-4 my-8 font-semibold rounded-md dark:text-gray-900 dark:bg-violet-400"
                >
                  Leave feedback
                </button>
              </div>
              </form>
            </div>
            
            <div className="flex items-center justify-center">
              <a
                href="/"
                className="text-sm dark:text-gray-400"
              >
                Maybe later
              </a>
            </div>
          </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Reviews;
