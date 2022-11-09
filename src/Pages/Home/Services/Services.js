import React, { useEffect, useState } from "react";
import './Services.css'
import { Link } from "react-router-dom";
import ServiceCards from "./ServiceCards";

const Services = () => {
  const [inf, setInf] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/limit')
      .then(res => res.json())
      .then(data => setInf(data));
  },[]);
  return (
    <div>
      <div>
        <p className="text-center text-[#FF3811] font-bold text-xl mt-10 md:mt-15 container mx-auto">
          Packages
        </p>
        <p className="text-5xl font-bold text-center mt-5">Most Desire Packages</p>

        <p className="mt-5 text-center text-[#737373]">
        The journey of a thousand miles begins with a single step.
        </p>
      </div>
      <div className="md:flex md:flex-col-3 justify-center md:gap-14 md:mt-10">
      {inf.map((pack) => (
        <ServiceCards
        key={pack.key}
        pack={pack}
        ></ServiceCards>
          ))}
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
