import React from 'react';

const ReviewCard = (props) => {
  console.log(props);
    const { name, photoURL, email, rating, massage } = props.userData;
  
    return (
        <div>
            <div className="flex flex-col justify-center w-full px-8 mx-6 my-12 text-center rounded-md md:w-96 lg:w-80 xl:w-64 dark:bg-gray-100 dark:text-gray-800">
              <img
                alt=""
                className="self-center flex-shrink-0 w-24 h-24 -mt-12 bg-center bg-cover rounded-full dark:bg-gray-500"
                src={photoURL}
              />
              <div className="flex-1 my-4">
                <p className="text-xl font-semibold leading-snug">
                  {name}
                </p>
                <p>{email}</p>
                <p>{massage}</p>
              </div>
              <div className="flex items-center justify-center p-3 space-x-3 border-t-2 bg-slate-800 rounded-t-2xl">
                <i className="fa-regular fa-star text-amber-500">
                  <span className="font-sans"> {rating} Stars</span>
                </i>
              </div>
            </div>
        </div>
    );
};

export default ReviewCard;