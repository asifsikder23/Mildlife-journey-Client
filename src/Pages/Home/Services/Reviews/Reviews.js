import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../../Context/UserContext";
import Swal from 'sweetalert2'

const Reviews = () => {
  
  const { user } = useContext(AuthContext);
  
  const handleReview = (event)=>{
    event.preventDefault();
    const form = event.target;
    const rating = form.rating.value;
    const photoURL = form.photoURL.value;
    const message = form.message.value;
    form.reset();
    const review = {
      email:user.email,
      name:user.displayName,
      rating:rating,
      photoURL:photoURL,
      message:message
    }
    console.log(review);
    fetch('http://localhost:5000/review',{
      method: "POST",
      headers: {'content-type':"application/json"},
      body:JSON.stringify(review)
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
  }
  return (
    <div>
          {
            user ?
            <div className="md:flex md:flex-row-reverse">
          <div className="">
            <img src="https://i.giphy.com/media/lMl2tZmYHhrJHvY4rP/giphy.webp" alt="" />
          </div>
          <div className="p-8 shadow-sm rounded-xl lg:p-12 dark:bg-gray-900 dark:text-gray-100 md:w-1/2">
            <div className="flex flex-col items-center w-full">
              <h2 className="text-3xl font-semibold text-center">
                Your opinion matters!
              </h2>
              <div className="flex flex-col items-center py-6 space-y-3">
                <span className="text-center">How was your experience?</span>
              </div>
              <form onSubmit={handleReview}>
              <div className="flex flex-col w-full">
                <div className="flex">
              
                <div>
                <input
                  className="p-2 rounded-md dark:text-gray-100 dark:bg-gray-900 border mb-2 w-4/5"
                  type="number"
                  name="rating"
                  id="rating"
                  placeholder="Rating..."
                />
                </div>
                <div>
                <input
                  className="p-2 rounded-md dark:text-gray-100 dark:bg-gray-900 border mb-2"
                  type="text"
                  name="photoURL"
                  id="photo"
                  placeholder="photoURL..."
                />
                </div>
                </div>

                <textarea
                name="message"
                  type="text"
                  rows="3"
                  placeholder="Message..."
                  className="p-4 rounded-md resize-none dark:text-gray-100 dark:bg-gray-900 border"
                ></textarea>
                <button
                  type="submit"
                  className="py-4 my-8 font-semibold rounded-md dark:text-gray-900 dark:bg-violet-400"
                >
                  Leave feedback
                </button>
              </div>
              </form>
            </div>
            
            <div className="flex items-center justify-center">
              <a
                href="/"
                className="text-sm dark:text-gray-400"
              >
                Maybe later
              </a>
            </div>
          </div>
          </div>
          :
          <Link to={'/login'} className="btn btn-primary">Please Log in first for Review</Link>
          }
        
    </div>
  );
};

export default Reviews;
