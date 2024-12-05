import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ReviewsCard from './ReviewsCard';

const Home = () => {
    const reviews = useLoaderData();
    return (
        <div className='m-20'>
            <h2 className='flex justify-center mx-auto my-20'>
                CHILL GAMER: {reviews.length}
            </h2>
           <div className='grid md:grid-cols-2 gap-4'>
           {
              reviews.map(review =><ReviewsCard
              key={review._id}
              review ={review}
              ></ReviewsCard>)  
            }
           </div>
        </div>
    );
};

export default Home;