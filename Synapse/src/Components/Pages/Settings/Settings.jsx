import { useState } from "react";
import {
  FiUser,
  FiBell,
  FiMoon,
  FiShield,
  FiCpu,
  FiSliders,
  FiSave,
  FiChevronRight,
  FiCheck,
} from "react-icons/fi";

import "./Settings.css";

function Settings() {
  const [activeSection, setActiveSection] = useState("profile");

  const [settings, setSettings] = useState({
    name: "Alex",
    email: "alex@example.com",
    notifications: true,
    emailNotifications: false,
    darkMode: true,
    autoSave: true,
    responseStyle: "Balanced",
    model: "GPT-4o",
  });

  const handleChange = (field, value) => {
    setSettings((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const sections = [
    {
      id: "profile",
      label: "Profile",
      description: "Manage your account",
      icon: <FiUser />,
    },
    {
      id: "appearance",
      label: "Appearance",
      description: "Customize your workspace",
      icon: <FiMoon />,
    },
    {
      id: "notifications",
      label: "Notifications",
      description: "Control your alerts",
      icon: <FiBell />,
    },
    {
      id: "ai",
      label: "AI Preferences",
      description: "Configure AI behavior",
      icon: <FiCpu />,
    },
    {
      id: "privacy",
      label: "Privacy & Security",
      description: "Manage your privacy",
      icon: <FiShield />,
    },
  ];

  const renderContent = () => {
    switch (activeSection) {
      case "profile":
        return (
          <div className="settings-section">
            <div className="settings-section-header">
              <div>
                <h2>Profile</h2>
                <p>Manage your personal information and account details.</p>
              </div>
            </div>

            <div className="profile-settings">
              <div className="profile-avatar">
                <img
                  src="/Images/profile.png"
                  alt="Profile"
                />
              </div>

              <div>
                <button className="settings-secondary-btn">
                  Change Avatar
                </button>

                <p className="settings-helper">
                  JPG, PNG or WEBP. Maximum size 2MB.
                </p>
              </div>
            </div>

            <div className="settings-form-grid">
              <div className="settings-field">
                <label>Full Name</label>
                <input
                  type="text"
                  value={settings.name}
                  onChange={(e) =>
                    handleChange("name", e.target.value)
                  }
                />
              </div>

              <div className="settings-field">
                <label>Email Address</label>
                <input
                  type="email"
                  value={settings.email}
                  onChange={(e) =>
                    handleChange("email", e.target.value)
                  }
                />
              </div>
            </div>
          </div>
        );

      case "appearance":
        return (
          <div className="settings-section">
            <div className="settings-section-header">
              <div>
                <h2>Appearance</h2>
                <p>
                  Customize how Synapse AI looks and feels.
                </p>
              </div>
            </div>

            <div className="settings-option">
              <div className="settings-option-icon">
                <FiMoon />
              </div>

              <div className="settings-option-content">
                <h3>Dark Mode</h3>
                <p>
                  Use the dark interface throughout Synapse AI.
                </p>
              </div>

              <label className="settings-switch">
                <input
                  type="checkbox"
                  checked={settings.darkMode}
                  onChange={(e) =>
                    handleChange("darkMode", e.target.checked)
                  }
                />
                <span></span>
              </label>
            </div>

            <div className="settings-option">
              <div className="settings-option-icon">
                <FiSliders />
              </div>

              <div className="settings-option-content">
                <h3>Auto Save</h3>
                <p>
                  Automatically save your chats, notes and changes.
                </p>
              </div>

              <label className="settings-switch">
                <input
                  type="checkbox"
                  checked={settings.autoSave}
                  onChange={(e) =>
                    handleChange("autoSave", e.target.checked)
                  }
                />
                <span></span>
              </label>
            </div>
          </div>
        );

      case "notifications":
        return (
          <div className="settings-section">
            <div className="settings-section-header">
              <div>
                <h2>Notifications</h2>
                <p>
                  Decide which notifications you want to receive.
                </p>
              </div>
            </div>

            <div className="settings-option">
              <div className="settings-option-icon">
                <FiBell />
              </div>

              <div className="settings-option-content">
                <h3>Push Notifications</h3>
                <p>
                  Receive notifications about your Synapse activity.
                </p>
              </div>

              <label className="settings-switch">
                <input
                  type="checkbox"
                  checked={settings.notifications}
                  onChange={(e) =>
                    handleChange("notifications", e.target.checked)
                  }
                />
                <span></span>
              </label>
            </div>

            <div className="settings-option">
              <div className="settings-option-icon">
                <FiBell />
              </div>

              <div className="settings-option-content">
                <h3>Email Notifications</h3>
                <p>
                  Receive important updates and activity by email.
                </p>
              </div>

              <label className="settings-switch">
                <input
                  type="checkbox"
                  checked={settings.emailNotifications}
                  onChange={(e) =>
                    handleChange(
                      "emailNotifications",
                      e.target.checked
                    )
                  }
                />
                <span></span>
              </label>
            </div>
          </div>
        );

      case "ai":
        return (
          <div className="settings-section">
            <div className="settings-section-header">
              <div>
                <h2>AI Preferences</h2>
                <p>
                  Customize how Synapse AI responds to you.
                </p>
              </div>
            </div>

            <div className="settings-field">
              <label>Default AI Model</label>

              <select
                value={settings.model}
                onChange={(e) =>
                  handleChange("model", e.target.value)
                }
              >
                <option>GPT-4o</option>
                <option>Claude 3.5</option>
                <option>Gemini</option>
              </select>
            </div>

            <div className="settings-field">
              <label>Response Style</label>

              <select
                value={settings.responseStyle}
                onChange={(e) =>
                  handleChange("responseStyle", e.target.value)
                }
              >
                <option>Balanced</option>
                <option>Creative</option>
                <option>Precise</option>
                <option>Concise</option>
              </select>
            </div>

            <div className="ai-info-card">
              <FiCpu />

              <div>
                <h3>AI Behavior</h3>
                <p>
                  These preferences will be used as defaults when
                  starting a new conversation.
                </p>
              </div>
            </div>
          </div>
        );

      case "privacy":
        return (
          <div className="settings-section">
            <div className="settings-section-header">
              <div>
                <h2>Privacy & Security</h2>
                <p>
                  Control your data and account security.
                </p>
              </div>
            </div>

            <div className="settings-option clickable">
              <div className="settings-option-icon">
                <FiShield />
              </div>

              <div className="settings-option-content">
                <h3>Privacy Settings</h3>
                <p>
                  Manage how your data is stored and used.
                </p>
              </div>

              <FiChevronRight />
            </div>

            <div className="settings-option clickable">
              <div className="settings-option-icon">
                <FiShield />
              </div>

              <div className="settings-option-content">
                <h3>Change Password</h3>
                <p>
                  Update your account password.
                </p>
              </div>

              <FiChevronRight />
            </div>

            <div className="danger-zone">
              <h3>Danger Zone</h3>

              <p>
                Permanently delete your Synapse AI account and
                associated data.
              </p>

              <button className="delete-account-btn">
                Delete Account
              </button>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section className="settings-page min-h-full">
      {/* Header */}
      <div className="settings-header flex items-center justify-between">
        <div>
          <h1>Settings</h1>
          <p>
            Manage your Synapse AI workspace and preferences.
          </p>
        </div>

        <button className="settings-save-btn flex items-center gap-2">
          <FiSave />
          Save Changes
        </button>
      </div>

      {/* Settings Layout */}
      <div className="settings-layout">
        {/* Sidebar */}
        <aside className="settings-sidebar">
          {sections.map((section) => (
            <button
              key={section.id}
              className={`settings-nav-item ${
                activeSection === section.id ? "active" : ""
              } flex items-center`}
              onClick={() => setActiveSection(section.id)}
            >
              <span className="settings-nav-icon">
                {section.icon}
              </span>

              <span className="settings-nav-text">
                <strong>{section.label}</strong>
                <small>{section.description}</small>
              </span>

              <FiChevronRight className="settings-nav-arrow" />
            </button>
          ))}
        </aside>

        {/* Content */}
        <main className="settings-content">
          {renderContent()}

          <div className="settings-bottom-actions flex justify-end">
            <button className="settings-save-btn flex items-center gap-2">
              <FiCheck />
              Save Changes
            </button>
          </div>
        </main>
      </div>
    </section>
  );
}

export default Settings;