import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import Swal from 'sweetalert2'
import { AuthContext } from "../Providers/AuthProvider";

const AddReview = () => {
     const { user } = useContext(AuthContext);
     const navigate = useNavigate()
        const [formData, setFormData] = useState({
           gameCover: "",
           gameTitle: "",
           reviewDescription: "",
           rating: "",
           publishingYear: "",
           genre: "",
            userEmail: user?.email || "",
            userName: user?.name || "SuperMen",
            
         }) 
       
        const genres = ["Action", "RPG", "Adventure", "Puzzle", "Sports"] 
        const handleChange = (e) => {
          const { name, value } = e.target;
          setFormData({ ...formData, [name]: value });
        }; 
      const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.gameCover ||
           !formData.gameTitle ||
             !formData.reviewDescription ||
              !formData.rating ||
              !formData.publishingYear ||
               !formData.genre  
             
          ) {
          toast.error("All fields are required!");
          return;
        }
      


        try {
          //send data to the server
          fetch('http://localhost:5000/reviews',{
            method:'POST',
            headers: {
              'content-type': 'application/json'
            },
            body:JSON.stringify(formData),
          })
          .then(res=> res.json())
          .then(data =>{
            console.log(data)

            if(data.insertedId){
              Swal.fire({
                title: 'success',
                text: 'Review Added Successfully',
                icon: 'success',
                confirmButtonText: 'Cool'
              })
            }
          })
          
        navigate("/reviews"); 
        } 
           catch (error) {
            toast.error("Failed to add the review. Try again.");
           }
    }
    
    return (
        <div className="max-w-4xl mx-auto p-24 shadow-lg rounded-lg bg-[#F4F3F0]">
            <h2 className="text-3xl font-extrabold text-gray-600">Add New Review</h2>
            <form onSubmit={handleSubmit}>
                {/* Game Cover Image */}
               <div className="md:flex gap-4">
               <div className="mb-4 md:w-1/2">
                <label className="block text-gray-600 mb-2">Game Cover Image URL</label>
                <input
                  type="url"
                  name="gameCover"
                   value={formData.gameCover}
                   onChange={handleChange}
                  className="w-full px-4 py-2 border
                   rounded-md focus:outline-none focus:ring
                    focus:ring-blue-300"
                  placeholder="Enter image URL"
                />
              </div>

                   {/* Game Title */}
                <div className="mb-4 md:w-1/2">
                    <label className="block text-gray-600 mb-2">Game Title</label>
                    <input type="text"
                     name="gameTitle"
                     value={formData.gameTitle}
                     onChange={handleChange}
                     className="w-full px-4 py-2 border
                     rounded-md focus:outline-none focus:ring
                      focus:ring-blue-300"
                       placeholder="Enter game title"
                     />

                </div>
               </div>

                 {/* Review Description */}
        <div className="md:flex gap-4">        
        <div className="mb-4 md:w-1/2">
          <label className="block text-gray-600 mb-2">Review Description</label>
          <textarea
            name="reviewDescription"
            value={formData.reviewDescription}
            onChange={handleChange}
            className="w-full px-4 py-2 border
             rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            rows="4"
            placeholder="Write your review here"
          ></textarea>
        </div>

        {/* Rating */} 
        <div className="mb-4 md:w-1/2">
          <label className="block text-gray-600 mb-2">Rating (1-10)</label>
          <input
            type="number"
            name="rating"
            value={formData.rating}
            onChange={handleChange}
            className="w-full px-4 py-2 border
             rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            min="1"
            max="10"
          />
        </div>
       </div>

        {/* Publishing Year */}
        <div className="md:flex gap-4">
        <div className="mb-4 md:w-1/2">
          <label className="block text-gray-600 mb-2">Publishing Year</label>
          <input
            type="number"
            name="publishingYear"
            value={formData.publishingYear}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md 
            focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="e.g., 2024"
          />
        </div>

        {/* Genre */}
        <div className="mb-4 md:w-1/2">
          <label className="block text-gray-600 mb-2">Genre</label>
          <select
            name="genre"
            value={formData.genre}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md
             focus:outline-none focus:ring focus:ring-blue-300"
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

        {/* User Email */}
        <div className="md:flex gap-4">
        <div className="mb-4 md:w-1/2">
          <label className="block text-gray-600 mb-2">Your Email</label>
          <input
            type="email"
            value={formData.userEmail}
            readOnly
            className="w-full px-4 py-2 border rounded-md "
             placeholder="Enter your email"
          />
        </div> 

        {/* User Name */}
         <div className="mb-4 md:w-1/2">
          <label className="block text-gray-600 mb-2">Your Name</label>
          <input
            type="text"
            value={formData.userName || "SuperMen"}
            readOnly
            className="w-full px-4 py-2 border rounded-md "
             placeholder="Enter your name"
          />
        </div> 
       </div>
        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-2 bg-blue-500
           text-white rounded-md hover:bg-blue-600"
        >
          Submit Review
        </button>
            </form>
        </div>
    );
};

export default AddReview;