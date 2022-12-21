import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Reviews from "./Reviews/Reviews";
import ShowReview from './Reviews/ShowReview';


const ServiceDetailsInfo = () => {
    const service = useLoaderData();
    return (
        <div>
            <div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
          <img
            src={service.img}
            alt=""
            className="w-full h-60 sm:h-96 dark:bg-gray-500"
          />
            <div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md dark:bg-gray-900">
            <div className="space-y-2">
              <p className="inline-block text-6xl font-semibold sm:text-3xl">
                {service.title}
              </p>
              <p className="text-xs dark:text-gray-400">
                {service.shortDes}
              </p>
            </div>
            <div className="dark:text-gray-100">
              <p>
                {service.des}
              </p>
            </div>
            <div className="flex justify-between">
              <div>
                <p>Amount : {service.cost} tk</p>
              </div>
              <div>
                <p>Duration : {service.duration}</p>
              </div>
              <div>
                <p>
                  Rating : {service.review}
                  <i className="fa-solid fa-star text-xs align-text-top text-amber-400"></i>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
        <section className="py-6 dark:bg-gray-800 dark:text-gray-100">
        <div className="container flex flex-col items-center justify-center p-4 mx-auto sm:p-10">
          <p className="p-2 text-sm font-medium tracking-wider text-center uppercase">
            Reviews
          </p>
          <h1 className="text-4xl font-bold leading-none text-center sm:text-5xl">
            A good, sympathetic review is always a wonderful surprise.
          </h1>
          </div>
      </section>
        </div>
        
        <div className='flex justify-between'>
        <div className=''>
        <ShowReview serviceId={service._id}></ShowReview>
        </div>

        <div className=''>
        <Reviews serviceId={service._id}
        serviceImg={service.img}
        serviceTitle={service.title}></Reviews>
        </div>
        </div>
        </div>
    );
};

export default ServiceDetailsInfo;