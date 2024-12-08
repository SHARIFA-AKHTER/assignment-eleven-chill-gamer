import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';

const MyReviews = () => {
  const loadedReviews = useLoaderData();
  const [reviews, setReviews] = useState(loadedReviews);

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this review?');
    if (confirmDelete) {
      try {
        const response = await fetch(`http://localhost:5000/reviews/${id}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (response.ok) {
          setReviews(reviews.filter((review) => review._id !== id));
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
                <td className="border p-2">{review.gameTitle || 'N/A'}</td>
                <td className="border p-2">{review.rating || 'N/A'}</td>
                <td className="border p-2">{review.genre || 'N/A'}</td>
                <td className="border p-2">
                  <Link
                    to={`/update-review/${review._id}`}
                    className="mr-2 btn btn-primary
                     bg-blue-500 text-white px-3 py-1 rounded"
                  >
                    Update
                  </Link>
                  <button
                    onClick={() => handleDelete(review._id)}
                    className="btn btn-danger bg-red-500
                     text-white px-3 py-1 rounded"
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