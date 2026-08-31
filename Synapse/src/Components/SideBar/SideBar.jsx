import './SideBar.css';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
    FiHome,
    FiMessageSquare,
    FiClock,
    FiStar,
    FiFileText,
    FiEdit3,
    FiSettings,
    FiPlusCircle
} from 'react-icons/fi';

function Sidebar() {
    const [isOpen, setIsOpen] = useState(true);

    const navItems = [
        { label: 'Home', path: '/home', icon: <FiHome /> },
        { label: 'Chat', path: '/chat', icon: <FiMessageSquare /> },
        { label: 'History', path: '/history', icon: <FiClock /> },
        { label: 'Favorites', path: '/favorites', icon: <FiStar /> },
        { label: 'Documents', path: '/documents', icon: <FiFileText /> },
        { label: 'Notes', path: '/notes', icon: <FiEdit3 /> },
        { label: 'Settings', path: '/settings', icon: <FiSettings /> },
    ];

    return (
        <aside className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
            <div
                className="sidebar-header"
                onClick={() => setIsOpen(!isOpen)}
                role="button"
                tabIndex={0}
            >
                <img src="/Images/logo.png" alt="Synapse AI Logo" className="brand-logo" />
                <h2 className="brand-title">Synapse AI</h2>
            </div>

            <div className="new-chat-wrapper">
                <button className="new-chat-btn" title="New Chat">
                    <FiPlusCircle className="btn-icon" />
                    <span className="btn-label">New Chat</span>
                </button>
            </div>

            <nav className="nav-menu">
                <ul>
                    {navItems.map((item) => (
                        <li key={item.path} className="nav-item">
                            <NavLink
                                to={item.path}
                                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                                title={item.label}
                            >
                                <span className="nav-icon">{item.icon}</span>
                                <span className="nav-label">{item.label}</span>
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
        </aside>
    );
}

export default Sidebar;