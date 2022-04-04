// import React from 'react';
import React, { useEffect, useState } from 'react';
import CustomLink from '../CustomLink/CustomLink';
import Review from '../review/review';
import './Home.css'

const Home = () => {
    const [reviews, setReviews] = useState([])

    useEffect(() =>{
        fetch('reviews.json')
       .then(res=> res.json())
       .then(data => setReviews(data))
    },[])
    return (
        <div>
        <div className='book'>
            <div>
                <h1 className='bookColor'>THE BIG BOOK OF HOMESCHOOL IDEAS</h1>
                <h1>It is the Best Book Forever</h1>
                <p>First let me tell you a little about The Big Book of Homeschool Ideas.  This e-book was written by 55 homeschool moms who are bloggers and a part of the iHomeschool Network. There are 103 different topics and 561 pages of awesome content. Yeah, it really is a BIG BOOK!  This book covered everything you ever wanted to know (and more) about homeschooling from some homeschool experts. </p>
                <button className='btn'>Live Demo</button>
            </div>
            <div>
                <img src="https://teachbesideme.com/wp-content/uploads/2014/08/Big-Book-of-Ideas-Final-Cover-3D-768x884.jpg" alt="" />
            </div>
        </div>
        <div>
        <h1>Customer Reviews</h1>
        </div>
        <div className='home-container'>
        {
               reviews.slice(0,3).map(review=> <Review
                 key={review.id} 
                 review ={review}
                 ></Review>) 
            }
        </div>
        <div className='button'>
        <button ><CustomLink to="/reviews">See All Reviews</CustomLink></button>
        </div>
        </div>
    );
};

export default Home;