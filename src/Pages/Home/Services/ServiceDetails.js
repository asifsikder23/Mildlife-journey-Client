import { useEffect, useState } from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";


import ServiceDetailsInfo from "./ServiceDetailsInfo";

const ServiceDetails = () => {
  const [datas, setDatas] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/services')
      .then((res) => res.json())
      .then((data) => setDatas(data));
  }, []);
  console.log(datas);
  const gallery = [
    {
      id: 1,
      img: "https://nomadparadise.com/wp-content/uploads/2021/04/bangladesh-places-07-1024x683.jpg",
    },
    {
      id: 2,
      img: "https://nomadparadise.com/wp-content/uploads/2021/04/bangladesh-places-04.jpg",
    },
    {
      id: 3,
      img: "https://backoffice.daily-bangladesh.com/media/imgAll/inner/1165802193.jpg",
    },
    {
      id: 4,
      img: "https://new-media.dhakatribune.com/en/uploads/2022/02/23/saint-martin-s-island-syed-zakir-hossain-1550144836438-1550144836439.jpeg",
    }
  ];
  return (
    <div>
      <div className="p-5 mx-auto sm:p-10 md:p-16 dark:bg-gray-800 dark:text-gray-100">

          <ServiceDetailsInfo></ServiceDetailsInfo>

          <div>
          <PhotoProvider>
        <div className="foo container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">

          {gallery.map((images) => (
            <PhotoView key={images.id} src={images.img}>
              <img className="object-cover w-full dark:bg-gray-500 aspect-square" src={images.img} alt="" />
              
            </PhotoView>
          ))}
        </div>
      </PhotoProvider>
          </div>

          <div>
            <p className="text-2xl bg-green-700 p-3 rounded my-5">
              Tour Highlights:
            </p>

            <li>
              All Standard / Deluxe accommodation on Twin Sharing basis as per
              itinerary
            </li>
            <li>AC / Non ac Transport / Ship / Local Transport / Trollar</li>
            <li>
              All sightseeing, toll, tax and entry fees as per mentioned
              itinerary
            </li>
            <li>Experienced guide</li>

            <p className="text-2xl bg-green-700 p-3 rounded my-5">Notes:</p>
            <li className="my-5">
              Timing and assembling for the places are flexible; We could change
              them because of traffic or timing during the tour.
            </li>
            <li className="my-5">
              Bengali local food is spicy. Plain rice, vegetables, fish & meat
              are available in restaurants. Biriyani & Khichuri made of rice,
              lentil, meat, and special spices is the famous food of old Dhaka
              also available in other cities. (Non-spicy food is possible to
              order in some restaurants if you like.)
            </li>
            <li className="my-5">
              There are many police and army checkpoints in Bandarban &
              Rangamati. Stop for the data entry and show the passports (if
              needed) for security. They will help you for the entire trip.
            </li>
          </div>
        </div>
      </div>
  );
};

export default ServiceDetails;
