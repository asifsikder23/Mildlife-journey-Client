import React from "react";
import Swal from 'sweetalert2'
const Addpkg = () => {

  const handlePackage = (event) =>{
    event.preventDefault();
    const form = event.target;
    const title = form.title.value;
    const photo = form.photo.value;
    const duration = form.duration.value;
    const amount = form.amount.value;
    const review = form.review.value;
    const shortDes = form.shortDes.value;
    const description = form.description.value;
    form.reset();
    const packages = {title:title, img:photo, duration:duration, cost:amount, des:description, review:review, shortDes:shortDes}
    fetch('https://mildlife-journey-server-asifsikder23.vercel.app/services',{
      method: "POST",
      headers: {'content-type':"application/json"},
      body:JSON.stringify(packages)
    })
    .then(res => res.json())
    .then(data => console.log(data))
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Your work has been saved',
      showConfirmButton: false,
      timer: 1500
    })
    console.log(title, photo, duration, amount, description);
  }
  return (
    <div>
      <div className="md:hero">
        <div className="md:hero-content md:flex-col lg:flex-row">
          <img
            src="https://i.pinimg.com/originals/5d/3e/94/5d3e9462d91d43e0e76427d8b613e8c1.gif"
            alt=""
          />
          <div className="md:w-1/2 mx-5">
            <h1 className="text-5xl font-bold my-5 text-center">Add Packages</h1>


            <div className="bg-slate-800 text-white p-5">
            <form
              onSubmit={handlePackage}
              className="flex flex-col py-6 space-y-6 md:py-0 md:px-6 ng-untouched ng-pristine ng-valid"
            >
              <label className="block">
                <span className="mb-1">Title</span>
                <input
                  name="title"
                  type="text"
                  placeholder="Leroy Jenkins"
                  className="block w-full h-10 mt-3 text-center border rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:bg-gray-800"
                />
              </label>
              <label className="block">
                <span className="mb-1">PhotoURL</span>
                <input
                  type="text"
                  name="photo"
                  placeholder="photoURL....."
                  className="block w-full h-10 mt-3 text-center border rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:bg-gray-800"
                />
              </label>
              <label className="block">
                <span className="mb-1">Duration</span>
                <input
                  type="text"
                  name='duration'
                  placeholder="* Days * Night"
                  className="block w-full h-10 mt-3 text-center border rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:bg-gray-800"
                />
              </label>
              <label className="block">
                <span className="mb-1">Amount</span>
                <input
                  type="text"
                  name="amount"
                  placeholder="$$$"
                  className="block w-full h-10 mt-3 text-center border rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:bg-gray-800"
                />
              </label>
              <label className="block">
                <span className="mb-1">Review</span>
                <input
                  type="text"
                  name="review"
                  placeholder="4.5"
                  className="block w-full h-10 mt-3 text-center border rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:bg-gray-800"
                />
              </label>
              
              
              <label className="block">
                <span className="mb-1">Description</span>
                <textarea
                  type="text"
                  name="description"
                  rows="3"
                  className="block w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:bg-gray-800 border mt-3"
                ></textarea>
              </label>
              <label className="block">
                <span className="mb-1">Short Description</span>
                <textarea
                  type="text"
                  name="shortDes"
                  rows="3"
                  className="block w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:bg-gray-800 border mt-3"
                ></textarea>
              </label>
              <button
                type="submit"
                className="self-center px-8 py-3 text-lg rounded focus:ring hover:ring focus:ring-opacity-75 dark:bg-violet-400 dark:text-gray-900 focus:ring-violet-400 hover:ring-violet-400"
              >
                Add Package
              </button>
            </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Addpkg;
