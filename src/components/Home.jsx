import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ReviewDetails from './ReviewDetails';
import Banner from './Banner';
import HighestRatedGames from './HighestRatedGames ';




const Home = () => {
    const loadedReviews = useLoaderData();
    const [reviews,setReviews] =useState(loadedReviews);

    return (
        <div className=''>
         <Banner></Banner>
         <HighestRatedGames></HighestRatedGames>
        
            <h2 className='flex justify-center mx-auto my-20'>
              {/* CHILL GAMER: {reviews.length}  */}
            </h2>
           <div className='grid md:grid-cols-2 gap-4'>
           {
              reviews.map(review =><ReviewDetails
              key={review._id}
              review ={review}
              reviews ={reviews}
              setReviews ={setReviews}
              ></ReviewDetails>)  
            }
           </div>
        </div>
    );
};

export default Home;