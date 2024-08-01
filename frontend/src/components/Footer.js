import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

export default function Footer() {
    return (
        <div className='bg-dark text-light'>
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                <div className="col-md-4 d-flex align-items-center text-center">
                    <Link to="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
                    </Link>
                    <span className="text-muted">© 2024 GoFood</span>
                </div>

                <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                    <li className="ms-3"><a className="text-muted" href="https://facebook.com"><FaFacebook size={30} /></a></li>
                    <li className="ms-3"><a className="text-muted" href="https://twitter.com"><FaTwitter size={30} /></a></li>
                    <li className="ms-3"><a className="text-muted" href="https://instagram.com"><FaInstagram size={30} /></a></li>
                </ul>
            </footer>
        </div>
    );
}
