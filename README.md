# WorldWise

WorldWise is a single-page application (SPA) that allows users to explore cities around the world, set dates, and add notes to their favorite locations. The project is based on [Udemy's The ultimate React course by Jonas Schmedtmann](https://www.udemy.com/course/the-ultimate-react-course/), with additional features and customizations.

You can download the starter files for the project from [here](https://github.com/jonasschmedtmann/ultimate-react-course/tree/main/11-worldwise/starter).

## Recent Updates

- **Tailwind**: The course used CSS for styling. I had initially used SCSS but updated it to Tailwind for practice (and I loved it).

- **Project Structure**: Reorganized to a feature-based structure for better organization and maintainability. The course placed all components in a single components folder.

- **Pages**: The course included pages for homepage, pricing, product, login, and app to practice React Router. Now the pages are simplified to include only the homepage and the app (and a nicer 404 page). The login is integrated into the homepage.Unnecessary pages like pricing and product are removed.

- **Mobile Optimization**: The app is now mobile-friendly with improved responsiveness. The original code was not optimized for mobile.

## Features

- **Interactive Map**: Utilizes Leaflet to display an interactive map with city markers.
- **City Notes**: Users can click on a city on the map, set dates, and add personal notes.
- **Sidebar**: Displays a list of cities with saved notes and date visited.
- **Context API and useReducer**: State management for a seamless user experience.
- **Mobile-Friendly**: Optimized for mobile devices.

## Technologies Used

- **React**: For building the user interface
- **Vite**: For development and build tooling
- **Tailwind CSS**: For styling the application
- **Hero Icons 2** from react-icons: For providing icons
- **React Hook Form**: For managing form inputs
- **Leaflet**: For interactive maps
- **JSON Server**: Used to create a fake REST API for fetching, posting, deleting data.

## Installation

1. Clone the repository:

`git clone https://github.com/hesam-fattahi/worldwise.git`

2. Navigate to the project directory:

`cd worldwise`

3. Install dependencies:

`npm install`

4. To run the fake API server (JSON Server) run:

`npm run server`

Now you can visit http://localhost:9000/cities/ in your browser to see cities data.

5. Open a new terminal and start the development server:

`npm run dev`

6. Visit http://localhost:5173 in your browser to explore WorldWise.

## Contributing

Contributions are welcome! If you find any issues or want to enhance the project, feel free to submit a pull request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
