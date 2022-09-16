import React, { useState } from "react";

function CategoryFilter({ categories, filterByCategory }) {
  const [isClicked, setisClicked] = useState('')
  const handleClick = (e) =>{
   setisClicked(e.target.value)
   filterByCategory(e)
  }
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map((category, i) => {
        return (
          <button className={isClicked === category ? 'selected' : ''} value={category} onClick={handleClick} key={i}>{category}</button>
        )
      })}
    </div>
  );
  
}

export default CategoryFilter;
