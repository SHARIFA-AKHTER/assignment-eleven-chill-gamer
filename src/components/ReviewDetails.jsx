
import React from "react";

const ReviewDetails = ({ review }) => {
  return (
    <div className="card card-side bg-white shadow-xl rounded-lg overflow-hidden border border-gray-200 mb-4">
      <figure className="w-40 h-40">
        <img
          src={review.gameCover}
          alt="Game Cover"
          className="object-cover w-full h-full"
        />
      </figure>
      <div className="flex flex-col justify-between w-full p-4">
        <div>
          <h2 className="card-title text-xl font-bold text-gray-800">
            {review.gameTitle}
          </h2>
          <p className="text-sm text-gray-600 mt-2">{review.reviewDescription}</p>
          <span className="block text-sm text-gray-700">
            Rating: {review.rating}/10
          </span>
          <span className="block text-sm text-gray-700">Genre: {review.genre}</span>
          <span className="block text-sm text-gray-700">
            Published: {review.publishingYear}
          </span>
        </div>

        <div className="card-actions mt-4 flex justify-end">
          <button
            className="btn btn-primary bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
          >
            Add to Watchlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewDetails;



// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import { toast } from 'react-toastify'; // Optional for feedback messages

// const ReviewDetails = ({ user }) => {
//   const { id } = useParams(); // Get the review ID from the URL
//   const [review, setReview] = useState({});
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     // Fetch review details by ID
//     const fetchReviewDetails = async () => {
//       try {
//         // const response = await fetch(`http://localhost:5000/reviews/${id}`);
//         // const data = await response.json();
//         // setReview(data);
//         setIsLoading(false);
//       } catch (error) {
//         console.error('Error fetching review details:', error);
//       }
//     };

//     fetchReviewDetails();
//   }, [id]);

//   const handleAddToWatchlist = async () => {
//     if (!user) {
//       toast.error('Please log in to add to your Watchlist');
//       return;
//     }

//     const watchlistData = {
//       ...review,
//       userName: user.name,
//       userEmail: user.email,
//     };

//     try {
//       const response = await fetch('http://localhost:5000/watchlist', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(watchlistData),
//       });

//       const result = await response.json();
//       if (response.ok) {
//         toast.success('Added to Watchlist successfully!');
//       } else {
//         throw new Error(result.error || 'Failed to add to Watchlist');
//       }
//     } catch (error) {
//       console.error('Error adding to Watchlist:', error);
//       toast.error('Failed to add to Watchlist');
//     }
//   };

//   if (isLoading) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
//       <figure className="h-64 w-full mb-6">
//         <img
//           src={review.gameCover}
//           alt={review.gameTitle}
//           className="object-cover w-full h-full rounded-lg"
//         />
//       </figure>
//       <h1 className="text-3xl font-bold text-gray-800">{review.gameTitle}</h1>
//       <p className="text-gray-700 mt-4">{review.reviewDescription}</p>
//       <div className="mt-6">
//         <p className="text-gray-700">
//           <strong>Rating:</strong> {review.rating}/10
//         </p>
//         <p className="text-gray-700">
//           <strong>Genre:</strong> {review.genre}
//         </p>
//         <p className="text-gray-700">
//           <strong>Reviewer:</strong> {review.userName} ({review.userEmail})
//         </p>
//       </div>
//       {user && (
//         <button
//           onClick={handleAddToWatchlist}
//           className="mt-6 btn btn-primary w-full"
//         >
//           Add to Watchlist
//         </button>
//       )}
//     </div>
//   );
// };

// export default ReviewDetails;

  {/* <Link to={`/update-review/${review._id}`}>
                 <button className="btn btn-primary text-white 
                 font-semibold px-4 py-2 rounded-lg
                  hover:bg-blue-600 ">
                    Update button
                    </button>
                 </Link>
                 <button 
                 onClick={() => handleDelete(review._id)}
                 className="btn text-white font-semibold 
                 px-4 py-2 rounded-lg hover:bg-red-600
                  bg-red-500">X</button>
                 */}
