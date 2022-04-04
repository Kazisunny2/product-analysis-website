import React from 'react';
import './review.css';

const review = (props) => {
    const {name, img, comment} = props.review;
    return (
        <div className='review'>
            <img src={img} alt="" ></img>
           <div className='comment-info'>
           <p className='comment-name'>Name: {name}</p>
            <p>Comment: {comment}</p>
           </div>
        </div>
    );
};

export default review;