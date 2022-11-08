import React from "react";
import { ArrowRightIcon } from '@heroicons/react/24/solid'
import './Services.css'
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div>
      <div>
        <p className="text-center text-[#FF3811] font-bold text-xl mt-10 md:mt-20">
          Packages
        </p>
        <p className="text-5xl font-bold text-center mt-5">Most Desire Packages</p>

        <p className="mt-5 text-center text-[#737373]">
        The journey of a thousand miles begins with a single step.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-12 gap-6">

      <div className="card  bg-base-100 shadow-xl">
        <figure>
          <img className="h-52 rounded-xl card-img" src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" alt=''/>
        </figure>
        <div className="card-body">
          <h2 className="card-title mt-5">vcbcvbvcb</h2>
          <div className="flex justify-between">
          <div>
          <p className="text-[#FF3811] text-xl font-semibold">Price : $456</p>
          </div>
          <a href="/">
          <ArrowRightIcon className="h-6 w-6 text-[#FF3811] hover:text-[#ce553d] arrow"/>
          </a>
          </div>
        </div>
      </div>


      </div>
      <div className="text-center">
        <Link to={'/packages'} className="btn btn-outline hover:bg-[#FF3811] hover:border-none mt-12 w-1/4">
          See More
        </Link>
      </div>
    </div>
  );
};

export default Services;
