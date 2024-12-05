import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ReviewDetails from './ReviewDetails';

const Home = () => {
    const reviews = useLoaderData();
    return (
        <div className='m-20'>
            <h2 className='flex justify-center mx-auto my-20'>
                CHILL GAMER: {reviews.length}
            </h2>
           <div className='grid md:grid-cols-2 gap-4'>
           {
              reviews.map(review =><ReviewDetails
              key={review._id}
              review ={review}
              ></ReviewDetails>)  
            }
           </div>
        </div>
    );
};

export default Home;