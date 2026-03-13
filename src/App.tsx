import { useCallback, useEffect, useState } from "react";
import "./App.css";
import { ClearCompleted } from "./components/ClearCompleted";
import { FilterLists } from "./components/FilterLists";
import { TodoForm } from "./components/TodoForm";
import { TodoLists } from "./components/TodoLists";
import { ThemeToggle } from "./components/ThemeToggle";
import { SearchBar } from "./components/SearchBar";
import { AdvancedFilters } from "./components/AdvancedFilters";
import { Stats } from "./components/Stats";
interface Todo {
  id: string;
  title: string;
  completed: boolean;
  category?: string;
  priority?: 'low' | 'medium' | 'high';
  dueDate?: string;
  createdAt: string;
}
function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filterTodo, setFilterTodo] = useState<Todo[]>(todos);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [categoryFilter, setCategoryFilter] = useState<string>("All");
  const [priorityFilter, setPriorityFilter] = useState<string>("All");
  const [statusFilter, setStatusFilter] = useState<"All" | "Active" | "Completed">("All");

  useEffect(() => {
    // Simplified for now
  }, []);

  useEffect(() => {
    let filtered = todos;

    // Filter by status (All/Active/Completed)
    if (statusFilter === "Active") {
      filtered = filtered.filter(todo => !todo.completed);
    } else if (statusFilter === "Completed") {
      filtered = filtered.filter(todo => todo.completed);
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(todo =>
        todo.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by category
    if (categoryFilter !== "All") {
      filtered = filtered.filter(todo => todo.category === categoryFilter);
    }

    // Filter by priority
    if (priorityFilter !== "All") {
      filtered = filtered.filter(todo => todo.priority === priorityFilter);
    }

    setFilterTodo(filtered);
  }, [todos, searchTerm, categoryFilter, priorityFilter, statusFilter]);

  const filterBy = useCallback(
    (filter: "All" | "Active" | "Completed") => {
      setStatusFilter(filter);
    },
    []
  );
  // Add a new todo
  const addTodo = (todo: Todo) => {
    const newTodo = { ...todo, createdAt: new Date().toISOString() };
    fetch("http://localhost:3001/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTodo),
    })
      .then((res) => res.json())
      .then((savedTodo) => {
        setTodos((prevState) => [...prevState, savedTodo]);
        localStorage.setItem('todos', JSON.stringify([...todos, savedTodo]));
      })
      .catch(() => {
        // Fallback to localStorage
        const updatedTodos = [...todos, newTodo];
        setTodos(updatedTodos);
        localStorage.setItem('todos', JSON.stringify(updatedTodos));
      });
  };

  const deleteTodo = (todoId: string) => {
    fetch(`http://localhost:3001/todos/${todoId}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (res.ok) {
          setTodos((prevState) =>
            prevState.filter((todo) => todo.id !== todoId)
          );
        } else {
          console.error("Failed to delete todo with ID:", todoId);
        }
      })
      .catch(() => {
        // Fallback to localStorage
        const updatedTodos = todos.filter((todo) => todo.id !== todoId);
        setTodos(updatedTodos);
        localStorage.setItem('todos', JSON.stringify(updatedTodos));
      });
  };
  //Update todo
  const updateTodo = (updatedTodo: Todo) => {
    fetch(`http://localhost:3001/todos/${updatedTodo.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedTodo),
    })
    .then((res) => res.json())
    .then(() => {
      setTodos((prevState) => {
        const updated = prevState.map((todo) => {
          if (todo.id === updatedTodo.id) {
            return updatedTodo;
          }
          return todo;
        });
        localStorage.setItem('todos', JSON.stringify(updated));
        return updated;
      });
    })
    .catch(() => {
      // Fallback to localStorage
      setTodos((prevState) => {
        const updated = prevState.map((todo) => {
          if (todo.id === updatedTodo.id) {
            return updatedTodo;
          }
          return todo;
        });
        localStorage.setItem('todos', JSON.stringify(updated));
        return updated;
      });
    });
  };
  const remainingCount = todos.filter((t) => !t.completed).length;
  const checkAllTodo = () => {
    //server
    todos.forEach((t) => {
      t.completed = true;
      updateTodo(t);
    });
    //client
    setTodos((prevState) => {
      return prevState.map((t) => {
        return { ...t, completed: true };
      });
    });
  };
  const clearCompleted = () => {
    //server
    todos.forEach((t) => {
      if (t.completed) {
        deleteTodo(t.id);
      }
    });
    //client
    setTodos((prevState) => {
      return prevState.filter((t) => !t.completed);
    });
  };

  return (
    <div className="app-container">
      <div className="todo-container">
        <div className="header">
          <h1 className="app-title">Todo App</h1>
          <ThemeToggle />
        </div>

        <TodoForm addTodo={addTodo} />

        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

        <AdvancedFilters
          categoryFilter={categoryFilter}
          setCategoryFilter={setCategoryFilter}
          priorityFilter={priorityFilter}
          setPriorityFilter={setPriorityFilter}
        />

        <FilterLists filterBy={filterBy} />

        <Stats
          total={todos.length}
          completed={todos.filter(t => t.completed).length}
          remaining={todos.filter(t => !t.completed).length}
        />

        <TodoLists
          todos={filterTodo}
          deleteTodo={deleteTodo}
          updateTodo={updateTodo}
        />

        <div className="btn-container">
          <ClearCompleted clearCompleted={clearCompleted} />
          <div className="check-container">
            <p className="reamin-display">
              {remainingCount} item{remainingCount !== 1 ? 's' : ''} remaining
            </p>
            <button className="check-btn" onClick={checkAllTodo}>
              Check All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
