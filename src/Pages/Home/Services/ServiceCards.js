import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link } from 'react-router-dom';

const ServiceCards = (props) => {
    const { img, title, shortDes, duration, review, _id } = props.pack;
    return (
        
        <div className="card md:w-80 bg-base-100 shadow-xl text-black mt-4">
        <figure>
        <PhotoProvider>
            <PhotoView src={img}>
              <img src={img} alt="" />
            </PhotoView>
        </PhotoProvider>
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {title}
          </h2>
          <p>{shortDes}</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline text-purple-700">{duration}</div>
            <div className="badge badge-outline  text-amber-700">{review}<i className="fa-solid fa-star text-amber-600"></i></div>
          </div>
        </div>
        <Link to={`/serviceDetails/${_id}`} className="btn btn-primary rounded-none rounded-b-lg">View More Details</Link>
      </div>
        
    );
};

export default ServiceCards;