
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const AllReviews = () => {
  const [reviews, setReviews] = useState([]);

   // Fetch reviews on component mount
   useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch('http://localhost:5000/reviews', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
         
        });

        if (!response.ok) {
          throw new Error('Failed to fetch reviews');
        }

        const data = await response.json();
        setReviews(data);
      } catch (error) {
        console.error('Error fetching reviews:', error);
      }
    };

    fetchReviews();
  }, []);
       
    return (
        <div className="max-w-7xl mx-auto p-6 grid 
        grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviews.map((review) => (
          <div
            key={review._id}
            className="card bg-white shadow-lg rounded-lg overflow-hidden"
          >
            <figure className="h-48">
              <img
                src={review.gameCover}
                alt={review.gameTitle}
                className="object-cover w-full h-full"
              />
            </figure>
            <div className="p-4">
              <h2 className="text-lg font-bold text-gray-800">
                {review.gameTitle}
              </h2>
              <p className="text-sm text-gray-600 mt-2">
                {/* {review.reviewDescription.slice(0, 80)}... */}
              </p>
              <div className="mt-4 space-y-1">
                <span className="block text-sm text-gray-700">
                  <strong>Rating:</strong> {review.rating}/10
                </span>
                <span className="block text-sm text-gray-700">
                  <strong>Genre:</strong> {review.genre}
                </span>
              </div>
              <Link to={`/review-details/${review._id}`}>
                <button className="mt-4 btn btn-primary text-white w-full">
                  Explore Details
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    );
  };


export default AllReviews;