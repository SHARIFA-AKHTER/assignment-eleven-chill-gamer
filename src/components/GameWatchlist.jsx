// import React, { useState, useEffect } from 'react';

// const GameWatchlist = () => {

//     const [watchlist, setWatchlist] = useState([]);
//     const [loading, setLoading] = useState(true);
  
//     useEffect(() => {
//       // Get the logged-in user's email (you could also use context or a global state)
//       const user = JSON.parse(localStorage.getItem('user'));
//       if (user) {
//         const userEmail = user.email;
  
//         // Fetch the user's watchlist data from the server
     
//           (`http://localhost:5000/watchlist/${userEmail}`)
//           .then((response) => {
//             setWatchlist(response.data); // Store the watchlist data
//             setLoading(false);
//           })
//           .catch((error) => {
//             console.error('Error fetching watchlist:', error);
//             setLoading(false);
//           });
//       }
//     }, []);
  
//     if (loading) {
//       return <div>Loading...</div>;
//     }
//     return (
//         <div className="container mx-auto py-12">
//         <h2 className="text-3xl font-bold mb-6">My Watchlist</h2>
//         {watchlist.length === 0 ? (
//           <p>No games added to your watchlist yet.</p>
//         ) : (
//           <table className="min-w-full table-auto border-collapse">
//             <thead>
//               <tr>
//                 <th className="px-4 py-2 border">Game Title</th>
//                 <th className="px-4 py-2 border">Rating</th>
//                 <th className="px-4 py-2 border">Genre</th>
//                 <th className="px-4 py-2 border">Reviewer</th>
//                 <th className="px-4 py-2 border">Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {watchlist.map((game) => (
//                 <tr key={game._id}>
//                   <td className="px-4 py-2 border">{game.gameTitle}</td>
//                   <td className="px-4 py-2 border">{game.rating}</td>
//                   <td className="px-4 py-2 border">{game.genre}</td>
//                   <td className="px-4 py-2 border">{game.reviewerName}</td>
//                   <td className="px-4 py-2 border">
//                     <button
//                       onClick={() => handleRemoveFromWatchlist(game._id)}
//                       className="bg-red-500 text-white px-4 py-2 rounded"
//                     >
//                       Remove
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         )}
//       </div>
//     );
// };

// export default GameWatchlist;
import React from 'react';

const GameWatchlist = () => {
    return (
        <div>
            watchlist
        </div>
    );
};

export default GameWatchlist;