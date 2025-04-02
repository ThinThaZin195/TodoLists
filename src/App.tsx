import { useCallback, useEffect, useState } from "react";
import "./App.css";
import { CheckLists } from "./components/CheckLists";
import { ClearCompleted } from "./components/ClearCompleted";
import { FilterLists } from "./components/FilterLists";
import { TodoForm } from "./components/TodoForm";
import { TodoLists } from "./components/TodoLists";
interface Todo {
  id: string;
  title: string;
  completed: boolean;
}
function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filterTodo, setFilterTodo] = useState<Todo[]>(todos);
  useEffect(() => {
    fetch("http://localhost:3001/todos")
      .then((res) => res.json())
      .then((todos) => {
        setTodos(todos);
        setFilterTodo(todos);
      });
  }, []);
  const filterBy = useCallback(
    (filter: "All" | "Active" | "Completed") => {
      if (filter === "All") {
        setFilterTodo(todos);
      }
      if (filter === "Active") {
        setFilterTodo(todos.filter((t) => !t.completed));
      }
      if (filter === "Completed") {
        setFilterTodo(todos.filter((t) => t.completed));
      }
    },
    [todos]
  );
  // Add a new todo
  const addTodo = (todo: Todo) => {
    fetch("http://localhost:3001/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(todo),
    })
      .then((res) => res.json()) // Get the newly created todo from the server
      .then((newTodo) => {
        setTodos((prevState) => [...prevState, newTodo]);
        // Update client state with the new todo
        alert("You added one task");
      })
      .catch((error) => console.error("Error adding todo:", error));
  };

  const deleteTodo = (todoId: string) => {
    fetch(`http://localhost:3001/todos/${todoId}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (res.ok) {
          // If the deletion was successful, update the client state
          setTodos((prevState) =>
            prevState.filter((todo) => todo.id !== todoId)
          );
        } else {
          console.error("Failed to delete todo with ID:", todoId);
        }
      })
      .catch((error) => console.error("Error deleting todo:", error));
  };
  //Update todo
  const updateTodo = (updatedTodo: Todo) => {
    //sever
    fetch(`http://localhost:3001/todos/${updatedTodo.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedTodo),
    });
    //client
    setTodos((prevState) => {
      return prevState.map((todo) => {
        if (todo.id === updatedTodo.id) {
          return updatedTodo; // Return the updated todo when IDs match
        }
        return todo; // Return the original todo when IDs don't match
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
        <h1 className="app-title">Todo App</h1>
        {/* todo-form */}
        <TodoForm addTodo={addTodo} />
        {/* todo-Lists */}
        <TodoLists
          todos={filterTodo}
          deleteTodo={deleteTodo}
          updateTodo={updateTodo}
        />
        <hr />
        {/* check-Lists */}
        <CheckLists
          remainingCount={remainingCount}
          checkAllTodo={checkAllTodo}
        />
        <hr />

        <div className="btn-container">
          {/* filter-lists */}
          <FilterLists filterBy={filterBy} />
          {/* cleat-Lists */}
          <ClearCompleted clearCompleted={clearCompleted} />
        </div>
      </div>
    </div>
  );
}

export default App;
