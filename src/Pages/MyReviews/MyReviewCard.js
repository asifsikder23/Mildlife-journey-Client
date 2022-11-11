import React, { useState } from "react";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';

const MyReviewCard = (props) => {
  console.log(props);
  const { name, photoURL, email, rating, massage, _id } = props.reviews;
  const [displayUsers, setDisplayUsers] = useState(props.reviews)
  
  const handleDelete =_id =>{
    console.log("deleting id", props.reviews._id);

    const swalWithBootstrapButtons = Swal.mixin({

      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger',
      },
      buttonsStyling: true
    })
    swalWithBootstrapButtons.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        swalWithBootstrapButtons.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success',

          fetch(`http://localhost:5000/reviews/${props.reviews._id}`,{
            method: 'DELETE'
          })
          .then(res => res.json())
          .then(data => {
              if(data.deletedCount > 0){
                  
                const remainingUsers = displayUsers.filter(usr => usr._id !== data._id);
                setDisplayUsers(remainingUsers);
              }
            })
        )
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelled',
          'Your imaginary file is safe :)',
          'error'
        )
      }
    })
  }
  return (
    <div className="p-10">
      <div className="flex flex-wrap place-items-center">
        <div className="overflow-hidden shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-5 hover:shadow-2xl rounded-lg h-90 w-60 md:w-80 cursor-pointer m-auto">
            <img
              alt="blog photo"
              src={photoURL}
              className="max-h-40 w-full object-cover"
            />
            <div className="bg-white w-full p-4">
              <p className="text-indigo-500 text-2xl font-medium">
                {/* {title} */}
              </p>
              <p className="text-gray-600 text-md">
                {massage}
              </p>
              <div className="flex flex-wrap justify-starts items-center py-3 border-b-2 text-xs text-white font-medium">
                <span className="m-1 px-2 py-1 rounded bg-indigo-500">{rating} <i className="fa-solid fa-star"></i></span>
                
              </div>
              <div className="md:flex justify-between items-center">
              <div className="flex items-center mt-2">
                <img
                  className="w-10 h-10 object-cover rounded-full"
                  alt="User avatar"
                  src={photoURL}
                />

                <div className="pl-3">
                  <div className="font-medium">{name}</div>
                  <div className="text-gray-600 text-sm">{email}</div>
                </div>
              </div>
              <div className="flex justify-end">
              <Link to={`/reviewUpdate/${_id}`}>
              <i className="fa-solid fa-pen-to-square mr-4"></i>
              </Link>
              <button
              onClick={handleDelete}>
              <i className="fa-solid fa-trash mr-2"></i>
              </button>
              </div>
              </div>
            </div>
         
        </div>
      </div>

    </div>
  );
};

export default MyReviewCard;
