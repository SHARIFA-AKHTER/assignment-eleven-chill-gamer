// import { useContext } from "react";
// import { Link, NavLink, useNavigate } from "react-router-dom";
// import { AuthContext } from "../Providers/AuthProvider";

// const Navbar = () => {
//     const { user, logOut } = useContext(AuthContext); 
//      const navigate = useNavigate();
//      const handleLogOut = () => {
//       logOut()
//         .then(() => {
//           navigate("/"); 
//         })
//         .catch((error) => console.error("Logout Error: ", error));
//     };
//     return (
//         <nav className="bg-gray-800 p-4">
//         <div className="container mx-auto flex items-center justify-between">
        
//           <Link to="/" className="text-white text-xl font-bold">CHILL GAMER</Link>
  
//           <div className="space-x-4">
//             <Link to="/" className="text-white">Home</Link>
//             <Link to="/reviews" className="text-white">All Reviews</Link>
  
//             {/* Protected Routes */}
//         {/* {user && (  */}
//               <>
//                 <Link to="/add-review" className="text-white">Add Review</Link>
//                 <Link to="/my-reviews" className="text-white">My Reviews</Link>
//                 <Link to="/watchlist" className="text-white">Game WatchList</Link>
//               </>
//       {/* )}   */}
//           </div>
  
//           {/* Authentication Links or User Avatar */}
//           <div className="flex items-center space-x-4">
//              {!user ? ( 
//               <>
//                 <Link to="/login" className="text-white">Login</Link>
//                 <Link to="/register" className="text-white">Register</Link>
//               </>
//             ) : (

//               <div className="relative">
//               <img
//                 src={user.photoURL || ""} 
//                 alt={user.displayName || "User"}
//                 className="w-10 h-10 rounded-full cursor-pointer"
//                 title={user.displayName}
//               />
//               <div className="absolute bg-white text-black 
//               text-sm px-4 py-2 rounded shadow-lg top-12 hidden 
//               group-hover:block">
//                 {user.displayName || "User"}
//               </div>
//               <button
//                 onClick={handleLogOut}
//                 className="btn btn-sm btn-danger ml-4"
//               >
//                 Log Out
//               </button>
//             </div>
//            )} 
//           </div>
//         </div>
//       </nav>
//     );
// };

// export default Navbar;

import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogOut = () => {
    logOut()
      .then(() => {
        navigate("/"); // Redirect to home after logout
      })
      .catch((error) => console.error("Logout Error: ", error));
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-white text-xl font-bold">
          CHILL GAMER
        </Link>

        {/* Navigation Links */}
        <div className="space-x-4">
          <Link to="/" className="text-white">
            Home
          </Link>
          <Link to="/reviews" className="text-white">
            All Reviews
          </Link>

          {/* Protected Routes */}
          {user && (
            <>
              <Link to="/add-review" className="text-white">
                Add Review
              </Link>
              <Link to="/my-reviews" className="text-white">
                My Reviews
              </Link>
              <Link to="/watchlist" className="text-white">
                Game WatchList
              </Link>
            </>
          )}
        </div>

        {/* Authentication Links or User Avatar */}
        <div className="flex items-center space-x-4">
          {!user ? (
            <>
              <Link to="/login" className="text-white">
                Login
              </Link>
              <Link to="/register" className="text-white">
                Register
              </Link>
            </>
          ) : (
            <div className="relative group flex">
              {/* User Avatar */}
              <img
                src={user.photoURL || "https://i.ibb.co.com/3fNPrWF/user-image.jpg"} 
                alt={user.displayName || "User"}
                className="w-10 h-10 rounded-full cursor-pointer"
                title={user.displayName || "User"}
              />
              {/* Tooltip */}
              <div
                className="absolute bg-white text-black
                 text-sm px-4 py-2 rounded shadow-lg top-12
                  left-0 hidden group-hover:block"
              >
                {user.displayName || "User"}
              </div>
              {/* Log Out Button */}
              <button
                onClick={handleLogOut}
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 ml-4"
              >
                Log Out
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;