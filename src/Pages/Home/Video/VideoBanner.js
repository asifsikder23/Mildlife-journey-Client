import React from "react";
import "./VideoBanner.css";

const VideoBanner = () => {
  return (
    <div>
      <div className=" bg-black text-white mt-5">
        <h1 className="text-4xl font-bold tbl-header text-center my-5">
          Beautiful Bangladesh
        </h1>
        <div className="flex flex-col lg:flex-row">
          <iframe
            src="https://www.youtube.com/embed/_e_hEWZP8mU"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            className="md:w-6/12 h-48 md:h-96 container mx-auto md:p-5"
          ></iframe>

          <div className="px-8 mx-auto md:w-1/2">
            <p className="py-3 text-justify">
            Bangladesh is one of the few countries in South Asia, which remains to be explored. Bangladesh has a delicate and distinctive attraction of its own to offer. Bangladesh has a land of enormous beauty, hundreds of serpentine rivers, crystal clear water lakes surrounded by ever green hills, luxuriant tropical rain forests, beautiful cascades of green tea gardens, world's largest mangrove forest preserved as World Heritage, home of the Royal Bengal Tiger and the wild lives, warbling of birds in green trees, wind in the paddy fields, abundance of sunshine, world's longest natural sea beach.
            
              Bangladesh has a natural beauty all over the country, Rivers are the most important geographical features in Bangladesh and also brings the natural attractiveness to it. Bangladesh has a plenty of places to enjoy and recreation,Cox's Bazar (120 kilometers) World Longest Natural Sea Beach is one of them. Cox's Bazar is the tourist capital of Bangladesh. Miles of golden sands, towering cliffs, surfing waves, rare conch shells, colorful pagodas, Buddhist temples and tribes, delightful sea-food--this is Cox's Bazar.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoBanner;
