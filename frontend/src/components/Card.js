import React from 'react';

export default function Card({ foodName, item, options, ImgSrc }) {
    return (
        <div className="card mb-3 bg-dark text-white" style={{ maxWidth: "18rem" }}>
            <img src={ImgSrc} className="card-img-top" alt={foodName} style={{ maxHeight: "200px", objectFit: "cover" }} />
            <div className="card-body">
                <h5 className="card-title">{foodName}</h5>
                <p className="card-text">{item.description}</p>
                <div className='d-flex justify-content-between align-items-center'>
                    <select className='form-select'>
                        {Array.from(Array(6), (e, i) => (
                            <option key={i + 1} value={i + 1}> {i + 1} </option>
                        ))}
                    </select>
                    <select className='form-select'>
                        <option value="half">Half</option>
                        <option value="full">Full</option>
                    </select>
                </div>
                <div className='mt-3'>
                    <h6 className='d-inline'>Total Price: </h6>
                    <span>{options.price}</span>
                </div>
            </div>
        </div>
    );
}
