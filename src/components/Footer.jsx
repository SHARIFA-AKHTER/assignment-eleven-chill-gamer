import React from 'react';

const Footer = () => {
    return (
        <footer class="bg-gray-900 text-gray-300 py-10">
        <div class="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
       
        <div>
          <h2 class="text-2xl font-bold text-white mb-4">GameReviews</h2>
          <p class="text-sm">
            Your go-to platform for honest and insightful reviews on the latest games. Join us to stay ahead in the gaming world.
          </p>
          <p class="mt-4 text-sm">&copy; 2024 GameReviews. All rights reserved.</p>
        </div>
    
       
        <div>
          <h3 class="text-xl font-semibold text-white mb-4">Quick Links</h3>
          <ul class="space-y-2">
            <li><a href="/" class="hover:text-blue-500">Home</a></li>
            <li><a href="/reviews" class="hover:text-blue-500">All Reviews</a></li>
            <li><a href="/add-review" class="hover:text-blue-500">Add Review</a></li>
            <li><a href="/watchlist" class="hover:text-blue-500">Game WatchList</a></li>
            <li><a href="/about" class="hover:text-blue-500">About Us</a></li>
          </ul>
        </div>
    

        <div>
          <h3 class="text-xl font-semibold text-white mb-4">Stay Connected</h3>
          <div class="flex space-x-4 mb-4">
            <a href="#" class="hover:text-blue-500">
              <i class="fab fa-facebook text-2xl"></i>
            </a>
            <a href="#" class="hover:text-blue-500">
              <i class="fab fa-twitter text-2xl"></i>
            </a>
            <a href="#" class="hover:text-blue-500">
              <i class="fab fa-instagram text-2xl"></i>
            </a>
            <a href="#" class="hover:text-blue-500">
              <i class="fab fa-youtube text-2xl"></i>
            </a>
          </div>
          <form>
            <label for="email" class="block text-sm mb-2">Subscribe to our newsletter</label>
            <div class="flex">
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                class="w-full px-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                class="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>
      </footer>
    );
};

export default Footer;