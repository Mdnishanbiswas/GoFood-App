import React from 'react';

export default function Carousel() {
    return (
        <div className="carousel-wrapper" style={{ maxHeight: '400px', overflow: 'hidden' }}>
            <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?fit=crop&w=1400&q=80" className="d-block w-100" style={{ filter: "brightness(50%)", maxHeight: '400px', objectFit: 'cover' }} alt="Healthy Salad" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?fit=crop&w=1400&q=80" className="d-block w-100" style={{ filter: "brightness(50%)", maxHeight: '400px', objectFit: 'cover' }} alt="Burger" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?fit=crop&w=1400&q=80" className="d-block w-100" style={{ filter: "brightness(50%)", maxHeight: '400px', objectFit: 'cover' }} alt="Pasta" />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
}
