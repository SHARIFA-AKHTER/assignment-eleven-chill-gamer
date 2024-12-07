import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';

const MyReviews = () => {
  const loadedReviews = useLoaderData(); // Assuming the data is loaded via a loader
  const [reviews, setReviews] = useState(loadedReviews);

  // Delete a review by ID
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this review?');
    if (confirmDelete) {
      try {
        const response = await fetch(`http://localhost:5000/reviews/${_id}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (response.ok) {
          setReviews(reviews.filter((review) => review._id !== id)); // Update state after deletion
          toast.success('Review deleted successfully');
        } else {
          toast.error('Failed to delete review');
        }
      } catch (error) {
        console.error('Error deleting review:', error);
        toast.error('Error deleting review');
      }
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">My Reviews: {reviews.length}</h1>
      {reviews.length === 0 ? (
        <p className="text-gray-500">You have no reviews yet.</p>
      ) : (
        <table className="table-auto w-full border-collapse border">
          <thead>
            <tr>
              <th className="border p-2">Game Title</th>
              <th className="border p-2">Rating</th>
              <th className="border p-2">Genre</th>
              <th className="border p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {reviews.map((review) => (
              <tr key={review._id}>
                <td className="border p-2">{review.gameTitle}</td>
                <td className="border p-2">{review.rating}</td>
                <td className="border p-2">{review.genre}</td>
                <td className="border p-2">
                  <Link
                    to={`/update-review/${review._id}`}
                    className="mr-2 btn btn-primary bg-blue-500 text-white px-3 py-1 rounded"
                  >
                    Update
                  </Link>
                  <button
                    onClick={() => handleDelete(review._id)}
                    className="btn btn-danger bg-red-500 text-white px-3 py-1 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default MyReviews;
// import { useState } from "react";
// import { useLoaderData } from "react-router-dom";

// const MyReviews = () => {
//      const loadedReviews = useLoaderData();
//      const [reviews,setReviews] =useState(loadedReviews);
 
//      return (
//           <div>
//                <h2 className='text-3xl'>My Reviews: {reviews.length}</h2>

//                <div className="container mx-auto p-6">
//       <h1 className="text-3xl font-bold mb-6">My Reviews</h1>
//       <table className="table-auto w-full border-collapse border">
//         <thead>
//           <tr>
//             <th className="border p-2">Game Title</th>
//             <th className="border p-2">Rating</th>
//             <th className="border p-2">Genre</th>
//             <th className="border p-2">Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//        {reviews.map((review) => (
//             <tr key={review._id}>
//               <td className="border p-2">{review.gameTitle}</td>
//               <td className="border p-2">{review.rating}</td>
//               <td className="border p-2">{review.genre}</td>
//               <td className="border p-2">
//                 <Link to={`/update-review/${review._id}`} className="mr-2 btn btn-primary">
//                   Update
//                 </Link>
//                 <button
//                   onClick={() => handleDelete(review._id)}
//                   className="btn btn-danger"
//                 >
//                   Delete
//                 </button>
//               </td>
//             </tr>
//           ))} 
//         </tbody>
//       </table>
//     </div>
//           </div>
//      );
// };

// export default MyReviews;



// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import { toast } from 'react-toastify'; // For notifications

// const MyReviews = ({ user }) => {
//   const [reviews, setReviews] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     // Fetch reviews for the logged-in user
//     const fetchMyReviews = async () => {
//       try {
//         const response = await fetch('http://localhost:5000/myReviews', {
//           headers: {
//             'Authorization': `Bearer ${user.token}`, // Assuming JWT token for authentication
//           },
//         });
//         const data = await response.json();
//         setReviews(data);
//         setIsLoading(false);
//       } catch (error) {
//         console.error('Error fetching reviews:', error);
//       }
//     };

//     if (user) {
//       fetchMyReviews();
//     }
//   }, [user]);

//   const handleDelete = async (id) => {
//     const confirmDelete = window.confirm('Are you sure you want to delete this review?');
//     if (confirmDelete) {
//       try {
//         const response = await fetch(`http://localhost:5000/deleteReview/${id}`, {
//           method: 'DELETE',
//           headers: {
//             'Authorization': `Bearer ${user.token}`,
//           },
//         });

//         if (response.ok) {
//           setReviews(reviews.filter((review) => review._id !== id));
//           toast.success('Review deleted successfully');
//         } else {
//           toast.error('Failed to delete review');
//         }
//       } catch (error) {
//         toast.error('Failed to delete review');
//       }
//     }
//   };

//   if (isLoading) {
//      // return <div>Loading...</div>;
//   }

//   return (
//     <div className="container mx-auto p-6">
//       <h1 className="text-3xl font-bold mb-6">My Reviews</h1>
//       <table className="table-auto w-full border-collapse border">
//         <thead>
//           <tr>
//             <th className="border p-2">Game Title</th>
//             <th className="border p-2">Rating</th>
//             <th className="border p-2">Genre</th>
//             <th className="border p-2">Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//        {reviews.map((review) => (
//             <tr key={review._id}>
//               <td className="border p-2">{review.gameTitle}</td>
//               <td className="border p-2">{review.rating}</td>
//               <td className="border p-2">{review.genre}</td>
//               <td className="border p-2">
//                 <Link to={`/updateReview/${review._id}`} className="mr-2 btn btn-primary">
//                   Update
//                 </Link>
//                 <button
//                   onClick={() => handleDelete(review._id)}
//                   className="btn btn-danger"
//                 >
//                   Delete
//                 </button>
//               </td>
//             </tr>
//           ))} 
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default MyReviews;