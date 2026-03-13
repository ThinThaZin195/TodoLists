interface AdvancedFiltersProps {
  categoryFilter: string;
  setCategoryFilter: (category: string) => void;
  priorityFilter: string;
  setPriorityFilter: (priority: string) => void;
}

export const AdvancedFilters = ({
  categoryFilter,
  setCategoryFilter,
  priorityFilter,
  setPriorityFilter
}: AdvancedFiltersProps) => {
  const categories = ["All", "Work", "Personal", "Shopping", "Health", "Education"];
  const priorities = ["All", "low", "medium", "high"];

  return (
    <div className="advanced-filters">
      <div className="filter-group">
        <label>Category:</label>
        <select
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
          className="filter-select"
        >
          {categories.map(cat => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>

      <div className="filter-group">
        <label>Priority:</label>
        <select
          value={priorityFilter}
          onChange={(e) => setPriorityFilter(e.target.value)}
          className="filter-select"
        >
          {priorities.map(pri => (
            <option key={pri} value={pri}>{pri}</option>
          ))}
        </select>
      </div>
    </div>
  );
};