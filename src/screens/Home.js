import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Card from '../components/Card';
import Carousal from '../components/Carousal'; // Correct import

export default function Home() {
    const [foodCat, setFoodCat] = useState([]);
    const [foodItem, setFoodItem] = useState([]);

    const loadData = async () => {
        let response = await fetch("http://localhost:5000/api/foodData", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            }
        });

        response = await response.json();
        setFoodCat(response[0]);
        setFoodItem(response[1]);
    }

    useEffect(() => {
        loadData();
    }, []);

    return (
        <div>
            <div><Navbar /></div>
            <div><Carousal /></div>
            <div className='container'>
                {
                    foodCat.length > 0
                        ? foodCat.map((data, index) => (
                            <div key={index} className='mb-3'>
                                <div className="fs-3 m-3">
                                    {data.CategoryName}
                                </div>
                                <hr />
                                <div className="row">
                                    {
                                        foodItem.length > 0
                                            ? foodItem.filter((item) => item.CategoryName === data.CategoryName)
                                                .map(filteredItem => (
                                                    <div key={filteredItem._id} className="col-12 col-md-6 col-lg-3 mb-3">
                                                        <Card
                                                            name={filteredItem.name}
                                                            img={filteredItem.img}
                                                            options={filteredItem.options}
                                                            description={filteredItem.description}
                                                        />
                                                    </div>
                                                ))
                                            : "No items available"
                                    }
                                </div>
                            </div>
                        ))
                        : "Loading..."
                }
            </div>
            <div className='m-3'><Footer /></div>
        </div>
    );
}
