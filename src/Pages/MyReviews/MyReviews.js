import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/UserContext";
import useTitle from "../../hooks/useTitle";
import MyReviewCard from "./MyReviewCard";

const MyReviews = () => {
    useTitle('Reviews')
  const { user, logout } = useContext(AuthContext);
  const [review, setReview] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/review?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setReview(data));
  }, [logout]);
  return (
    <div className="flex flex-row flex-wrap-reverse justify-center">
      {review.map(reviews => (
        <MyReviewCard reviews={reviews}></MyReviewCard>
      ))}
    </div>
  );
};

export default MyReviews;
