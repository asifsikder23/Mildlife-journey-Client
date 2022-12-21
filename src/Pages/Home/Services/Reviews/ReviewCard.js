import React from "react";

const ReviewCard = (props) => {
  console.log(props);
  const { name, photoURL, email, rating, massage } = props.userData;

  return (
    <div className=" rounded-lg border bg-slate-100 shadow-sm transition hover:shadow-lg sm:p-6">
      <div className="flex justify-between gap-48">
      <div className="flex gap-10">
      <div className="avatar">
        <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
          <img src={photoURL} />
        </div>
      </div>

    
        <div>
        <h3 className="mt-0.5 text-lg font-medium text-gray-900">
          {name}
        </h3>
        <h3 className="mt-0.5 text-gray-900">
          {email}
        </h3>
        </div>
      </div>
      <div className="flex gap-2">
        <div>
        <p className="text-orange-600 font-bold">{rating} Stars</p>
        </div>
        <div className="">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-orange-600"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
            />
          </svg>
        </div>
      </div>
      </div>

     
      <div>
      <p className="mt-2 text-sm  text-gray-500 text-center">
        {massage}
      </p>
      </div>
      
      </div>
  );
};

export default ReviewCard;
