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

        setMessage("");
    };

    const handleKeyDown = (e) => {
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

            <form
                className="chatbar"
                onSubmit={handleSubmit}
            >

                {/* LEFT TOOLS */}
                <div className="chatbar-left">

                    <button
                        type="button"
                        className="chatbar-tool tooltip"
                        aria-label="Add"
                    >
                        <FiPlus />

                        <span className="tooltip-text">
                            Add
                        </span>
                    </button>

                    <button
                        type="button"
                        className="chatbar-tool tooltip"
                        aria-label="Attach file"
                    >
                        <FiPaperclip />

                        <span className="tooltip-text">
                            Attach file
                        </span>
                    </button>

                    <button
                        type="button"
                        className="chatbar-tool tooltip"
                        aria-label="Tools"
                    >
                        <FiSliders />

                        <span className="tooltip-text">
                            Tools
                        </span>
                    </button>

                </div>


                {/* MESSAGE INPUT */}
                <textarea
                    className="chatbar-input"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Message Synapse..."
                    aria-label="Message Synapse"
                    rows="1"
                />


                {/* RIGHT SIDE */}
                <div className="chatbar-right">

                    {/* MODEL */}
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

                            <span className="model-dot"></span>

                            <span className="selected-model">
                                {model}
                            </span>

                            <FiChevronDown
                                className={`model-chevron ${
                                    isModelOpen ? "rotate" : ""
                                }`}
                            />

                        </button>


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


                    {/* SEND */}
                    <button
                        type="submit"
                        className={`chatbar-send ${
                            message.trim() ? "active" : ""
                        }`}
                        disabled={!message.trim()}
                        aria-label="Send message"
                        title="Send message"
                    >
                        <FiArrowUp />
                    </button>

                </div>

            </form>


            {/* DISCLAIMER */}
            <p className="chatbar-disclaimer">
                Synapse AI can make mistakes. Check important information.
            </p>

        </div>
    );
}

export default ChatBar;