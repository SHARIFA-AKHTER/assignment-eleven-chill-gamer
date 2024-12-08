import { useLoaderData, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";

const UpdateReview = () => {
  const review = useLoaderData();
  const { _id } = review;

  const navigate = useNavigate();

  // Initialize form state
  const [formData, setFormData] = useState({
    gameCover: "",
    gameTitle: "",
    reviewDescription: "",
    rating: "",
    publishingYear: "",
    genre: "",
    userEmail: "",
    userName: "",
  });


  const genres = ["Action", "RPG", "Adventure", "Puzzle", "Sports"];


  useEffect(() => {
    setFormData({
      gameCover: review?.gameCover || "",
      gameTitle: review?.gameTitle || "",
      reviewDescription: review?.reviewDescription || "",
      rating: review?.rating || "",
      publishingYear: review?.publishingYear || "",
      genre: review?.genre || "",
      userEmail: review?.userEmail || "",
      userName: review?.userName || "",
    });
  }, [review]);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleUpdate = async (e) => {
    e.preventDefault();

    // Validate form fields
    if (
      !formData.gameCover ||
      !formData.gameTitle ||
      !formData.reviewDescription ||
      !formData.rating ||
      !formData.publishingYear ||
      !formData.genre
    ) {
      Swal.fire("Error", "All fields are required!", "error");
      return;
    }

    if (formData.rating < 1 || formData.rating > 10) {
      Swal.fire("Error", "Rating must be between 1 and 10!", "error");
      return;
    }

    try {
      // Send updated data to the server
      const response = await fetch(`http://localhost:5000/reviews/${_id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      // Handle server response
      if (response.ok && data.modifiedCount > 0) {
        Swal.fire("Success", "Review updated successfully!", "success");
        navigate("/reviews");
      } else {
        Swal.fire("Error", "Failed to update the review.", "error");
      }
    } catch (error) {
      Swal.fire("Error", "An error occurred. Please try again.", "error");
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 shadow-lg rounded-lg bg-[#F4F3F0]">
      <h2 className="text-3xl font-extrabold text-gray-600 mb-6">
        Update Review
      </h2>
      <form onSubmit={handleUpdate}>
        <div className="md:flex gap-4">
          {/* Game Title */}
          <div className="mb-4 md:w-1/2">
            <label className="block text-gray-600 mb-2">Game Title</label>
            <input
              type="text"
              name="gameTitle"
              value={formData.gameTitle}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="Enter game title"
            />
          </div>

          {/* Review Description */}
          <div className="mb-4 md:w-1/2">
            <label className="block text-gray-600 mb-2">Review Description</label>
            <textarea
              name="reviewDescription"
              value={formData.reviewDescription}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              rows="4"
              placeholder="Write your review here"
            ></textarea>
          </div>
        </div>

        <div className="md:flex gap-4">
          {/* Rating */}
          <div className="mb-4 md:w-1/2">
            <label className="block text-gray-600 mb-2">Rating (1-10)</label>
            <input
              type="number"
              name="rating"
              value={formData.rating}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              min="1"
              max="10"
            />
          </div>

          {/* Genre */}
          <div className="mb-4 md:w-1/2">
            <label className="block text-gray-600 mb-2">Genre</label>
            <select
              name="genre"
              value={formData.genre}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            >
              <option value="">Select Genre</option>
              {genres.map((genre) => (
                <option key={genre} value={genre}>
                  {genre}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="md:flex gap-4">
          {/* User Email */}
          <div className="mb-4 md:w-1/2">
            <label className="block text-gray-600 mb-2">Your Email</label>
            <input
              type="email"
              value={formData.userEmail}
              readOnly
              className="w-full px-4 py-2 border rounded-md"
            />
          </div>

          {/* User Name */}
          <div className="mb-4 md:w-1/2">
            <label className="block text-gray-600 mb-2">Your Name</label>
            <input
              type="text"
              value={formData.userName}
              readOnly
              className="w-full px-4 py-2 border rounded-md"
            />
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default UpdateReview;