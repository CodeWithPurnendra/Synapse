import { useState } from "react";

import {
    FiSearch,
    FiFilter,
    FiMoreHorizontal,
    FiStar,
    FiTrash2,
    FiEdit3,
    FiMessageSquare,
    FiClock,
    FiChevronDown,
    FiX,
} from "react-icons/fi";

import "./History.css";

function History() {
    const [search, setSearch] = useState("");
    const [activeMenu, setActiveMenu] = useState(null);
    const [filterOpen, setFilterOpen] = useState(false);
    const [activeFilter, setActiveFilter] = useState("All");

    const [conversations, setConversations] = useState([
        {
            id: 1,
            title: "React useEffect Deep Dive",
            preview:
                "Understanding useEffect dependencies, cleanup functions and common patterns.",
            date: "Today",
            time: "2 hours ago",
            model: "GPT-4o",
            modelType: "green",
            messages: 18,
        },
        {
            id: 2,
            title: "Marketing Strategy Q4",
            preview:
                "Discussed marketing campaigns, audience targeting and content strategy.",
            date: "Yesterday",
            time: "Yesterday",
            model: "Claude 3.5",
            modelType: "orange",
            messages: 24,
        },
        {
            id: 3,
            title: "Python Data Pipeline",
            preview:
                "Building a Python pipeline for processing and transforming large datasets.",
            date: "Monday",
            time: "3 days ago",
            model: "GPT-4o",
            modelType: "green",
            messages: 31,
        },
        {
            id: 4,
            title: "Database Schema Design",
            preview:
                "Planning tables, relationships and indexes for a PostgreSQL application.",
            date: "Sunday",
            time: "4 days ago",
            model: "GPT-4o",
            modelType: "green",
            messages: 15,
        },
        {
            id: 5,
            title: "Node.js Backend Architecture",
            preview:
                "Discussed controllers, services, routes and database architecture.",
            date: "Saturday",
            time: "5 days ago",
            model: "Gemini",
            modelType: "blue",
            messages: 22,
        },
        {
            id: 6,
            title: "Portfolio Website Improvements",
            preview:
                "Improving portfolio UI, accessibility, responsive design and SEO.",
            date: "Friday",
            time: "6 days ago",
            model: "GPT-4o",
            modelType: "green",
            messages: 12,
        },
    ]);

    const filters = [
        "All",
        "Today",
        "This Week",
        "GPT-4o",
        "Claude 3.5",
        "Gemini",
    ];

    const filteredConversations = conversations.filter((conversation) => {
        const matchesSearch =
            conversation.title
                .toLowerCase()
                .includes(search.toLowerCase()) ||
            conversation.preview
                .toLowerCase()
                .includes(search.toLowerCase());

        if (activeFilter === "All") {
            return matchesSearch;
        }

        if (activeFilter === "Today") {
            return matchesSearch && conversation.date === "Today";
        }

        if (activeFilter === "This Week") {
            return matchesSearch;
        }

        return matchesSearch && conversation.model === activeFilter;
    });

    const handleDelete = (id) => {
        setConversations((current) =>
            current.filter((conversation) => conversation.id !== id)
        );

        setActiveMenu(null);
    };

    const handleStar = (id) => {
        console.log("Star conversation:", id);
        setActiveMenu(null);
    };

    const handleRename = (id) => {
        console.log("Rename conversation:", id);
        setActiveMenu(null);
    };

    return (
        <main className="history-page">

            {/* =========================================
                HEADER
            ========================================= */}

            <section className="history-header">

                <div className="history-heading">

                    <div className="history-title-row">
                        <div className="history-title-icon">
                            <FiClock />
                        </div>

                        <div>
                            <h1>Conversation History</h1>

                            <p>
                                Browse and manage your previous
                                conversations.
                            </p>
                        </div>
                    </div>

                </div>


                <div className="history-stats">

                    <div className="history-stat">
                        <strong>{conversations.length}</strong>
                        <span>Conversations</span>
                    </div>

                    <div className="history-stat">
                        <strong>128</strong>
                        <span>Messages</span>
                    </div>

                </div>

            </section>


            {/* =========================================
                SEARCH + FILTER
            ========================================= */}

            <section className="history-controls">

                <div className="history-search">

                    <FiSearch />

                    <input
                        type="text"
                        placeholder="Search conversations..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        aria-label="Search conversations"
                    />

                    {search && (
                        <button
                            type="button"
                            className="search-clear"
                            onClick={() => setSearch("")}
                            aria-label="Clear search"
                        >
                            <FiX />
                        </button>
                    )}

                </div>


                <div className="history-filter">

                    <button
                        type="button"
                        className={`filter-button ${filterOpen ? "open" : ""
                            }`}
                        onClick={() =>
                            setFilterOpen(!filterOpen)
                        }
                        aria-expanded={filterOpen}
                    >
                        <FiFilter />

                        <span>
                            {activeFilter}
                        </span>

                        <FiChevronDown
                            className={
                                filterOpen
                                    ? "filter-chevron rotate"
                                    : "filter-chevron"
                            }
                        />
                    </button>


                    {filterOpen && (
                        <div className="filter-menu">

                            {filters.map((filter) => (
                                <button
                                    key={filter}
                                    type="button"
                                    className={
                                        activeFilter === filter
                                            ? "filter-option active"
                                            : "filter-option"
                                    }
                                    onClick={() => {
                                        setActiveFilter(filter);
                                        setFilterOpen(false);
                                    }}
                                >
                                    {filter}
                                </button>
                            ))}

                        </div>
                    )}

                </div>

            </section>


            {/* =========================================
                HISTORY LIST
            ========================================= */}

            <section className="history-section">

                <div className="history-section-header">

                    <div>
                        <span className="history-section-label">
                            RECENT CONVERSATIONS
                        </span>

                        <span className="history-count">
                            {filteredConversations.length} conversations
                        </span>
                    </div>

                </div>


                <div className="history-list">

                    {filteredConversations.length > 0 ? (

                        filteredConversations.map(
                            (conversation, index) => (

                                <article
                                    key={conversation.id}
                                    className={`history-card ${index >=
                                            filteredConversations.length - 2
                                            ? "menu-up"
                                            : ""
                                        }`}
                                >

                                    {/* LEFT ICON */}

                                    <div className="history-card-icon">
                                        <FiMessageSquare />
                                    </div>


                                    {/* CONTENT */}

                                    <div className="history-card-content">

                                        <div className="history-card-top">

                                            <h2>
                                                {conversation.title}
                                            </h2>

                                            <span
                                                className={`history-model ${conversation.modelType}`}
                                            >
                                                <span className="history-model-dot"></span>

                                                {conversation.model}
                                            </span>

                                        </div>


                                        <p className="history-preview">
                                            {conversation.preview}
                                        </p>


                                        <div className="history-card-meta">

                                            <span>
                                                {conversation.time}
                                            </span>

                                            <span className="meta-dot">
                                                •
                                            </span>

                                            <span>
                                                {conversation.messages} messages
                                            </span>

                                        </div>

                                    </div>


                                    {/* ACTIONS */}

                                    <div className="history-card-actions">

                                        <button
                                            type="button"
                                            className="history-open-btn"
                                            onClick={() =>
                                                console.log(
                                                    "Open:",
                                                    conversation.title
                                                )
                                            }
                                        >
                                            Open
                                        </button>


                                        <button
                                            type="button"
                                            className={`history-more ${activeMenu ===
                                                    conversation.id
                                                    ? "active"
                                                    : ""
                                                }`}
                                            onClick={() =>
                                                setActiveMenu(
                                                    activeMenu ===
                                                        conversation.id
                                                        ? null
                                                        : conversation.id
                                                )
                                            }
                                            aria-label={`More options for ${conversation.title}`}
                                            aria-expanded={
                                                activeMenu ===
                                                conversation.id
                                            }
                                        >
                                            <FiMoreHorizontal />
                                        </button>


                                        {activeMenu ===
                                            conversation.id && (

                                                <div className="history-action-menu">

                                                    <button
                                                        type="button"
                                                        onClick={() =>
                                                            handleStar(
                                                                conversation.id
                                                            )
                                                        }
                                                    >
                                                        <FiStar />
                                                        <span>
                                                            Add Star
                                                        </span>
                                                    </button>


                                                    <button
                                                        type="button"
                                                        onClick={() =>
                                                            handleRename(
                                                                conversation.id
                                                            )
                                                        }
                                                    >
                                                        <FiEdit3 />
                                                        <span>
                                                            Rename
                                                        </span>
                                                    </button>


                                                    <div className="menu-divider"></div>


                                                    <button
                                                        type="button"
                                                        className="danger"
                                                        onClick={() =>
                                                            handleDelete(
                                                                conversation.id
                                                            )
                                                        }
                                                    >
                                                        <FiTrash2 />
                                                        <span>
                                                            Delete
                                                        </span>
                                                    </button>

                                                </div>

                                            )}

                                    </div>

                                </article>

                            )
                        )

                    ) : (

                        <div className="history-empty">

                            <div className="history-empty-icon">
                                <FiSearch />
                            </div>

                            <h3>
                                No conversations found
                            </h3>

                            <p>
                                Try changing your search or filter.
                            </p>

                        </div>

                    )}

                </div>

            </section>

        </main>
    );
}

export default History;