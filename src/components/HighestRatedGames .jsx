import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const HighestRatedGames = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch('http://localhost:5000/reviews', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        // console.log('Response received:', response);
        if (!response.ok) {
          throw new Error('Failed to fetch reviews');
        }

        const data = await response.json();

        // Sort reviews by rating 
        const sortedReviews = data.sort((a, b) => b.rating - a.rating).slice(0, 6);

        setReviews(sortedReviews);
      } catch (error) {
        console.error('Error fetching reviews:', error);
      }
    };

    fetchReviews();
  }, []);

  const renderStars = (rating) => {
    const totalStars = 10; 
    let stars = [];
    for (let i = 1; i <= totalStars; i++) {
      stars.push(
        <span key={i} className={i <= rating ? 'text-yellow-500' : 'text-gray-300'}>
          ★
        </span>
      );
    }
    return stars;
  };

  return (
    <div className="max-w-7xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
            <h2 className="text-lg font-bold text-gray-800">{review.gameTitle}</h2>
            <p className="text-sm text-gray-600 mt-2">
              {review.description?.slice(0, 80)}Wow So Nice Game {review.description?.length > 80 && "Read more"}
            </p>
            <div className="mt-4 space-y-1">
              <div className="flex items-center space-x-1">
                <strong className="text-sm text-gray-700">Rating:</strong>
                <div className="flex">{renderStars(review.rating)}</div>
              </div>
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

export default HighestRatedGames;