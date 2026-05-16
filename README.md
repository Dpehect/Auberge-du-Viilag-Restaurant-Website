# L'Auberge du Village - Technical Documentation

A full-stack implementation of the L'Auberge du Village restaurant platform, engineered with a decoupled architecture focusing on high-performance rendering and state-driven content management.

## Live Application
[www.auberge-du-village.fr](https://www.auberge-du-village.fr/)

## System Architecture

The platform is built as a distributed system comprising a React-based client and a Node.js-based micro-service for content delivery.

### Frontend Engine (Client)
The client-side is a Single Page Application (SPA) built with React 18 and TypeScript, utilizing Vite for optimized module bundling and Hot Module Replacement (HMR).

- **Global State Orchestration**: Redux Toolkit (RTK) is utilized as the primary state container. It manages the lifecycle of asynchronous data fetching (via `createAsyncThunk`) and synchronizes UI states across the layout, ensuring consistent behavior for navigation and interactive elements.
- **Dynamic Content Rendering**: Components are designed to be data-driven. The `MenuSection` dynamically parses JSON payloads from the backend to generate complex nested layouts (Menus vs. À La Carte), maintaining strict typing through TypeScript interfaces.
- **Motion System**: Framer Motion handles the animation orchestration, using a declarative approach to implement scroll-linked reveals, entrance staggers, and GPU-accelerated transitions.
- **Viewport Optimization**: Implements a hybrid navigation strategy. Desktop users interact with a traditional top-level header, while mobile viewports utilize a specialized sticky bottom bar designed for thumb-friendly interaction and high-conversion reservation access.

### Backend Infrastructure (Server)
The server layer is a Node.js environment utilizing Express for low-latency API delivery.

- **API Layer**: Exposes RESTful endpoints for structural data delivery. The `menu.json` data layer serves as a flat-file database, enabling rapid content updates without the overhead of a traditional RDBMS for static-heavy content.
- **Interaction Handling**: Processes POST requests for contact synchronization, implementing basic logging and simulated delivery protocols for user inquiries.

## Technical Specifications

- **Runtime**: Node.js
- **Frontend Framework**: React 18 (Hooks, Context, Functional Components)
- **State Management**: Redux Toolkit (Slices, Thunks, Selectors)
- **Styling**: Modern CSS3 (Variables, Flexbox, Grid, Media Queries)
- **Iconography**: Lucide React (Vector-based)
- **Communication**: Axios (Promise-based HTTP client)

## Design System Logic

The design system follows a "Premium Editorial" methodology. It utilizes a refined ratio-based spacing scale and a specific typographic hierarchy (Cormorant Garamond for headings, Montserrat for UI elements) to establish a high-end visual language. Color tokens are centralized in CSS variables to maintain strict brand consistency across all components.
