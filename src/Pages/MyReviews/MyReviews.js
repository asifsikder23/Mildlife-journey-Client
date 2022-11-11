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
    fetch(`http://localhost:5000/review?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setReview(data));
      setLoading(false);
  }, [user?.email]);
  return (
    <div>
      {loading && (
        <h2>
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
      <div>
        <img src="https://www.contractor-advertising.com/wp-content/uploads/customer-reviews.png" alt="" />
      </div>
      
    {
      review &&
      <div className="flex flex-row flex-wrap-reverse justify-center">
      {review.map(reviews => (
        <MyReviewCard reviews={reviews}></MyReviewCard>
      ))}
    </div>
    
    }
    </div>
  );
};

export default MyReviews;
