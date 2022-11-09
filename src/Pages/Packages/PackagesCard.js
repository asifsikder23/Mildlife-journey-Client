import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { Link } from "react-router-dom";

const PackagesCard = (props) => {
  const { img, title, shortDes, duration, review, _id } = props.packages;
  return (
    <div>
      <div className="card w-80 bg-base-100 shadow-xl text-black">
        <figure>
        <PhotoProvider>
            <PhotoView src={img}>
              <img className="" src={img} alt="" />
            </PhotoView>
        </PhotoProvider>
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {title}
          </h2>
          <p className="text-justify">{shortDes}</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline text-purple-700">{duration}</div>
            <div className="badge badge-outline  text-amber-700">{review} <i class="fa-solid fa-star text-amber-600"></i></div>
          </div>
        </div>
        <Link to={`/serviceDetails/${_id}`} className="btn btn-primary rounded-none rounded-b-lg">View More Details</Link>
      </div>
    </div>
  );
};

export default PackagesCard;
