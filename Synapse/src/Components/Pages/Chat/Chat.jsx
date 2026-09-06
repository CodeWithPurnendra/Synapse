import {
    FiMessageSquare,
    FiFileText,
    FiStar,
    FiPlus,
} from "react-icons/fi";

import ChatBar from "../../ChatBar/ChatBar";

import "./Chat.css";

function Chat() {
    return (
        <main className="chat-page">

            {/* =================================================
                CHAT HEADER / WELCOME
            ================================================= */}

            <section className="chat-welcome">
                <h1>
                    How can I help you?
                </h1>

                <p>
                    Start a conversation with Synapse AI.
                    Ask questions, analyze documents, or brainstorm ideas.
                </p>

            </section>


            {/* =================================================
                QUICK ACTIONS
            ================================================= */}

            <section className="chat-quick-actions">

                <button className="chat-suggestion">

                    <div className="suggestion-icon">
                        <FiMessageSquare />
                    </div>

                    <div>
                        <strong>
                            Start a conversation
                        </strong>

                        <span>
                            Ask Synapse anything
                        </span>
                    </div>

                </button>


                <button className="chat-suggestion">

                    <div className="suggestion-icon">
                        <FiFileText />
                    </div>

                    <div>
                        <strong>
                            Analyze a document
                        </strong>

                        <span>
                            Upload and analyze your files
                        </span>
                    </div>

                </button>


                <button className="chat-suggestion">

                    <div className="suggestion-icon">
                        <FiStar />
                    </div>

                    <div>
                        <strong>
                            Brainstorm ideas
                        </strong>

                        <span>
                            Generate ideas and concepts
                        </span>
                    </div>

                </button>

            </section>


            {/* =================================================
                EMPTY CONVERSATION AREA

                This will later contain messages.
            ================================================= */}

            <section
                className="chat-conversation"
                aria-label="Conversation"
            >

                <div className="chat-empty-state">

                    <div className="empty-logo">
                        <FiPlus />
                    </div>

                    <span>
                        Your conversation will appear here
                    </span>

                </div>

            </section>


            {/* =================================================
                CHAT BAR
            ================================================= */}

            <div className="chat-input-area">

                <ChatBar />

            </div>

        </main>
    );
}

export default Chat;