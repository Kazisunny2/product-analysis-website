import React from 'react';
import './review.css';

const review = (props) => {
    const {name, img, comment,} = props.review;
    return (
        <div className='review'>
            <img src={img} alt="" ></img>
           <div>
           <h2>Name: {name}</h2>
            <h5>Comment: {comment}</h5>
            <p>Rating: 5 Star</p>
           </div>
        </div>
    );
};

export default review;