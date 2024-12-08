

import { useContext, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        navigate("/"); // Redirect to home after logout
      })
      .catch((error) => console.error("Logout Error: ", error));
  };

  return (
    <nav className="bg-gray-800">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <Link to="/" className="text-white text-xl font-bold">
          CHILL GAMER
        </Link>

        {/* Hamburger Menu for Mobile */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="block md:hidden text-white focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        {/* Navigation Links */}
        <div
          className={`absolute md:relative top-16 md:top-auto left-0 w-full md:w-auto bg-gray-800 md:bg-transparent z-20 md:flex items-center space-y-4 md:space-y-0 md:space-x-4 ${
            isMenuOpen ? "block" : "hidden"
          }`}
        >
          <NavLink
            to="/"
            className={({ isActive }) =>
              `block px-4 py-2 md:inline text-white ${
                isActive ? "text-yellow-400" : "hover:text-yellow-400"
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/reviews"
            className={({ isActive }) =>
              `block px-4 py-2 md:inline text-white ${
                isActive ? "text-yellow-400" : "hover:text-yellow-400"
              }`
            }
          >
            All Reviews
          </NavLink>

          {/* Protected Routes */}
          {user && (
            <>
              <NavLink
                to="/add-review"
                className={({ isActive }) =>
                  `block px-4 py-2 md:inline text-white ${
                    isActive ? "text-yellow-400" : "hover:text-yellow-400"
                  }`
                }
              >
                Add Review
              </NavLink>
              <NavLink
                to="/my-reviews"
                className={({ isActive }) =>
                  `block px-4 py-2 md:inline text-white ${
                    isActive ? "text-yellow-400" : "hover:text-yellow-400"
                  }`
                }
              >
                My Reviews
              </NavLink>
              <NavLink
                to="/watchlist"
                className={({ isActive }) =>
                  `block px-4 py-2 md:inline text-white ${
                    isActive ? "text-yellow-400" : "hover:text-yellow-400"
                  }`
                }
              >
                Game WatchList
              </NavLink>
            </>
          )}
        </div>

        {/* Authentication Links or User Avatar */}
        <div className="flex items-center space-x-4">
          {!user ? (
            <>
              <Link
                to="/login"
                className="text-white hover:text-yellow-400 px-4 py-2"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="text-white hover:text-yellow-400 px-4 py-2"
              >
                Register
              </Link>
            </>
          ) : (
            <div className="relative group flex items-center">
              {/* User Avatar */}
              <img
                src={user.photoURL || "https://i.ibb.co/3fNPrWF/user-image.jpg"}
                alt={user.displayName || "User"}
                className="w-10 h-10 rounded-full cursor-pointer"
              />
              {/* Tooltip */}
              <div
                className="absolute hidden group-hover:block bg-white text-black text-sm px-4 py-2 rounded shadow-lg top-12 right-0"
              >
                <span className="block font-semibold mb-2">
                  {user.displayName || "User"}
                </span>
                <button
                  onClick={handleLogOut}
                  className="text-white bg-red-500 px-3 py-1 rounded hover:bg-red-600"
                >
                  Log Out
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;