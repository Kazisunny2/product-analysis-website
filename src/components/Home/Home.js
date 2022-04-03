import React from 'react';
import './Home.css'

const Home = () => {
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
        <h1>Customer Reviews</h1>
        <button className='btn1'>See All Reviews</button>
        </div>
    );
};

export default Home;