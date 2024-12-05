const ReviewsCard = ({ review }) => {

    const handleDelete = _id =>{
        
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
                 <button className="btn ">Update button</button>
                 <button className="btn bg-red-500">X</button>
                
                 </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewsCard;
