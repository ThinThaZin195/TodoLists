import { useState } from "react";

interface Todo {
  id: string;
  title: string;
  completed: boolean;
}

interface TodoListsProps {
  todos: Todo[];
  deleteTodo: (todoId: string) => void;
  updateTodo: (updatedTodo: Todo) => void;
}

export const TodoLists = ({
  todos,
  deleteTodo,
  updateTodo,
}: TodoListsProps) => {
  // State to track which todo is being edited
  const [editingTodoId, setEditingTodoId] = useState<string | null>(null);
  // State to store the updated title while editing
  const [editTitle, setEditTitle] = useState<string>("");

  const updateTodoHandler = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingTodoId !== null) {
      const updatedTodo = {
        id: editingTodoId,
        title: editTitle,
        completed:
          todos.find((todo) => todo.id === editingTodoId)?.completed || false,
      };
      updateTodo(updatedTodo);
    }

    setEditingTodoId(null);
    setEditTitle(""); //
  };

  const handleEdit = (todoId: string, title: string) => {
    setEditingTodoId(todoId); // Set the todo being edited
    setEditTitle(title); // Set the title as the initial edit state
  };
  const toggleTodoCompletion = (todo: Todo) => {
    updateTodo({ ...todo, completed: !todo.completed });
  };

  return (
    <div>
      <div>
        <ul className="todo-list-container">
          {todos.map((todo) => (
            <li className="list-item-container" key={todo.id}>
              <div className="list-items">
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => toggleTodoCompletion(todo)}
                />

                {/* If the todo is not being edited, show the title */}
                {editingTodoId !== todo.id ? (
                  <span
                    className={`list-item-label ${
                      todo.completed ? "line-through" : ""
                    }`}
                    onDoubleClick={() => handleEdit(todo.id, todo.title)} // Trigger edit mode for the selected todo
                  >
                    {todo.title}
                  </span>
                ) : (
                  // If the todo is being edited, show an input box with the current title
                  <form onSubmit={updateTodoHandler}>
                    <input
                      type="text"
                      value={editTitle} // The value of the input is the current todo's title
                      onChange={(e) => setEditTitle(e.target.value)} // Update the title while typing
                    />
                  </form>
                )}

                
              </div>
              <button onClick={() => deleteTodo(todo.id)}>delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
