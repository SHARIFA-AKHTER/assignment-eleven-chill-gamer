// import React from 'react';

// const ReviewDetails = () => {
//     return (
//         <div>
            
//         </div>
//     );
// };

// export default ReviewDetails;

// import { useContext, useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { AuthContext } from "../contexts/AuthContext";
// import { toast } from "react-toastify";

// const ReviewDetails = () => {
//   const { id } = useParams();
//   const { user } = useContext(AuthContext);
//   const [review, setReview] = useState(null);

//   useEffect(() => {
//     fetch(`http://localhost:5000/reviews/${id}`)
//       .then((res) => res.json())
//       .then((data) => setReview(data))
//       .catch(() => toast.error("Failed to fetch review details"));
//   }, [id]);

//   const handleAddToWatchlist = () => {
//     if (user) {
//       const watchlistItem = {
//         ...review,
//         userEmail: user.email,
//         userName: user.displayName,
//       };
//       fetch("http://localhost:5000/watchlist", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(watchlistItem),
//       })
//         .then(() => toast.success("Added to Watchlist!"))
//         .catch(() => toast.error("Failed to add to Watchlist"));
//     } else {
//       toast.error("Please log in to add to Watchlist");
//     }
//   };

//   if (!review) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="max-w-4xl mx-auto p-8 bg-gray-100 rounded-lg shadow-md">
//       <img src={review.gameCover} alt={review.gameTitle} className="mb-6" />
//       <h2 className="text-3xl font-bold">{review.gameTitle}</h2>
//       <p className="text-gray-600 mb-4">{review.reviewDescription}</p>
//       <p className="mb-4">Rating: {review.rating}</p>
//       <p className="mb-4">Genre: {review.genre}</p>
//       <p className="mb-4">Reviewer: {review.userName} ({review.userEmail})</p>
//       <button
//         onClick={handleAddToWatchlist}
//         className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600"
//       >
//         Add to Watchlist
//       </button>
//     </div>
//   );
// };

// export default ReviewDetails;