import React from 'react'
import homeImage from '../assets/home-bg.jpg';
import { Link } from 'react-router-dom';
export default function Header({ title, subtitle, image }) {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light" id="mainNav">
                <div className="container px-4 px-lg-5">
                    <a className="navbar-brand" href="index.html">Start Bootstrap</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        Menu
                        <i className="fas fa-bars"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ms-auto py-4 py-lg-0">
                            <li className="nav-item"><Link to='/' className="nav-link px-lg-3 py-3 py-lg-4" href="index.html">Home</Link></li>
                            <li className="nav-item"><Link to='/about' className="nav-link px-lg-3 py-3 py-lg-4" href="about.html">About</Link></li>
                            <li className="nav-item"><Link to='/post' className="nav-link px-lg-3 py-3 py-lg-4" href="post.html">Sample Post</Link></li>
                            <li className="nav-item"><Link to='/contract' className="nav-link px-lg-3 py-3 py-lg-4" href="contact.html">Contact</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
            <header className="masthead" style={{ backgroundImage: `url(${image})` }}>
                <div className="container position-relative px-4 px-lg-5">
                    <div className="row gx-4 gx-lg-5 justify-content-center">
                        <div className="col-md-10 col-lg-8 col-xl-7">
                            <div className="site-heading">
                                <h1>{title}</h1>
                                <span className="subheading">{subtitle}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </ >
    )
}
