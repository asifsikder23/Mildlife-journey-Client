import React, { useEffect, useState } from "react";
import ReviewCard from "./ReviewCard";

const ShowReview = ({ serviceId }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(
      `https://mildlife-journey-server-asifsikder23.vercel.app/reviews/${serviceId}`
    )
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <div>
      
        <div className="grid grid-cols-1 w-full gap-5 ">
          {data?.map((userData) => (
            <ReviewCard key={userData.id} userData={userData}></ReviewCard>
          ))}
        </div>
    
    </div>
  );
};

export default ShowReview;
