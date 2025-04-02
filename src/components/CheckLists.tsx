interface CheckListsProps {
  remainingCount: number;
  checkAllTodo: () => void;
}
export const CheckLists = ({
  remainingCount,
  checkAllTodo,
}: CheckListsProps) => {
  return (
    <div className="check-container">
      <button className="check-btn" onClick={checkAllTodo}>
        Check All
      </button>
      <p className="reamin-display">
        {remainingCount} item{remainingCount > 1 ? "s" : ""} remaining
      </p>
    </div>
  );
};
