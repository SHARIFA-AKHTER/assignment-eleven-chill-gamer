import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
    // const { user, logout } = useContext(AuthContext); // User data from auth context
     const navigate = useNavigate();

    return (
        <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex items-center justify-between">
          {/* Logo / Website Name */}
          <Link to="/" className="text-white text-xl font-bold">CHILL GAMER</Link>
  
          {/* Navigation Links */}
          <div className="space-x-4">
            <Link to="/" className="text-white">Home</Link>
            <Link to="/reviews" className="text-white">All Reviews</Link>
  
            {/* Protected Routes (only visible if logged in) */}
            {/* {user && ( */}
              <>
                <Link to="/add-review" className="text-white">Add Review</Link>
                <Link to="/my-reviews" className="text-white">My Reviews</Link>
                <Link to="/watchlist" className="text-white">Game WatchList</Link>
              </>
            {/* )} */}
          </div>
  
          {/* Authentication Links or User Avatar */}
          <div className="flex items-center space-x-4">
            {/* {!user ? ( */}
              <>
                <Link to="/login" className="text-white">Login</Link>
                <Link to="/register" className="text-white">Register</Link>
              </>
            {/* ) : ( */}
              <div className="relative">
                {/* User Avatar */}
                {/* <img 
                  src={user.photoURL} 
                  alt="User Avatar" 
                  className="w-8 h-8 rounded-full cursor-pointer" 
                  title={user.displayName} 
                /> */}
                {/* Tooltip or Dropdown on hover */}
                {/* <div className="absolute top-10 left-0 bg-white text-black p-2 rounded-lg shadow-lg hidden group-hover:block">
                  {user.displayName}
                </div> */}
              </div>
            {/* )} */}
          </div>
        </div>
      </nav>
    );
};

export default Navbar;