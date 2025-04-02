import { useEffect, useState } from "react";
interface filterByProps{
  filterBy: (filter: "All" | "Active" | "Completed") => void;
}

export const FilterLists = ({filterBy}:filterByProps) => {
  const [filter,setFilter] = useState<"All" | "Active" | "Completed">("All")
  useEffect(()=>{
    filterBy(filter)
  },[filter,filterBy])
  return (
    <div className="filter-container">
      <button className={`button filter-button ${filter === "All" ?'filter-active':''}`} onClick={()=>setFilter("All")}>All</button>
      <button className={`button filter-button ${filter === "Active" ?'filter-active':''}`} onClick={()=>setFilter("Active")}>Active</button>
      <button className={`button filter-button ${filter === "Completed" ?'filter-active':''}`} onClick={()=>setFilter("Completed")}>Completed</button>
    </div>
  );
};
