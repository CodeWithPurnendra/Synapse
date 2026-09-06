import {
    FiSearch,
    FiBell,
    FiMoon,
} from "react-icons/fi";

import { useLocation } from "react-router-dom";

import "./TopNavBar.css";

function TopNavBar() {
    const location = useLocation();

    const pageTitles = {
        "/home": "Home Dashboard",
        "/chat": "AI Chat",
        "/history": "Chat History",
        "/favorites": "Favorites",
        "/documents": "Documents",
        "/notes": "Notes",
        "/settings": "Settings",
    };

    const pageTitle =
        pageTitles[location.pathname] || "Synapse AI";

    return (
        <header className="top-navbar">

            {/* Left Side */}

            <div className="top-navbar-left">
                <h1 className="page-title">
                    {pageTitle}
                </h1>
            </div>


            {/* Right Side */}

            <div className="top-navbar-right">

                {/* Search */}

                <button
                    type="button"
                    className="top-nav-icon-btn"
                    aria-label="Search"
                    title="Search"
                >
                    <FiSearch />
                </button>


                {/* Notifications */}

                <button
                    type="button"
                    className="top-nav-icon-btn"
                    aria-label="Notifications"
                    title="Notifications"
                >
                    <FiBell />
                </button>


                {/* Theme */}

                <button
                    type="button"
                    className="top-nav-icon-btn"
                    aria-label="Toggle theme"
                    title="Toggle theme"
                >
                    <FiMoon />
                </button>


                {/* Profile */}

                <button
                    type="button"
                    className="profile-button"
                    aria-label="Open profile menu"
                >
                    <img
                        src="/Images/profile.png"
                        alt="User profile"
                        className="profile-image"
                    />
                </button>

            </div>

        </header>
    );
}

export default TopNavBar;