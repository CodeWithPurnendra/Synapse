import { useState } from "react";

import {
    FiFileText,
    FiUploadCloud,
    FiSearch,
    FiMoreHorizontal,
    FiTrash2,
    FiDownload,
    FiEye,
    FiFilter,
    FiX,
    FiCheckCircle,
    FiClock,
    FiAlertCircle,
} from "react-icons/fi";

import "./Documents.css";

function Documents() {

    const [search, setSearch] = useState("");
    const [activeMenu, setActiveMenu] = useState(null);
    const [filter, setFilter] = useState("All");

    const documents = [
        {
            id: 1,
            name: "React_Notes.pdf",
            type: "PDF",
            size: "2.4 MB",
            date: "Today",
            status: "Analyzed",
            statusType: "success",
            model: "GPT-4o",
        },
        {
            id: 2,
            name: "Backend_Architecture.pdf",
            type: "PDF",
            size: "4.8 MB",
            date: "Yesterday",
            status: "Analyzed",
            statusType: "success",
            model: "GPT-4o",
        },
        {
            id: 3,
            name: "Project_Dataset.csv",
            type: "CSV",
            size: "1.2 MB",
            date: "2 days ago",
            status: "Processing",
            statusType: "processing",
            model: "Claude 3.5",
        },
        {
            id: 4,
            name: "Research_Notes.txt",
            type: "TXT",
            size: "420 KB",
            date: "4 days ago",
            status: "Analyzed",
            statusType: "success",
            model: "Gemini",
        },
        {
            id: 5,
            name: "Database_Schema.pdf",
            type: "PDF",
            size: "1.8 MB",
            date: "6 days ago",
            status: "Needs review",
            statusType: "warning",
            model: "GPT-4o",
        },
    ];

    const filteredDocuments = documents.filter((document) => {

        const matchesSearch =
            document.name
                .toLowerCase()
                .includes(search.toLowerCase());

        const matchesFilter =
            filter === "All" ||
            document.type === filter;

        return matchesSearch && matchesFilter;
    });


    return (
        <main className="documents-page">

            {/* =========================================
                HEADER
            ========================================= */}

            <section className="documents-header">

                <div className="documents-title-wrapper">

                    <div className="documents-title-icon">
                        <FiFileText />
                    </div>

                    <div>

                        <h1>
                            Documents
                        </h1>

                        <p>
                            Upload, analyze and manage your AI documents.
                        </p>

                    </div>

                </div>


                <button
                    type="button"
                    className="upload-button"
                >
                    <FiUploadCloud />

                    <span>
                        Upload Document
                    </span>
                </button>

            </section>


            {/* =========================================
                UPLOAD AREA
            ========================================= */}

            <section className="upload-area">

                <div className="upload-icon">
                    <FiUploadCloud />
                </div>

                <h2>
                    Upload a document
                </h2>

                <p>
                    Drag and drop your file here, or click to browse.
                </p>

                <span>
                    PDF, CSV and TXT files up to 20MB
                </span>

                <button
                    type="button"
                    className="browse-button"
                >
                    Browse Files
                </button>

            </section>


            {/* =========================================
                CONTROLS
            ========================================= */}

            <section className="documents-controls">

                <div className="documents-search">

                    <FiSearch />

                    <input
                        type="text"
                        placeholder="Search documents..."
                        value={search}
                        onChange={(e) =>
                            setSearch(e.target.value)
                        }
                    />

                    {search && (
                        <button
                            type="button"
                            className="documents-clear"
                            onClick={() => setSearch("")}
                        >
                            <FiX />
                        </button>
                    )}

                </div>


                <div className="document-filter">

                    <FiFilter />

                    <select
                        value={filter}
                        onChange={(e) =>
                            setFilter(e.target.value)
                        }
                    >
                        <option value="All">
                            All Files
                        </option>

                        <option value="PDF">
                            PDF
                        </option>

                        <option value="CSV">
                            CSV
                        </option>

                        <option value="TXT">
                            TXT
                        </option>
                    </select>

                </div>

            </section>


            {/* =========================================
                DOCUMENT HEADER
            ========================================= */}

            <div className="documents-list-header">

                <div>
                    <span>
                        YOUR DOCUMENTS
                    </span>

                    <small>
                        {filteredDocuments.length} files
                    </small>
                </div>

            </div>


            {/* =========================================
                DOCUMENT LIST
            ========================================= */}

            <section className="documents-list">

                {filteredDocuments.length > 0 ? (

                    filteredDocuments.map(
                        (document, index) => (

                            <article
                                key={document.id}
                                className={`document-card ${
                                    index >=
                                    filteredDocuments.length - 2
                                        ? "document-menu-up"
                                        : ""
                                }`}
                            >

                                {/* FILE ICON */}

                                <div
                                    className={`document-file-icon ${document.type.toLowerCase()}`}
                                >
                                    <FiFileText />
                                </div>


                                {/* CONTENT */}

                                <div className="document-info">

                                    <div className="document-name-row">

                                        <h2>
                                            {document.name}
                                        </h2>

                                        <span className="document-type">
                                            {document.type}
                                        </span>

                                    </div>


                                    <div className="document-meta">

                                        <span>
                                            {document.size}
                                        </span>

                                        <span>
                                            •
                                        </span>

                                        <span>
                                            {document.date}
                                        </span>

                                        <span>
                                            •
                                        </span>

                                        <span className="document-model">
                                            {document.model}
                                        </span>

                                    </div>

                                </div>


                                {/* STATUS */}

                                <div
                                    className={`document-status ${document.statusType}`}
                                >

                                    {document.statusType === "success" && (
                                        <FiCheckCircle />
                                    )}

                                    {document.statusType === "processing" && (
                                        <FiClock />
                                    )}

                                    {document.statusType === "warning" && (
                                        <FiAlertCircle />
                                    )}

                                    <span>
                                        {document.status}
                                    </span>

                                </div>


                                {/* ACTIONS */}

                                <div className="document-actions">

                                    <button
                                        type="button"
                                        className="document-open"
                                    >
                                        Open
                                    </button>


                                    <button
                                        type="button"
                                        className={`document-more ${
                                            activeMenu === document.id
                                                ? "active"
                                                : ""
                                        }`}
                                        onClick={() =>
                                            setActiveMenu(
                                                activeMenu ===
                                                    document.id
                                                    ? null
                                                    : document.id
                                            )
                                        }
                                    >
                                        <FiMoreHorizontal />
                                    </button>


                                    {activeMenu === document.id && (

                                        <div className="document-menu">

                                            <button type="button">
                                                <FiEye />
                                                View
                                            </button>

                                            <button type="button">
                                                <FiDownload />
                                                Download
                                            </button>

                                            <button
                                                type="button"
                                                className="danger"
                                            >
                                                <FiTrash2 />
                                                Delete
                                            </button>

                                        </div>

                                    )}

                                </div>

                            </article>

                        )

                    )

                ) : (

                    <div className="documents-empty">

                        <div className="documents-empty-icon">
                            <FiFileText />
                        </div>

                        <h3>
                            No documents found
                        </h3>

                        <p>
                            Try another search or upload a new document.
                        </p>

                    </div>

                )}

            </section>

        </main>
    );
}

export default Documents;