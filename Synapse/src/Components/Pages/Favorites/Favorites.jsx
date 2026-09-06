import { useState } from "react";

import {
    FiStar,
    FiSearch,
    FiMoreHorizontal,
    FiMessageSquare,
    FiTrash2,
    FiEdit3,
    FiClock,
    FiX,
} from "react-icons/fi";

import "./Favorites.css";

function Favorites() {

    const [search, setSearch] = useState("");
    const [activeMenu, setActiveMenu] = useState(null);

    const [favorites, setFavorites] = useState([
        {
            id: 1,
            title: "React useEffect Deep Dive",
            description:
                "Understanding useEffect dependencies, cleanup functions and common React patterns.",
            model: "GPT-4o",
            modelType: "green",
            date: "2 hours ago",
            messages: 18,
        },
        {
            id: 2,
            title: "Node.js Backend Architecture",
            description:
                "Discussed controllers, services, routes and scalable backend architecture.",
            model: "GPT-4o",
            modelType: "green",
            date: "Yesterday",
            messages: 25,
        },
        {
            id: 3,
            title: "Marketing Strategy Q4",
            description:
                "Marketing campaigns, audience targeting and content strategy discussion.",
            model: "Claude 3.5",
            modelType: "orange",
            date: "3 days ago",
            messages: 24,
        },
        {
            id: 4,
            title: "PostgreSQL Database Design",
            description:
                "Database relationships, indexing strategies and PostgreSQL schema planning.",
            model: "Gemini",
            modelType: "blue",
            date: "5 days ago",
            messages: 21,
        },
    ]);

    const filteredFavorites = favorites.filter((item) =>
        `${item.title} ${item.description}`
            .toLowerCase()
            .includes(search.toLowerCase())
    );

    const removeFavorite = (id) => {
        setFavorites((current) =>
            current.filter((item) => item.id !== id)
        );

        setActiveMenu(null);
    };

    return (
        <main className="favorites-page">

            {/* =========================================
                HEADER
            ========================================= */}

            <section className="favorites-header">

                <div className="favorites-title-wrapper">

                    <div className="favorites-title-icon">
                        <FiStar />
                    </div>

                    <div>
                        <h1 className="text-white">
                            Favorites
                        </h1>

                        <p>
                            Quickly access your most important
                            conversations.
                        </p>
                    </div>

                </div>


                <div className="favorites-count">
                    <strong>
                        {favorites.length}
                    </strong>

                    <span>
                        Saved conversations
                    </span>
                </div>

            </section>


            {/* =========================================
                SEARCH
            ========================================= */}

            <section className="favorites-controls">

                <div className="favorites-search">

                    <FiSearch />

                    <input
                        type="text"
                        placeholder="Search favorites..."
                        value={search}
                        onChange={(e) =>
                            setSearch(e.target.value)
                        }
                    />

                    {search && (
                        <button
                            type="button"
                            className="favorites-clear"
                            onClick={() => setSearch("")}
                        >
                            <FiX />
                        </button>
                    )}

                </div>

            </section>


            {/* =========================================
                FAVORITES LIST
            ========================================= */}

            <section className="favorites-section">

                <div className="favorites-section-header">

                    <span>
                        SAVED CONVERSATIONS
                    </span>

                    <small>
                        {filteredFavorites.length} items
                    </small>

                </div>


                <div className="favorites-grid">

                    {filteredFavorites.length > 0 ? (

                        filteredFavorites.map((item, index) => (

                            <article
                                key={item.id}
                                className={`favorite-card ${
                                    index >=
                                    filteredFavorites.length - 2
                                        ? "favorite-menu-up"
                                        : ""
                                }`}
                            >

                                {/* Star */}

                                <div className="favorite-card-top">

                                    <div className="favorite-icon">
                                        <FiStar />
                                    </div>


                                    <div className="favorite-actions">

                                        <button
                                            type="button"
                                            className="favorite-more"
                                            onClick={() =>
                                                setActiveMenu(
                                                    activeMenu === item.id
                                                        ? null
                                                        : item.id
                                                )
                                            }
                                        >
                                            <FiMoreHorizontal />
                                        </button>


                                        {activeMenu === item.id && (

                                            <div className="favorite-menu">

                                                <button
                                                    type="button"
                                                    onClick={() =>
                                                        console.log(
                                                            "Rename:",
                                                            item.title
                                                        )
                                                    }
                                                >
                                                    <FiEdit3 />
                                                    Rename
                                                </button>


                                                <button
                                                    type="button"
                                                    className="danger"
                                                    onClick={() =>
                                                        removeFavorite(
                                                            item.id
                                                        )
                                                    }
                                                >
                                                    <FiTrash2 />
                                                    Remove
                                                </button>

                                            </div>

                                        )}

                                    </div>

                                </div>


                                {/* Content */}

                                <div className="favorite-content">

                                    <h2>
                                        {item.title}
                                    </h2>

                                    <p>
                                        {item.description}
                                    </p>

                                </div>


                                {/* Footer */}

                                <div className="favorite-footer">

                                    <div className="favorite-meta">

                                        <span className={`favorite-model ${item.modelType}`}>
                                            <span></span>
                                            {item.model}
                                        </span>

                                        <span>
                                            <FiClock />
                                            {item.date}
                                        </span>

                                        <span>
                                            {item.messages} messages
                                        </span>

                                    </div>


                                    <button
                                        type="button"
                                        className="favorite-open"
                                        onClick={() =>
                                            console.log(
                                                "Open:",
                                                item.title
                                            )
                                        }
                                    >
                                        Open
                                    </button>

                                </div>

                            </article>

                        ))

                    ) : (

                        <div className="favorites-empty">

                            <div className="favorites-empty-icon">
                                <FiStar />
                            </div>

                            <h3>
                                No favorites found
                            </h3>

                            <p>
                                Star conversations to access them quickly.
                            </p>

                        </div>

                    )}

                </div>

            </section>

        </main>
    );
}

export default Favorites;