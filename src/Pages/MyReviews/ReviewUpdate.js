import React from 'react';

const ReviewUpdate = () => {
    
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
                //   onSubmit={handleUpdateUser}
                  action=""
                  className="space-y-12 ng-untouched ng-pristine ng-valid"
                >
                  <div className="space-y-4">
                    <div>
                      <p className="block mb-2 text-sm">Rating</p>
                      <input
                        // onChange={handleInputChange}
                        defaultValue=""
                        type="text"
                        name="rating"
                        id="rating"
                        placeholder="* stars"
                        className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
                      />
                    </div>
                    <div>
                      <p className="block mb-2 text-sm">Message</p>
                      <textarea
                        // onChange={handleInputChange}
                        defaultValue=""
                        type="text"
                        name="message"
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