import { useState } from "react";

import {
    FiPaperclip,
    FiPlus,
    FiSliders,
    FiArrowUp,
    FiChevronDown,
    FiCheck,
} from "react-icons/fi";

import "./ChatBar.css";

function ChatBar() {
    const [message, setMessage] = useState("");
    const [model, setModel] = useState("GPT-4o");
    const [isModelOpen, setIsModelOpen] = useState(false);

    const models = [
        "GPT-4o",
        "Claude 3.5",
        "Gemini",
    ];

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!message.trim()) return;

        console.log("Message:", message);
        console.log("Model:", model);

        // Later:
        // Send message + model to your backend/API

        setMessage("");
    };

    const handleKeyDown = (e) => {
        // Enter = Send
        // Shift + Enter = New line
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();

            handleSubmit(e);
        }
    };

    const handleModelSelect = (selectedModel) => {
        setModel(selectedModel);
        setIsModelOpen(false);
    };

    return (
        <div className="chatbar-container">

            {/* =========================
                CHATBAR
            ========================= */}

            <form
                className="chatbar"
                onSubmit={handleSubmit}
            >

                {/* =========================
                    MESSAGE INPUT
                ========================= */}

                <textarea
                    className="chatbar-input"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Message Synapse..."
                    aria-label="Message Synapse"
                    rows="1"
                />


                {/* =========================
                    TOOLBAR
                ========================= */}

                <div className="chatbar-toolbar">

                    {/* LEFT TOOLS */}

                    <div className="chatbar-tools">

                        <button
                            type="button"
                            className="chatbar-tool"
                            aria-label="Add"
                            title="Add"
                        >
                            <FiPlus />
                        </button>


                        <button
                            type="button"
                            className="chatbar-tool"
                            aria-label="Attach file"
                            title="Attach file"
                        >
                            <FiPaperclip />
                        </button>


                        <button
                            type="button"
                            className="chatbar-tool"
                            aria-label="Tools"
                            title="Tools"
                        >
                            <FiSliders />
                        </button>

                    </div>


                    {/* RIGHT ACTIONS */}

                    <div className="chatbar-actions">

                        {/* =========================
                            CUSTOM MODEL DROPDOWN
                        ========================= */}

                        <div className="model-dropdown">

                            <button
                                type="button"
                                className="model-selector"
                                onClick={() =>
                                    setIsModelOpen(!isModelOpen)
                                }
                                aria-haspopup="listbox"
                                aria-expanded={isModelOpen}
                                aria-label="Select AI model"
                            >

                                <span
                                    className="model-dot"
                                    aria-hidden="true"
                                ></span>

                                <span className="selected-model">
                                    {model}
                                </span>

                                <FiChevronDown
                                    className={`model-chevron ${
                                        isModelOpen
                                            ? "rotate"
                                            : ""
                                    }`}
                                />

                            </button>


                            {/* =========================
                                DROPDOWN MENU
                            ========================= */}

                            {isModelOpen && (
                                <div
                                    className="model-menu"
                                    role="listbox"
                                >

                                    {models.map((item) => (
                                        <button
                                            key={item}
                                            type="button"
                                            className={`model-option ${
                                                model === item
                                                    ? "selected"
                                                    : ""
                                            }`}
                                            onClick={() =>
                                                handleModelSelect(item)
                                            }
                                            role="option"
                                            aria-selected={
                                                model === item
                                            }
                                        >

                                            <span className="option-dot"></span>

                                            <span>
                                                {item}
                                            </span>

                                            {model === item && (
                                                <FiCheck className="check-icon" />
                                            )}

                                        </button>
                                    ))}

                                </div>
                            )}

                        </div>


                        {/* =========================
                            SEND BUTTON
                        ========================= */}

                        <button
                            type="submit"
                            className={`chatbar-send ${
                                message.trim()
                                    ? "active"
                                    : ""
                            }`}
                            disabled={!message.trim()}
                            aria-label="Send message"
                            title="Send message"
                        >
                            <FiArrowUp />
                        </button>

                    </div>

                </div>

            </form>


            {/* =========================
                DISCLAIMER
            ========================= */}

            <p className="chatbar-disclaimer">
                Synapse AI can make mistakes. Check important information.
            </p>

        </div>
    );
}

export default ChatBar;