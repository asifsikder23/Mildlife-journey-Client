import React from "react";
import useTitle from "../../hooks/useTitle";

const Packages = () => {
  useTitle('Packages')
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
                The world is a book and those who do not travel read only one page.
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
      </div>
    </div>
  );
};

export default Packages;
