import React from "react";

function NewTaskForm({ categories, details, category, onFormSubmit, setDetails, setCategory }) {
  const handleSubmit = (e) => {
    e.preventDefault()
onFormSubmit()
  }
  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" value={details} onChange={(e) =>setDetails(e.target.value)} />
      </label>
      <label>
        Category
        <select name="category" value={category} onChange = {(e) => setCategory(e.target.value)}>
          {categories.filter(category => category !== 'All').map((category,i) => {
            return(
              <option key={i} value={category}>{category}</option>
            )
          })}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
