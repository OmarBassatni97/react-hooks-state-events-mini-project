import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
const [tasks, setTasks] = useState(TASKS)
const [details, setDetails] = useState('')
const [category,setCategory] = useState('')

const formSubmit = () => {
const newTask ={
  text:details,
  category:category
}
setTasks([...tasks , newTask])
}

  const filterByCategory = (e) => {
   const filteredTasks = TASKS.filter((task) => {
    if(e.target.value === 'All') 
    return true
    else return task.category === e.target.value
     })
    setTasks(filteredTasks)
  }
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} filterByCategory={filterByCategory}/>
      <NewTaskForm categories={CATEGORIES} onFormSubmit={formSubmit} details={details} category={category} setCategory={setCategory} setDetails={setDetails}/>
      <TaskList tasks={tasks} />
    </div>
  );
}

export default App;
