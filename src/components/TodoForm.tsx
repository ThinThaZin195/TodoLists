import { useState } from "react";
interface Todo {
  id: string;
  title: string;
  completed: boolean;
}
interface TodoFormProps {
  addTodo: (todo: Todo) => void; // Define the type for the addTodo function
}
export const TodoForm = ({ addTodo }: TodoFormProps) => {
  const [title, setTitle] = useState<string>("");
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newTodo = {
      id: Math.floor(Math.random() * 1000000).toString(),
      title,
      completed: false,
    };
    addTodo(newTodo);
    console.log("submitted");
    setTitle("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="What do you need to do?"
          className="input-container"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
      </form>
    </div>
  );
};
