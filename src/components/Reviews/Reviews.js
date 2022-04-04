import React, { useEffect, useState } from 'react';
import Review from '../review/review';
import './Reviews.css';
const Reviews = () => {
   
    const [reviews, setReviews] = useState([])

    useEffect(() =>{
        fetch('reviews.json')
       .then(res=> res.json())
       .then(data => setReviews(data))
    },[])
    return (
        <div>
            <div className="review-container">
            {
               reviews.map(review=> <Review
                 key={review.id} 
                 review ={review}  
                 ></Review>) 
            }
           </div>
        </div>
    );
};

export default Reviews;