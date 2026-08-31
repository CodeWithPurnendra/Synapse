
import {
    FiMessageSquare,
    FiFileText,
    FiStar,
    FiFolder,
    FiEdit3,
    FiMoreHorizontal,
} from "react-icons/fi";

import "./Home.css";
import ChatBar from "../../ChatBar/ChatBar";
function Home() {
    return (
        <main className="home-page">

            <section className="welcome-card">
                <h1>Welcome back, Alex</h1>

                <p>
                    Your AI workspace at a glance — 12 chats this week,
                    3 documents analyzed.
                </p>
            </section>
            <section className="dashboard-section">

                <div className="section-title">
                    QUICK START
                </div>

                <div className="quick-start-grid">

                    <button className="quick-card">
                        <div className="quick-icon">
                            <FiMessageSquare />
                        </div>

                        <h3>Start New Chat</h3>

                        <p>
                            Begin a fresh conversation with the model.
                        </p>
                    </button>


                    <button className="quick-card">
                        <div className="quick-icon">
                            <FiFileText />
                        </div>

                        <h3>Upload Document</h3>

                        <p>
                            Upload PDFs, CSVs or TXT files to analyze.
                        </p>
                    </button>


                    <button className="quick-card">
                        <div className="quick-icon">
                            <FiEdit3 />
                        </div>

                        <h3>AI Note Generation</h3>

                        <p>
                            Create structured templates and summaries.
                        </p>
                    </button>


                    <button className="quick-card">
                        <div className="quick-icon">
                            <FiStar />
                        </div>

                        <h3>Quick Ideas</h3>

                        <p>
                            Brainstorm concepts and outlines.
                        </p>
                    </button>

                </div>

            </section>

            <div className="dashboard-grid">

                <section className="dashboard-panel">

                    <div className="panel-header">
                        <span>RECENT CONVERSATIONS</span>

                        <button className="panel-more">
                            <FiMoreHorizontal />
                        </button>
                    </div>


                    <div className="conversation-list">

                        <div className="conversation-item">

                            <div className="conversation-icon">
                                <FiMessageSquare />
                            </div>

                            <div className="conversation-info">
                                <h4>
                                    React useEffect Deep Dive
                                </h4>

                                <span>
                                    2 hours ago
                                </span>
                            </div>

                            <span className="model-badge green">
                                ● GPT-4o
                            </span>

                            <button className="resume-btn">
                                Resume →
                            </button>

                        </div>


                        <div className="conversation-item">

                            <div className="conversation-icon">
                                <FiMessageSquare />
                            </div>

                            <div className="conversation-info">
                                <h4>
                                    Marketing Strategy Q4
                                </h4>

                                <span>
                                    Yesterday
                                </span>
                            </div>

                            <span className="model-badge orange">
                                ● CLAUDE 3.5
                            </span>

                            <button className="resume-btn">
                                Resume →
                            </button>

                        </div>


                        <div className="conversation-item">

                            <div className="conversation-icon">
                                <FiMessageSquare />
                            </div>

                            <div className="conversation-info">
                                <h4>
                                    Python Data Pipeline
                                </h4>

                                <span>
                                    3 days ago
                                </span>
                            </div>

                            <span className="model-badge green">
                                ● GPT-4o
                            </span>

                            <button className="resume-btn">
                                Resume →
                            </button>

                        </div>

                    </div>

                </section>

                <section className="library-panel">

                    <div className="panel-header">
                        YOUR AI LIBRARY
                    </div>


                    <div className="library-list">

                        <button className="library-card">

                            <div className="library-icon">
                                <FiFolder />
                            </div>

                            <span>
                                Documents
                            </span>

                            <strong>
                                5 files
                            </strong>

                        </button>


                        <button className="library-card">

                            <div className="library-icon">
                                <FiStar />
                            </div>

                            <span>
                                Saved Favorites
                            </span>

                            <strong>
                                12 items
                            </strong>

                        </button>


                        <button className="library-card">

                            <div className="library-icon">
                                <FiEdit3 />
                            </div>

                            <span>
                                Recent Notes
                            </span>

                            <strong>
                                8 notes
                            </strong>

                        </button>

                    </div>

                </section>

            </div>
            <div className="chat-bar">
                <section>
                    <ChatBar />
                </section>
            </div>
        </main>
    );
}

export default Home;