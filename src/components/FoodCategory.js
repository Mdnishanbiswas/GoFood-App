import React from 'react';

function FoodCategory({ category, foodItems }) {
  return (
    <div>
      <h2>{category.CategoryName}</h2>
      <div className="food-items">
        {foodItems.map(item => (
          <div key={item._id} className="food-item">
            <img src={item.img} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <div className="options">
              {item.options.map((option, index) => (
                <div key={index}>
                  {Object.keys(option).map(key => (
                    <p key={key}>{key}: {option[key]}</p>
                  ))}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FoodCategory;
