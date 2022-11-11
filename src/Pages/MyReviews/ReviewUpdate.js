import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const ReviewUpdate = () => {
  const updateUser = useLoaderData();
  const [user, setUser] = useState(updateUser);
  console.log(updateUser[0]._id);

  const handleUpdateUser = (event) => {
    event.preventDefault();
    const massage = event.target.massage.value;
    const rating = event.target.rating.value;
    console.log(massage, rating);
    fetch(`http://localhost:5000/review/${updateUser[0]._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({massage, rating}),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Update has been saved",
            showConfirmButton: false,
            timer: 1500,
          });
          
        }
        console.log(data);
      });
  };

  return (
    <div>
      <section className="dark:bg-gray-800 dark:text-gray-100">
        <div className="container mx-auto px-4 py-12">
          <div>
            <div className="pr-5">
              <div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:dark:bg-violet-400">
                <div className="mb-8 text-center">
                  <h1 className="my-3 text-4xl font-bold">Add Users</h1>
                </div>
                <form
                  onSubmit={handleUpdateUser}
                  action=""
                  className="space-y-12 ng-untouched ng-pristine ng-valid"
                >
                  <div className="space-y-4">
                    <div>
                      <p className="block mb-2 text-sm">Rating</p>
                      <textarea
                        defaultValue=""
                        type="text"
                        name="rating"
                        id="message"
                        placeholder="like this ......"
                        className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
                      />
                    </div>
                    <div>
                      <p className="block mb-2 text-sm">Message</p>
                      <textarea
                        defaultValue=""
                        type="text"
                        name="massage"
                        id="message"
                        placeholder="like this ......"
                        className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div>
                      <button
                        type="submit"
                        className="w-full px-8 py-3 font-semibold rounded-md dark:bg-violet-400 dark:text-gray-900"
                      >
                        Update User
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ReviewUpdate;
