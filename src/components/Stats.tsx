interface StatsProps {
  total: number;
  completed: number;
  remaining: number;
}

export const Stats = ({ total, completed, remaining }: StatsProps) => {
  const completionRate = total > 0 ? Math.round((completed / total) * 100) : 0;

  return (
    <div className="stats-container">
      <div className="stat-item">
        <div className="stat-icon">📊</div>
        <span className="stat-label">Total</span>
        <span className="stat-value">{total}</span>
      </div>
      <div className="stat-item">
        <div className="stat-icon">✅</div>
        <span className="stat-label">Completed</span>
        <span className="stat-value completed">{completed}</span>
      </div>
      <div className="stat-item">
        <div className="stat-icon">⏳</div>
        <span className="stat-label">Remaining</span>
        <span className="stat-value remaining">{remaining}</span>
      </div>
      <div className="stat-item">
        <div className="stat-icon">📈</div>
        <span className="stat-label">Progress</span>
        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: `${completionRate}%` }}
          ></div>
        </div>
        <span className="stat-value">{completionRate}%</span>
      </div>
    </div>
  );
};