import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const ReviewDetails = ({ review,reviews, setReviews }) => {

    const handleDelete = _id =>{
        console.log(_id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
           

                fetch(`http://localhost:5000/reviews/${_id}`,{
                    method:'DELETE'
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if(data.deletedCount > 0){
                           Swal.fire({
                             title: "Deleted!",
                             text: "Your Review has been deleted.",
                             icon: "success"
                           });
                           const remaining = reviews.filter(rev =>rev._id !== _id)
                           setReviews(remaining)
                    };
                })
            }
          });
    }
    return (
        <div>
              <div className="card card-side bg-white shadow-xl
               rounded-lg overflow-hidden border border-gray-200">
            <figure className="w-40 h-40">
                <img src={review.gameCover} 
                alt="Game Cover" 
                 className="object-cover w-full h-full"
                />
            </figure>
            <div className="flex flex-col justify-between w-full p-4">
               <div>
               <h2 className="card-title text-xl font-bold text-gray-800">{review.gameTitle}</h2>
                   <p className="text-sm text-gray-600 mt-2">{review.reviewDescription}</p>
                    <span  className="block text-sm text-gray-700">Rating: {review.rating}/10</span>
                    <span className="block text-sm text-gray-700">Genre: {review.genre}</span>
                    <span  className="block text-sm text-gray-700">Published: {review.publishingYear}</span>
               </div>
             
                <div className="card-actions mt-4 flex justify-end">
                <div className="flex flex-col space-y-2">
                 <Link to={`/update-review/${review._id}`}>
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
                
                 </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default ReviewDetails;