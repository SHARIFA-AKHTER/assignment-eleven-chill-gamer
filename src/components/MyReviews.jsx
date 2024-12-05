

const MyReviews = () => {

    return (
        <div>
             <h2>This is Myreviews</h2>
        </div>
   );
 };

export default MyReviews;

// import { useEffect, useState, useContext } from "react";
// // import { AuthContext } from "../contexts/AuthContext";
// import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";

// const MyReviews = () => {
// //   const { user } = useContext(AuthContext);
//   const [reviews, setReviews] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (user) {
//       fetch(`http://localhost:5000/reviews?email=${user.email}`)
//         .then((res) => res.json())
//         .then((data) => setReviews(data))
//         .catch((error) => toast.error("Failed to load reviews"));
//     }
//   }, [user]);

//   const handleDelete = (id) => {
//     if (window.confirm("Are you sure you want to delete this review?")) {
//       fetch(`http://localhost:5000/reviews/${id}`, {
//         method: "DELETE",
//       })
//         .then((res) => res.json())
//         .then(() => {
//           setReviews((prev) => prev.filter((review) => review._id !== id));
//           toast.success("Review deleted successfully!");
//         })
//         .catch(() => toast.error("Failed to delete review"));
//     }
//   };

//   const handleUpdate = (id) => {
//     navigate(`/updateReview/${id}`);
//   };

//   return (
//     <div className="max-w-6xl mx-auto p-8 bg-gray-100 rounded-lg shadow-md">
//       <h2 className="text-3xl font-bold text-gray-700 mb-6">My Reviews</h2>
//       <table className="w-full bg-white shadow-md rounded-md">
//         <thead>
//           <tr className="bg-gray-200">
//             <th className="px-4 py-2">Game Title</th>
//             <th className="px-4 py-2">Rating</th>
//             <th className="px-4 py-2">Review</th>
//             <th className="px-4 py-2">Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {reviews.map((review) => (
//             <tr key={review._id} className="border-t">
//               <td className="px-4 py-2">{review.gameTitle}</td>
//               <td className="px-4 py-2">{review.rating}</td>
//               <td className="px-4 py-2">{review.reviewDescription}</td>
//               <td className="px-4 py-2">
//                 <button
//                   onClick={() => handleUpdate(review._id)}
//                   className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2"
//                 >
//                   Update
//                 </button>
//                 <button
//                   onClick={() => handleDelete(review._id)}
//                   className="bg-red-500 text-white px-4 py-2 rounded-md"
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