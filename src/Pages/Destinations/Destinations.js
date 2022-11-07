import React from "react";

const Destinations = () => {
  return (
    <div>
        <div>
        <p className="text-center text-[#FF3811] font-bold text-xl mt-32">
          Gallery
        </p>
        <p className="text-5xl font-bold text-center mt-5">Our Most Popular
Destination!</p>

        <p className="mt-5 text-center text-[#737373]">
        The journey of a thousand miles begins with a single step.
        </p>
      </div>
      <section className="py-6 dark:bg-gray-800 dark:text-gray-50 mt-10">
        <div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
          <img
            src="https://i.pinimg.com/736x/14/ad/12/14ad1206826308025297e2f8885c30f2.jpg"
            alt=""
            className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 dark:bg-gray-500 aspect-square"
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
            src="https://c1.wallpaperflare.com/preview/147/335/645/saintmartin-bangladesh-landscape-natural-travel-tourism.jpg"
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
            src="https://bangladesh-travel-assistance.com/wp-content/uploads/2020/11/st-martins-island-bangladesh-trawler-speed-boat-1200x630-o-880x462.jpg"
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
            src="https://i0.wp.com/ruposhi-bangla.com/wp-content/uploads/2020/01/Coral-at-Sain-Martin.jpg?fit=1024%2C558&ssl=1"
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
            src="https://www.muktomon.net/upload/news/1628776726.jpg"
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
            src="https://static2.tripoto.com/media/filter/tst/img/267346/SpotDocument/1498570282_1498570278_8572196250_566750e6cb_z.jpg"
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
            src="https://cdn.eventegg.com/images/travel/2/238/ahsan-manzil-bangladesh.jpg"
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
            src="https://media.tacdn.com/media/attractions-splice-spp-674x446/06/75/bd/75.jpg"
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
            src="https://www.travelmate.com.bd/wp-content/uploads/2019/07/Nilgiri-How-To-Go.jpg"
          />
          <img
            src="https://live.staticflickr.com/3727/11923584024_89d9e182c4_b.jpg"
            alt=""
            className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-1 md:row-start-3 dark:bg-gray-500 aspect-square"
          />
        </div>
      </section>
    </div>
  );
};

export default Destinations;
