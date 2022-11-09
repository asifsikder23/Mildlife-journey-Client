import React from 'react';
import { useLoaderData } from 'react-router-dom';

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
        </div>
    );
};

export default ServiceDetailsInfo;