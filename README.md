# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# Jokes Viewer App Documentation

## Project Overview

The Jokes Viewer App is a simple and interactive web application that fetches random jokes from the Random Jokes API and displays them in a clean, readable layout.

The main goal of this project is to create a fun and engaging user interface where users can browse jokes easily and enjoy a smooth viewing experience.

## API Used

Endpoint:

https://api.freeapi.app/api/v1/public/randomjokes

This API is used to retrieve random jokes and show them inside the application.

## Deployment Link:

https://jokes-generator-olive.vercel.app/

## Features
- Fetches jokes from a public API
- Displays jokes in a user-friendly layout
- Interactive UI for better browsing experience
- Clean and responsive design
- Easy to read joke cards or joke sections
- Styled using CSS or Tailwind CSS

## Tech Stack
- Frontend: React.js / JSX
- Styling: CSS or Tailwind CSS
- API Handling: Fetch API or Axios
- How It Works
- The app loads on the browser.
- It sends a request to the Random Jokes API.
- The API returns joke data.
- The jokes are displayed in the UI.
- Users can browse and enjoy the jokes in a simple interface.

## UI Design Goal

The interface is designed to make joke browsing:

- simple
- clean
- engaging
- easy to read
- visually appealing
- How to Run Locally
- Clone the project repository
- git clone <your-repo-link>
- Navigate to the project folder
- cd <project-folder>
- Install dependencies
- npm install
- Start the development server
- npm run dev
- Open the app in your browser
- http://localhost:3000
- Possible Future Improvements
- Add joke categories
- Add search or filter functionality
- Save favorite jokes
- Add loading animation
- Add dark mode
- Add share button for jokes
