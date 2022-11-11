import React, { useEffect, useState } from "react";
import useTitle from "../../hooks/useTitle";
import PackagesCard from "./PackagesCard";
import { CirclesWithBar, ThreeDots } from "react-loader-spinner";

const Packages = () => {
  const [loading, setLoading] = useState(true);
  const [info, setInfo] = useState([]);
  useEffect(() => {
    setLoading(true);
    fetch("https://mildlife-journey-server-asifsikder23.vercel.app/services")
      .then((res) => res.json())
      .then((data) => {
        setInfo(data);
        setLoading(false);
      });
  }, []);
  useTitle("Packages");
  return (
    <div>
      <div className="p-5 mx-auto sm:p-10 md:p-16 dark:bg-gray-800 dark:text-gray-100">
        <div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
          <img
            src="http://www.tourtoday.com.bd/shop/wp-content/uploads/2018/05/banner-photo.jpg"
            alt=""
            className="w-full h-60 sm:h-96 dark:bg-gray-500"
          />
          <div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md dark:bg-gray-900">
            <div className="space-y-2">
              <a
                href="/"
                className="inline-block text-2xl font-semibold sm:text-3xl"
              >
                The world is a book and those who do not travel read only one
                page.
              </a>
              <p className="text-xs dark:text-gray-400">
                By :
                <a
                  href="https://www.facebook.com/asifullahsikder"
                  className="text-xs hover:underline"
                >
                  Md. Asif Ullah Sikder
                </a>
              </p>
            </div>
            <div className="dark:text-gray-100">
              <p>Tour Packages are here...</p>
            </div>
          </div>
        </div>
        {loading && (
          <h2 className="flex justify-center my-10">
            <ThreeDots
              height="80"
              width="80"
              radius="9"
              color="#4fa94d"
              ariaLabel="three-dots-loading"
              wrapperStyle={{}}
              wrapperClassName=""
              visible={true}
            />
          </h2>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-12 gap-5">
          {info.map((packages) => (
            <PackagesCard key={packages.key} packages={packages}></PackagesCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Packages;
