import React, {useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState(items)

  function getSelectedCategory (e){
    const category=e.target.value
    const categoryItems = items.filter((item)=>item.category===category)
    setSelectedCategory(categoryItems)

  }
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={getSelectedCategory}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {selectedCategory.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
