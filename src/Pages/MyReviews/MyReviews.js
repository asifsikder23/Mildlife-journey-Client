import React, { useContext, useEffect, useState } from "react";
import { CirclesWithBar } from "react-loader-spinner";
import { AuthContext } from "../../Context/UserContext";
import useTitle from "../../hooks/useTitle";
import MyReviewCard from "./MyReviewCard";

const MyReviews = () => {
  const [loading, setLoading] = useState(true);
    useTitle('Reviews')
  const { user } = useContext(AuthContext);
  const [review, setReview] = useState([]);
  useEffect(() => {
    setLoading(true);
    fetch(`http://localhost:5000/reviews?email=${user?.email}`,{
      headers: {'Authorization': `Bearer ${localStorage.getItem('token')}`}
    })
      .then((res) => res.json())
      .then((data) => {
        console.log('my-reviews',data);
        setReview(data)
      });
      setLoading(false);
  }, [user?.email]);
  console.log(review);
  return (
    <div>
      <div>
        <img src="https://www.contractor-advertising.com/wp-content/uploads/customer-reviews.png" alt="" />
      </div>
      {loading && (
        <h2 className="flex justify-center my-20">
          <CirclesWithBar
            height="100"
            width="100"
            color="#4fa94d"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            outerCircleColor=""
            innerCircleColor=""
            barColor=""
            ariaLabel="circles-with-bar-loading"
          />
        </h2>
      )}
    {
      review.length ?
      <div className="flex flex-row flex-wrap-reverse justify-center">
      {review.map(reviews => (
        <MyReviewCard reviews={reviews}></MyReviewCard>
      ))}
    </div>
    :
    <div className="flex justify-center">
      <img src="https://media.tenor.com/D9bYdAabuHEAAAAd/noreview.gif" alt="" />
    </div>
    }
    </div>
  );
};

export default MyReviews;
