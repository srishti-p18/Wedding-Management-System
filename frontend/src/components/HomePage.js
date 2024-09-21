import React, { useState } from "react";
import "./HomePage.css";  // Create corresponding CSS
import logo from "./logo.png";
import eventsImg from "./events.jpg";  // Add corresponding images
import cateringImg from "./catering.jpg";
import destinationsImg from "./destinations.jpg";
import weddingWearImg from "./weddingWear.jpg";
import weddingBgImg from "./wedding-background.jpg";  // Background image for right half

const HomePage = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    // Toggle the dropdown
    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };
    return (
        <div className="homepage">
            <nav>
                <img src={logo} alt="EternalVows Logo" className="logo" />
                <ul>
                    <li className="dropdown">
                        <a href="#">Vendors</a>
                        <div className="dropdown-content">
                            <div className="dropdown-grid">
                                <a href="#">Catering</a>
                                <a href="#">Wedding Cards</a>
                                <a href="#">Photographers</a>
                                <a href="#">Destinations</a>
                                <a href="#">Planners & Decorators</a>
                                <a href="#">Music & Dance</a>
                                <a href="#">Gifts</a>
                                <a href="#">Wedding Wear</a>
                                <a href="#">Trip Voucher</a>
                                <a href="#">Mehendi</a>
                                <a href="#">Pandits</a>
                            </div>
                        </div>
                    </li>
                    <li><a href="#">Venue</a></li>
                    <li><a href="#">Real Weddings</a></li>
                    <li><a href="#">E-Invites</a></li>
                    <li><a href="#">Contact Us</a></li>
                    <li><a href="#" className="login-btn">Log In</a></li>
                </ul>
            </nav>

            <div className="content">
                <div className="left-half">
                    <h1>When your <span className="highlight-heart">❤️ <br />Dream Wedding</span> comes true</h1>
                    <p>Once in a while,<br /> right in the middle of an ordinary life,<br /> love gives us a fairy tale.</p>
                    
                    <div className="search-box">
                        <input type="text" placeholder="Search for Vendors" />
                        <button><i className="fas fa-search"></i></button>
                    </div>
                    
                    <div className="services">
                        <div className="service">
                            <div className="service-text">
                                <a href="#">Events</a>
                            </div>
                            <div className="service-image" style={{ backgroundImage: `url(${eventsImg})` }}></div>
                        </div>
                        <div className="service">
                            <div className="service-text">
                                <a href="#">Catering</a>
                            </div>
                            <div className="service-image" style={{ backgroundImage: `url(${cateringImg})` }}></div>
                        </div>
                        <div className="service">
                            <div className="service-text">
                                <a href="#">Destinations</a>
                            </div>
                            <div className="service-image" style={{ backgroundImage: `url(${destinationsImg})` }}></div>
                        </div>
                        <div className="service">
                            <div className="service-text">
                                <a href="#">Wedding Wear</a>
                            </div>
                            <div className="service-image" style={{ backgroundImage: `url(${weddingWearImg})` }}></div>
                        </div>
                    </div>
                </div>

                <div className="right-half" style={{ backgroundImage: `url(${weddingBgImg})` }}>
                    {/* Empty right-half just to display the wedding image */}
                </div>
            </div>

            <footer>
                <p>Developed by: Srishti Patil, Srishti Pagaria, Sakshi Patil</p>
                <p>2024 | &copy; All rights reserved</p>
            </footer>
        </div>
    );
};

export default HomePage;
