

import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const ReviewDetails = ({ review }) => {
  const navigate = useNavigate();

  const handleUpdateClick = () => {
    navigate(`/update-review/${review._id}`);
  };

  const handleDelete = async (reviewId) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this review?");
    if (confirmDelete) {
      try {
        const response = await fetch(`http://localhost:5000/reviews/${reviewId}`, {
          method: 'DELETE',
        });

        if (response.ok) {
          Swal.fire('Success', 'Review deleted successfully', 'success');
        } else {
          Swal.fire('Error', 'Failed to delete the review. Try again later.', 'error');
        }
      } catch (error) {
        console.error('Error deleting review:', error);
        Swal.fire('Error', 'Failed to delete the review. Try again later.', 'error');
      }
    }
  };

  return (
    <div className="card bg-white shadow-md rounded-lg mx-auto
    overflow-hidden border border-gray-200 mb-4 max-w-xs w-full ">
      <div className="flex p-4">
        <img
          src={review.gameCover}
          alt="Game Cover"
          className="object-cover w-16 h-16 rounded-md mr-4"
        />
        <div className="flex flex-col justify-between w-full">
          <h2 className="text-lg font-semibold text-gray-800">{review.gameTitle}</h2>
          <p className="text-sm text-gray-600 mt-1">{review.reviewDescription}</p>
          <span className="block text-xs text-gray-700 mt-2">Rating: {review.rating}/10</span>
          <span className="block text-xs text-gray-700">Genre: {review.genre}</span>
          <span className="block text-xs text-gray-700">Published: {review.publishingYear}</span>

          <div className="card-actions mt-3 flex justify-end space-x-2">
            <button className="btn btn-primary bg-blue-500
             text-white px-3 py-1 rounded-md
              hover:bg-blue-600 transition duration-200 ease-in">
              Add to Watchlist
            </button>

            {/* Update Button */}
            <button
              onClick={handleUpdateClick}
              className="btn btn-primary text-white
               font-semibold px-3 py-1 rounded-md
                hover:bg-blue-600 transition duration-200 ease-in"
            >
              Update
            </button>

            {/* Delete Button */}
            <button
              onClick={() => handleDelete(review._id)}
              className="btn text-white font-semibold
               px-3 py-1 rounded-md hover:bg-red-600
                bg-red-500 transition duration-200 ease-in"
            >
              X
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewDetails;