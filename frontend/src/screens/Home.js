import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";
import Carousal from "../components/Carousal";

export default function Home() {
  const [foodCat, setFoodCat] = useState([]);
  const [foodItem, setFoodItem] = useState([]);
  const [search, setSearch] = useState("");

  const loadData = async () => {
    try {
      let response = await fetch(`${process.env.REACT_APP_API_URL}/api/foodData`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      response = await response.json();
      setFoodCat(response[1]); // food_categories
      setFoodItem(response[0]); // food_items
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div style={{ backgroundColor: "#212529", minHeight: "100vh", paddingTop: "60px" }}>
      <Navbar />
      <Carousal />
      <div className="container mt-3">
        <input
          type="text"
          className="form-control mb-3"
          placeholder="Search food items..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ backgroundColor: "#343a40", color: "white" }}
        />
        {foodCat.length > 0 &&
          foodCat.map((category) => (
            <div key={category._id} className="mb-4">
              <h3 className="text-white">{category.CategoryName}</h3>
              <hr style={{ height: "4px", backgroundImage: "linear-gradient(to right, rgb(0, 255, 137), rgb(0, 0, 0))" }} />
              <div className="row row-cols-1 row-cols-md-3 g-4">
                {foodItem.length > 0 &&
                  foodItem
                    .filter((item) => item.CategoryName === category.CategoryName && item.name.toLowerCase().includes(search.toLowerCase()))
                    .map((filteredItem) => (
                      <div key={filteredItem._id} className="col">
                        <Card
                          foodName={filteredItem.name}
                          item={filteredItem}
                          options={filteredItem.options[0]}
                          ImgSrc={filteredItem.img}
                        />
                      </div>
                    ))}
              </div>
            </div>
          ))}
        {foodCat.length === 0 && <div className="text-white">Loading...</div>}
      </div>
      <Footer />
    </div>
  );
}
