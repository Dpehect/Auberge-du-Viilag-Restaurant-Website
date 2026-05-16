# L'Auberge du Village - Modern Web Platform

A full-stack reconstruction of the L'Auberge du Village restaurant website, emphasizing premium editorial design and modern technical standards.

## Live Demo
[www.auberge-du-village.fr](https://www.auberge-du-village.fr/)

## Architecture

The project is architected as a decoupled system consisting of a React-based frontend and a Node.js-based backend.

### Frontend (Client)
Built with React 18 and Vite for optimal performance and development speed.
- **State Management**: Redux Toolkit manages global UI states and handles asynchronous menu data fetching.
- **Styling**: Utilizes modern Vanilla CSS with a customized design system focused on high-end typography and brand-specific color tokens.
- **Animations**: Framer Motion is integrated for sophisticated micro-interactions and scroll-based entrance animations.
- **Navigation**: React Router handles client-side routing, including a specialized sticky bottom navigation for mobile viewport optimization.

### Backend (Server)
A lightweight Node.js/Express environment serving as the data provider.
- **Data Layer**: Stores menu and restaurant metadata in structured JSON format, served via a RESTful API.
- **Integration**: Handles contact form processing and simulated mail delivery logic.

## Technology Stack

- **Core**: React, TypeScript, Node.js, Express.
- **UI/UX**: Framer Motion, Lucide React, Google Fonts (Cormorant Garamond, Montserrat).
- **Tooling**: Redux Toolkit, Axios, Vite, Dotenv.
## Installation and Execution

### Prerequisites
Ensure Node.js and npm are installed on your system.

### Server Setup
Navigate to the server directory, install dependencies, and start the development server.
```bash
cd server
npm install
npm run dev
```
The server defaults to port 5000.

### Client Setup
Navigate to the client directory, install dependencies, and start the Vite dev server.
```bash
cd client
npm install
npm run dev
```
The client defaults to port 5173.


## Design Principles

The platform adheres to a "Premium Editorial" aesthetic, utilizing high-resolution imagery and spacious layouts to mirror the upscale nature of the restaurant. Performance is prioritized through efficient state handling and minimal external dependencies.
