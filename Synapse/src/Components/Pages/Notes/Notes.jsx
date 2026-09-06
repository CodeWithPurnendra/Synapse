import { useState } from "react";
import {
    FiEdit3,
    FiPlus,
    FiSearch,
    FiStar,
    FiMoreHorizontal,
    FiTrash2,
    FiClock,
    FiTag,
    FiX,
} from "react-icons/fi";

import "./Notes.css";

function Notes() {
    const [search, setSearch] = useState("");
    const [showEditor, setShowEditor] = useState(false);

    const [notes, setNotes] = useState([
        {
            id: 1,
            title: "React useEffect Notes",
            content:
                "useEffect allows us to perform side effects in React components. It is useful for fetching data, subscriptions, timers and synchronizing with external systems.",
            category: "React",
            date: "2 hours ago",
            favorite: true,
        },
        {
            id: 2,
            title: "Backend Development Roadmap",
            content:
                "Learn Node.js fundamentals, Express, REST APIs, authentication, PostgreSQL, database design and deployment.",
            category: "Backend",
            date: "Yesterday",
            favorite: false,
        },
        {
            id: 3,
            title: "Synapse AI Ideas",
            content:
                "Add document analysis, AI-generated summaries, conversation memory and personalized AI workflows.",
            category: "Ideas",
            date: "3 days ago",
            favorite: true,
        },
        {
            id: 4,
            title: "JavaScript Concepts",
            content:
                "Important JavaScript topics include closures, promises, async/await, objects, arrays, destructuring and modules.",
            category: "JavaScript",
            date: "5 days ago",
            favorite: false,
        },
        {
            id: 5,
            title: "Project Ideas",
            content:
                "Build practical projects using React, Node.js, PostgreSQL and AI APIs to improve full-stack development skills.",
            category: "Projects",
            date: "1 week ago",
            favorite: false,
        },
        {
            id: 6,
            title: "API Notes",
            content:
                "REST APIs allow applications to communicate using HTTP methods such as GET, POST, PUT and DELETE.",
            category: "Development",
            date: "1 week ago",
            favorite: true,
        },
    ]);

    const [newNote, setNewNote] = useState({
        title: "",
        content: "",
        category: "General",
    });

    const filteredNotes = notes.filter(
        (note) =>
            note.title.toLowerCase().includes(search.toLowerCase()) ||
            note.content.toLowerCase().includes(search.toLowerCase()) ||
            note.category.toLowerCase().includes(search.toLowerCase())
    );

    const toggleFavorite = (id) => {
        setNotes((currentNotes) =>
            currentNotes.map((note) =>
                note.id === id
                    ? { ...note, favorite: !note.favorite }
                    : note
            )
        );
    };

    const deleteNote = (id) => {
        setNotes((currentNotes) =>
            currentNotes.filter((note) => note.id !== id)
        );
    };

    const handleCreateNote = (e) => {
        e.preventDefault();

        if (!newNote.title.trim() || !newNote.content.trim()) {
            return;
        }

        const note = {
            id: Date.now(),
            title: newNote.title,
            content: newNote.content,
            category: newNote.category,
            date: "Just now",
            favorite: false,
        };

        setNotes((currentNotes) => [note, ...currentNotes]);

        setNewNote({
            title: "",
            content: "",
            category: "General",
        });

        setShowEditor(false);
    };

    return (
        <main className="notes-page min-h-full">

            {/* =========================================
                HEADER
            ========================================= */}

            <section className="notes-header">

                <div className="notes-heading">

                    <div className="notes-title-icon">
                        <FiEdit3 />
                    </div>

                    <div>
                        <h1>Notes</h1>

                        <p>
                            Create, organize and save your ideas with Synapse.
                        </p>
                    </div>

                </div>

                <button
                    className="create-note-btn"
                    onClick={() => setShowEditor(true)}
                >
                    <FiPlus />
                    <span>New Note</span>
                </button>

            </section>


            {/* =========================================
                STATISTICS
            ========================================= */}

            <section className="notes-stats">

                <div className="note-stat-card">
                    <div className="stat-icon">
                        <FiEdit3 />
                    </div>

                    <div>
                        <span>Total Notes</span>
                        <strong>{notes.length}</strong>
                    </div>
                </div>


                <div className="note-stat-card">
                    <div className="stat-icon">
                        <FiStar />
                    </div>

                    <div>
                        <span>Favorites</span>
                        <strong>
                            {notes.filter((note) => note.favorite).length}
                        </strong>
                    </div>
                </div>


                <div className="note-stat-card">
                    <div className="stat-icon">
                        <FiTag />
                    </div>

                    <div>
                        <span>Categories</span>
                        <strong>
                            {new Set(notes.map((note) => note.category)).size}
                        </strong>
                    </div>
                </div>

            </section>


            {/* =========================================
                SEARCH
            ========================================= */}

            <section className="notes-toolbar">

                <div className="notes-search">

                    <FiSearch />

                    <input
                        type="text"
                        placeholder="Search your notes..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />

                    {search && (
                        <button
                            className="clear-search"
                            onClick={() => setSearch("")}
                            aria-label="Clear search"
                        >
                            <FiX />
                        </button>
                    )}

                </div>

            </section>


            {/* =========================================
                SECTION TITLE
            ========================================= */}

            <div className="notes-section-heading">

                <div>
                    <span>YOUR NOTES</span>
                    <p>
                        {filteredNotes.length}{" "}
                        {filteredNotes.length === 1 ? "note" : "notes"}
                    </p>
                </div>

                <button className="sort-btn">
                    <FiClock />
                    Recently updated
                </button>

            </div>


            {/* =========================================
                NOTES GRID
            ========================================= */}

            {filteredNotes.length > 0 ? (

                <section className="notes-grid">

                    {filteredNotes.map((note) => (

                        <article
                            className="note-card group"
                            key={note.id}
                        >

                            {/* Card Top */}

                            <div className="note-card-top">

                                <div className="note-card-icon">
                                    <FiEdit3 />
                                </div>

                                <div className="note-card-actions">

                                    <button
                                        className={`note-action ${
                                            note.favorite
                                                ? "favorite-active"
                                                : ""
                                        }`}
                                        onClick={() =>
                                            toggleFavorite(note.id)
                                        }
                                        aria-label={
                                            note.favorite
                                                ? "Remove from favorites"
                                                : "Add to favorites"
                                        }
                                    >
                                        <FiStar />
                                    </button>

                                    <button
                                        className="note-action"
                                        aria-label="More options"
                                    >
                                        <FiMoreHorizontal />
                                    </button>

                                </div>

                            </div>


                            {/* Card Content */}

                            <div className="note-card-content">

                                <h3>{note.title}</h3>

                                <p>{note.content}</p>

                            </div>


                            {/* Category */}

                            <div className="note-category">
                                <FiTag />
                                <span>{note.category}</span>
                            </div>


                            {/* Card Footer */}

                            <div className="note-card-footer">

                                <div className="note-date">
                                    <FiClock />
                                    <span>{note.date}</span>
                                </div>

                                <button
                                    className="delete-note"
                                    onClick={() =>
                                        deleteNote(note.id)
                                    }
                                    aria-label="Delete note"
                                    title="Delete note"
                                >
                                    <FiTrash2 />
                                </button>

                            </div>

                        </article>

                    ))}

                </section>

            ) : (

                <section className="notes-empty">

                    <div className="empty-note-icon">
                        <FiSearch />
                    </div>

                    <h3>No notes found</h3>

                    <p>
                        Try searching with a different keyword.
                    </p>

                    <button
                        onClick={() => setSearch("")}
                    >
                        Clear Search
                    </button>

                </section>

            )}


            {/* =========================================
                NEW NOTE MODAL
            ========================================= */}

            {showEditor && (

                <div
                    className="note-modal-overlay"
                    onClick={() => setShowEditor(false)}
                >

                    <div
                        className="note-editor"
                        onClick={(e) => e.stopPropagation()}
                    >

                        <div className="editor-header">

                            <div>
                                <h2>Create New Note</h2>

                                <p>
                                    Save an idea, summary or important information.
                                </p>
                            </div>

                            <button
                                className="editor-close"
                                onClick={() => setShowEditor(false)}
                                aria-label="Close editor"
                            >
                                <FiX />
                            </button>

                        </div>


                        <form onSubmit={handleCreateNote}>

                            <div className="editor-field">

                                <label htmlFor="note-title">
                                    Title
                                </label>

                                <input
                                    id="note-title"
                                    type="text"
                                    placeholder="Enter note title..."
                                    value={newNote.title}
                                    onChange={(e) =>
                                        setNewNote({
                                            ...newNote,
                                            title: e.target.value,
                                        })
                                    }
                                />

                            </div>


                            <div className="editor-field">

                                <label htmlFor="note-category">
                                    Category
                                </label>

                                <input
                                    id="note-category"
                                    type="text"
                                    placeholder="e.g. React, Ideas, Study..."
                                    value={newNote.category}
                                    onChange={(e) =>
                                        setNewNote({
                                            ...newNote,
                                            category: e.target.value,
                                        })
                                    }
                                />

                            </div>


                            <div className="editor-field">

                                <label htmlFor="note-content">
                                    Note
                                </label>

                                <textarea
                                    id="note-content"
                                    rows="7"
                                    placeholder="Write your note..."
                                    value={newNote.content}
                                    onChange={(e) =>
                                        setNewNote({
                                            ...newNote,
                                            content: e.target.value,
                                        })
                                    }
                                />

                            </div>


                            <div className="editor-footer">

                                <button
                                    type="button"
                                    className="cancel-btn"
                                    onClick={() =>
                                        setShowEditor(false)
                                    }
                                >
                                    Cancel
                                </button>

                                <button
                                    type="submit"
                                    className="save-note-btn"
                                >
                                    <FiPlus />
                                    Create Note
                                </button>

                            </div>

                        </form>

                    </div>

                </div>

            )}

        </main>
    );
}

export default Notes;