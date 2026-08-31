import {
    FiSearch,
    FiBell,
    FiMoon,
    FiChevronDown
} from "react-icons/fi";

import "./TopNavBar.css";

function TopNavBar() {
    return (
        <header className="top-navbar">

            {/* Left Side */}
            <div className="top-navbar-left">
                <h1 className="page-title">
                    Home Dashboard
                </h1>
            </div>


            {/* Right Side */}
            <div className="top-navbar-right">

                {/* AI Model */}
                <button
                    type="button"
                    className="model-selector"
                    aria-label="Select AI model"
                >
                    <span className="model-status"></span>

                    <span className="model-name">
                        GPT-4o
                    </span>

                    <FiChevronDown className="model-arrow" />
                </button>


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