import React, { useEffect, useState } from 'react';
import ReviewCard from './ReviewCard';

const ShowReview = ({serviceId}) => {
    const [data, setData] = useState([]);
    
  useEffect(() => {
    fetch(`http://localhost:5000/reviews/${serviceId}`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
    return (
        <div>
            <div className="md:flex md:flex-col-3">
          <div className="flex flex-row flex-wrap-reverse justify-center mt-8">
          {data?.map((userData) => (
            <ReviewCard
            key={userData.id}
            userData={userData}
            ></ReviewCard>
            
          ))}
          </div>
          </div>
        </div>
    );
};

export default ShowReview;