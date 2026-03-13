import { useState } from "react";

interface Todo {
  id: string;
  title: string;
  completed: boolean;
  category?: string;
  priority?: 'low' | 'medium' | 'high';
  dueDate?: string;
  createdAt: string;
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
      const originalTodo = todos.find((todo) => todo.id === editingTodoId);
      const updatedTodo = {
        ...originalTodo!,
        title: editTitle,
      };
      updateTodo(updatedTodo);
    }

    setEditingTodoId(null);
    setEditTitle("");
  };

  const handleEdit = (todoId: string, title: string) => {
    setEditingTodoId(todoId);
    setEditTitle(title);
  };

  const toggleTodoCompletion = (todo: Todo) => {
    updateTodo({ ...todo, completed: !todo.completed });
  };

  const getPriorityColor = (priority?: string) => {
    switch (priority) {
      case 'high': return '#ff6b6b';
      case 'medium': return '#ffa726';
      case 'low': return '#66bb6a';
      default: return '#666';
    }
  };

  const formatDate = (dateString?: string) => {
    if (!dateString) return '';
    return new Date(dateString).toLocaleDateString();
  };

  const isOverdue = (dueDate?: string) => {
    if (!dueDate) return false;
    return new Date(dueDate) < new Date() && !todos.find(t => t.dueDate === dueDate)?.completed;
  };

  return (
    <div>
      <div>
        <ul className="todo-list-container">
          {todos.map((todo) => (
            <li className={`list-item-container ${isOverdue(todo.dueDate) ? 'overdue' : ''}`} key={todo.id}>
              <div className="list-items">
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => toggleTodoCompletion(todo)}
                />

                <div className="todo-content">
                  {editingTodoId !== todo.id ? (
                    <div>
                      <span
                        className={`list-item-label ${
                          todo.completed ? "line-through" : ""
                        }`}
                        onDoubleClick={() => handleEdit(todo.id, todo.title)}
                      >
                        {todo.title}
                      </span>
                      <div className="todo-meta">
                        {todo.category && (
                          <span className="todo-category">{todo.category}</span>
                        )}
                        {todo.priority && (
                          <span
                            className="todo-priority"
                            style={{ color: getPriorityColor(todo.priority) }}
                          >
                            {todo.priority.toUpperCase()}
                          </span>
                        )}
                        {todo.dueDate && (
                          <span className={`todo-due-date ${isOverdue(todo.dueDate) ? 'overdue-text' : ''}`}>
                            📅 {formatDate(todo.dueDate)}
                          </span>
                        )}
                      </div>
                    </div>
                  ) : (
                    <form onSubmit={updateTodoHandler}>
                      <input
                        type="text"
                        className="edit-input"
                        value={editTitle}
                        onChange={(e) => setEditTitle(e.target.value)}
                        autoFocus
                      />
                    </form>
                  )}
                </div>
              </div>
              <button className="delete-btn" onClick={() => deleteTodo(todo.id)}>🗑️</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
