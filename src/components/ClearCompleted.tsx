interface ClearCompletedProps {
  clearCompleted: () => void;
}
export const ClearCompleted = ({ clearCompleted }: ClearCompletedProps) => {
  return (
    <div>
      <button className="clear-btn" onClick={clearCompleted}>
        🗑️ Clear Completed
      </button>
    </div>
  );
};
