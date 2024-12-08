# Chill Gamer: A Game Review Application

## Live Website
[Visit Chill Gamer](https://your-live-site-url)

## Overview
Chill Gamer is a user-friendly platform where gamers can explore, share, and manage game reviews. Designed with simplicity and responsiveness in mind, it provides a seamless experience for users across all devices. 

## Features
- **Dynamic Home Page**: Includes a banner/slider, Highest Rated Games section, and two additional meaningful sections.
- **User Authentication**: Supports email/password registration and login with Google. Displays profile picture, name, and log-out functionality for logged-in users.
- **Protected Routes**: Ensures that sensitive pages (e.g., Add Review, My Reviews, Watchlist) are accessible only to logged-in users.
- **Interactive Review Management**: Add, update, delete, and view reviews with proper feedback via toast notifications.
- **Game Watchlist**: Enables users to add reviews to a watchlist for later reference.
- **Sorting and Filtering**: Sort reviews by rating or year and filter them by genre.
- **Dark/Light Mode Toggle**: Allows users to switch between themes.
- **Loading Spinner and Error Handling**: Provides a spinner during data loading and displays meaningful messages for errors.

## Technologies Used
- React.js with Context API
- React Router
- Firebase Authentication
- Tailwind CSS
- MongoDB (via server-side API)
- AOS animations and React Tooltip
- Lottie React and React Simple Typewriter

## Environment Variables
All sensitive data, such as Firebase configuration and API keys, are securely managed using `.env` files.

## Deployment
- Client-side hosted on: Netlify
- Server-side hosted on: Vercel

## Instructions
1. Clone this repository.
2. Install dependencies: `npm install`.
3. Start the development server: `npm start`.

---
