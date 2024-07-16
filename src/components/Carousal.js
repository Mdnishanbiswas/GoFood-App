import React from 'react';

export default function Carousel() {
    return (
        <div className="carousel-wrapper">
            <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://cdn.pixabay.com/photo/2019/11/04/12/16/rice-4601049__340.jpg" className="d-block w-100" style={{ filter: "brightness(30%)" }} alt="Rice" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://cdn.pixabay.com/photo/2019/11/04/12/16/pizza-4601049__340.jpg" className="d-block w-100" style={{ filter: "brightness(30%)" }} alt="Pizza" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://cdn.pixabay.com/photo/2019/11/04/12/16/rice-4601049__340.jpg" className="d-block w-100" style={{ filter: "brightness(30%)" }} alt="Sea" />
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
