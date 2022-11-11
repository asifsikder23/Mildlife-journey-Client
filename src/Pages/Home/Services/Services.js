import React, { useEffect, useState } from "react";
import "./Services.css";
import { Link } from "react-router-dom";
import ServiceCards from "./ServiceCards";
import { CirclesWithBar } from "react-loader-spinner";

const Services = () => {
  const [loading, setLoading] = useState(true);
  const [inf, setInf] = useState([]);
  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:5000/limit")
      .then((res) => res.json())
      .then((data) => {
        setInf(data)
        setLoading(false);
      });
  }, []);
  return (
    <div className="bg-slate-200 p-10 mt-10">
      
      <div>
        <p className="text-center text-[#FF3811] font-bold text-xl mt-10 md:mt-15 container mx-auto">
          Packages
        </p>
        <p className="text-5xl font-bold text-center mt-5">
          Most Desire Packages
        </p>

        <p className="mt-5 text-center text-[#737373]">
          The journey of a thousand miles begins with a single step.
        </p>
      </div>
      {loading && (
        <h2 className="flex justify-center my-10">
          <CirclesWithBar
            height="100"
            width="100"
            color="#4fa94d"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            outerCircleColor=""
            innerCircleColor=""
            barColor=""
            ariaLabel="circles-with-bar-loading"
          />
        </h2>
      )}
      <div className="md:flex md:flex-col-3 justify-center md:gap-14 md:mt-10">
        {inf.map((pack) => (
          <ServiceCards key={pack.key} pack={pack}></ServiceCards>
        ))}
      </div>
      <div className="text-center">
        <Link
          to={"/packages"}
          className="btn btn-outline hover:bg-[#FF3811] hover:border-none mt-12 w-1/4"
        >
          See More
        </Link>
      </div>
    </div>
  );
};

export default Services;
