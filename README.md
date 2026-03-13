# Advanced Todo App

A modern, feature-rich Todo application built with React, TypeScript, and Vite. Features a beautiful gradient UI with full CRUD operations, advanced filtering, search functionality, statistics, and theme switching.

## Features

### Core Functionality
- Add new todos with title, category, priority, and due date
- Mark todos as complete/incomplete with visual feedback
- Edit todos by double-clicking on the text
- Delete individual todos
- Bulk operations: Check all todos or clear completed ones

### Advanced Features
- Real-time search through all todos
- Advanced filtering by category, priority, and status
- Live statistics with progress tracking
- Dark/Light theme toggle with smooth transitions
- Fully responsive design for all devices

### User Experience
- Modern gradient UI with smooth animations
- Fast performance with optimized React patterns
- Persistent storage via JSON Server API
- Intuitive interactions with hover effects and transitions
- Due date tracking with overdue highlighting

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd my-todo-app
```

2. Install dependencies:
```bash
npm install
```

3. Start the JSON Server (backend):
```bash
npm run server
```
This starts the mock API server on `http://localhost:3001`

4. Start the development server:
```bash
npm run dev
```
This starts the React app on `http://localhost:5173`

### Usage Guide

#### Adding Todos
- Type your task in the input field
- Select a category (Work, Personal, Shopping, Health, Education)
- Choose priority level (Low, Medium, High)
- Set a due date (optional)
- Click "Add Todo" or press Enter

#### Managing Todos
- Complete: Click the checkbox next to any todo
- Edit: Double-click on todo text to edit inline
- Delete: Click the trash icon next to a todo
- Bulk Actions: Use "Check All" or "Clear Completed" buttons

#### Filtering & Search
- Status Filter: All / Active / Completed buttons
- Advanced Filters: Filter by category and priority
- Search: Type in the search bar to find todos instantly

#### Statistics
- Total: Total number of todos
- Completed: Number of finished tasks
- Remaining: Number of pending tasks
- Progress: Visual progress bar with completion percentage

## Tech Stack

### Frontend
- React 19 - Modern React with hooks and concurrent features
- TypeScript - Type-safe JavaScript for better development experience
- Vite - Fast build tool and development server
- CSS3 - Modern styling with CSS variables and animations

### Backend (Development)
- JSON Server - Mock REST API for development
- RESTful API - Standard HTTP methods for CRUD operations

### Development Tools
- ESLint - Code linting and formatting
- Vite - Fast development and build tooling
- TypeScript - Type checking and IntelliSense

## Project Structure

```
my-todo-app/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── AdvancedFilters.tsx    # Category & priority filters
│   │   ├── ClearCompleted.tsx     # Clear completed todos
│   │   ├── FilterLists.tsx        # Status filters (All/Active/Completed)
│   │   ├── SearchBar.tsx          # Search functionality
│   │   ├── Stats.tsx              # Statistics display
│   │   ├── ThemeToggle.tsx        # Dark/light theme switcher
│   │   ├── TodoForm.tsx           # Add new todo form
│   │   └── TodoLists.tsx          # Todo list display & management
│   ├── contexts/
│   │   └── ThemeContext.tsx       # Theme management
│   ├── data/
│   │   └── data.json              # Sample data
│   ├── App.tsx                    # Main application component
│   ├── App.css                    # Main styles
│   ├── index.css                  # Global styles
│   └── main.tsx                   # Application entry point
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run server       # Start JSON Server (backend)

# Production
npm run build        # Build for production
npm run preview      # Preview production build

# Code Quality
npm run lint         # Run ESLint
```

## Design Features

### Color Scheme
- Light Theme: Clean whites and grays with blue accents
- Dark Theme: Deep blues and grays for comfortable night use
- Semantic Colors: Success (green), warning (orange), error (red)

### Animations
- Fade-in animations for smooth page loads
- Slide-in effects for todo items
- Hover transitions for interactive elements
- Theme transitions for smooth mode switching

### Responsive Design
- Mobile-first approach with breakpoints
- Flexible layouts that adapt to screen sizes
- Touch-friendly buttons and interactions

## Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Make your changes and test thoroughly
4. Commit your changes: `git commit -m 'Add amazing feature'`
5. Push to the branch: `git push origin feature/amazing-feature`
6. Open a Pull Request

### Development Guidelines
- Follow TypeScript best practices
- Write meaningful commit messages
- Test your changes on multiple devices
- Ensure responsive design works properly
- Maintain code quality with ESLint

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- React Team for the amazing framework
- Vite for the lightning-fast build tool
- JSON Server for the simple mock API solution
- Open source community for inspiration and tools

---

Made with React, TypeScript, and modern web technologies
