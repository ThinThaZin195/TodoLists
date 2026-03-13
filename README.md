# Todo App

A modern, responsive Todo application built with React, TypeScript, and Vite. Features a beautiful gradient UI with full CRUD operations, filtering, and local persistence via JSON Server.

## Features

- ✅ Add new todos
- ✅ Mark todos as complete/incomplete
- ✅ Edit todos by double-clicking
- ✅ Delete individual todos
- ✅ Check all todos at once
- ✅ Clear completed todos
- ✅ Filter by All/Active/Completed
- ✅ Responsive design
- ✅ Modern gradient UI with smooth animations

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

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
This will start the mock API server on `http://localhost:3001`

4. In a new terminal, start the development server:
```bash
npm run dev
```
This will start the React app on `http://localhost:5173`

### Usage

- **Add Todo**: Type in the input field and click the + button or press Enter
- **Complete Todo**: Click the checkbox next to a todo
- **Edit Todo**: Double-click on the todo text to edit it
- **Delete Todo**: Click the trash icon next to a todo
- **Check All**: Click "Check All" to mark all todos as complete
- **Filter**: Use the All/Active/Completed buttons to filter todos
- **Clear Completed**: Click "Clear Completed" to remove all completed todos

## Tech Stack

- **Frontend**: React 19, TypeScript, Vite
- **Backend**: JSON Server (for development)
- **Styling**: CSS with modern design patterns
- **Icons**: Unicode emojis for a clean, lightweight approach

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run server` - Start JSON Server
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── components/
│   ├── CheckLists.tsx
│   ├── ClearCompleted.tsx
│   ├── FilterLists.tsx
│   ├── TodoForm.tsx
│   └── TodoLists.tsx
├── data/
│   └── data.json
├── App.tsx
├── App.css
├── index.css
└── main.tsx
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```
