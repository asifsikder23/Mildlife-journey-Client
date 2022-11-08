import React from "react";
import cover from "../../assets/images/GALLERY.png";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

const Gallery = () => {
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
    },
    {
      id: 5,
      img: "https://nomadparadise.com/wp-content/uploads/2021/04/bangladesh-places-08-1024x683.jpg",
    },
    {
      id: 6,
      img: "https://i.pinimg.com/originals/f5/d1/aa/f5d1aaae087f314289049adc3cc0a8e1.jpg",
    },
    {
      id: 7,
      img: "http://www.travelhomesdhaka.com/tours_upload/rocket-steamer-sundarbans-tour-cover-600x338-gpst.jpg",
    },
    {
      id: 8,
      img: "https://bn.observerbd.com/2021/06/19/observerbd.com_1624121090.jpg",
    },
  ];
  console.log(gallery);
  return (
    <div>
      <img src={cover} alt="" />
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
  );
};

export default Gallery;
