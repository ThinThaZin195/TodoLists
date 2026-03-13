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

interface TodoFormProps {
  addTodo: (todo: Todo) => void;
}

export const TodoForm = ({ addTodo }: TodoFormProps) => {
  const [title, setTitle] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [priority, setPriority] = useState<'low' | 'medium' | 'high'>('medium');
  const [dueDate, setDueDate] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;

    const newTodo: Todo = {
      id: Math.floor(Math.random() * 1000000).toString(),
      title: title.trim(),
      completed: false,
      category: category || undefined,
      priority,
      dueDate: dueDate || undefined,
      createdAt: new Date().toISOString(),
    };
    addTodo(newTodo);
    // Reset form
    setTitle("");
    setCategory("");
    setPriority('medium');
    setDueDate("");
  };

  return (
    <div className="todo-form">
      <form onSubmit={handleSubmit} className="todo-form">
        <div className="form-group">
          <input
            type="text"
            placeholder="What do you need to do?"
            className="input-container"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            required
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="form-select"
            >
              <option value="">Select Category</option>
              <option value="Work">Work</option>
              <option value="Personal">Personal</option>
              <option value="Shopping">Shopping</option>
              <option value="Health">Health</option>
              <option value="Education">Education</option>
            </select>
          </div>

          <div className="form-group">
            <select
              value={priority}
              onChange={(e) => setPriority(e.target.value as 'low' | 'medium' | 'high')}
              className="form-select"
            >
              <option value="low">Low Priority</option>
              <option value="medium">Medium Priority</option>
              <option value="high">High Priority</option>
            </select>
          </div>

          <div className="form-group">
            <input
              type="date"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
              className="form-input"
              min={new Date().toISOString().split('T')[0]}
            />
          </div>
        </div>

        <button type="submit" className="add-btn" disabled={!title.trim()}>
          ➕ Add Todo
        </button>
      </form>
    </div>
  );
};
