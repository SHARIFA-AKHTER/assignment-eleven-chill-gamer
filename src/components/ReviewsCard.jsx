import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const ReviewsCard = ({ review }) => {

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
                    }
                })
            }
          });
    }
    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <figure>
                <img src={review.gameCover} alt="Game Cover" />
            </figure>
            <div className="flex justify-between w-full pr-4">
               <div>
               <h2 className="card-title">{review.gameTitle}</h2>
                   <p>{review.reviewDescription}</p>
                    <span>Rating: {review.rating}/10</span>
                    <span>Genre: {review.genre}</span>
                    <span>Published: {review.publishingYear}</span>
               </div>
             
                <div className="card-actions justify-end">
                <div className="join join-vertical space-y-4">
                 <Link to={`/update-review/${review._id}`}>
                 <button className="btn ">Update button</button>
                 </Link>
                 <button 
                 onClick={() => handleDelete(review._id)}
                 className="btn bg-red-500">X</button>
                
                 </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewsCard;
