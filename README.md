# 🧠 Synapse AI — AI Productivity Platform

**Synapse AI** is a modern AI-powered productivity web application built with **React**. It provides a centralized workspace where users can interact with AI, manage conversations, organize documents and notes, save favorites, view chat history, and customize application settings.

The project focuses on creating a clean, responsive, and scalable frontend architecture while practicing modern React development and client-side routing.

---

## ✨ Features

### 🏠 Home

A centralized dashboard that provides quick access to the application's main features and AI workspace.

### 💬 AI Chat

A dedicated chat interface designed for interacting with AI models and managing conversations.

### 🕘 Chat History

View and access previous conversations from a centralized history section.

### ⭐ Favorites

Save important conversations or content for quick access later.

### 📄 Documents

A dedicated workspace for managing and organizing documents.

### 📝 Notes

Create and manage personal notes within the application.

### ⚙️ Settings

Customize application preferences and manage user settings.

### 🧭 Navigation

* Responsive sidebar navigation
* Top navigation bar
* Client-side routing
* Automatic redirect from `/` to `/home`
* Active page navigation

---

## 🛠️ Tech Stack

| Technology                | Purpose                       |
| ------------------------- | ----------------------------- |
| ⚛️ **React**              | Frontend application          |
| 🛣️ **React Router**      | Client-side routing           |
| 🎨 **CSS3**               | Styling and responsive UI     |
| ⚡ **Vite**                | Development and build tooling |
| 🧩 **React Components**   | Modular UI architecture       |
| 🖥️ **JavaScript (ES6+)** | Application logic             |
| 🔀 **Git & GitHub**       | Version control               |

---

## 📂 Project Structure

```text
synapse-ai/
│
├── public/
│
├── src/
│   ├── Components/
│   │   │
│   │   ├── SideBar/
│   │   │   └── SideBar.jsx
│   │   │
│   │   ├── TopNavBar/
│   │   │   └── TopNavBar.jsx
│   │   │
│   │   └── Pages/
│   │       │
│   │       ├── Home/
│   │       │   └── Home.jsx
│   │       │
│   │       ├── Chat/
│   │       │   └── Chat.jsx
│   │       │
│   │       ├── History/
│   │       │   └── History.jsx
│   │       │
│   │       ├── Favorites/
│   │       │   └── Favorites.jsx
│   │       │
│   │       ├── Documents/
│   │       │   └── Documents.jsx
│   │       │
│   │       ├── Notes/
│   │       │   └── Notes.jsx
│   │       │
│   │       └── Settings/
│   │           └── Settings.jsx
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
│
├── package.json
├── vite.config.js
└── README.md
```

---

## 🧭 Application Routes

Synapse AI uses **React Router** to provide navigation between different sections of the application.

| Route        | Page      | Description                |
| ------------ | --------- | -------------------------- |
| `/`          | Redirect  | Redirects users to `/home` |
| `/home`      | Home      | Main application dashboard |
| `/chat`      | Chat      | AI conversation interface  |
| `/history`   | History   | Previous conversations     |
| `/favorites` | Favorites | Saved content              |
| `/documents` | Documents | Document workspace         |
| `/notes`     | Notes     | Notes management           |
| `/settings`  | Settings  | Application settings       |

---

## 🏗️ Application Architecture

The application uses a layout-based structure:

```text
                     Synapse AI
                         │
          ┌──────────────┴──────────────┐
          │                             │
       Sidebar                      Main Content
                                        │
                                  ┌─────┴─────┐
                                  │ Top Nav   │
                                  └─────┬─────┘
                                        │
                                   Page Content
                                        │
                    ┌───────────────────┼───────────────────┐
                    │                   │                   │
                   Home               Chat              History
                    │
              ┌─────┴─────┐
              │           │
          Documents      Notes
                            │
                        Settings
```

The main `App.jsx` component controls the application layout and routing while individual pages are separated into their own components.

---

## 🔀 Routing

The application uses `react-router-dom` for navigation.

Example:

```jsx
import { Routes, Route, Navigate } from "react-router-dom";
```

Routes are defined using:

```jsx
<Routes>
    <Route
        path="/home"
        element={<Home />}
    />

    <Route
        path="/chat"
        element={<Chat />}
    />

    <Route
        path="/history"
        element={<History />}
    />
</Routes>
```

The root route automatically redirects to the home page:

```jsx
<Route
    path="/"
    element={<Navigate to="/home" replace />}
/>
```

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/CodeWithPurnendra/Synapse.git
```

### 2. Navigate to the Project

```bash
cd synapse-ai
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Start the Development Server

```bash
npm run dev
```

The terminal will provide a local development URL.

Open that URL in your browser to launch Synapse AI.

---

## 📸 Screenshots

Add screenshots of your application here.

For example:

```markdown
## 📸 Screenshots

### 🏠 Home Dashboard

![Synapse AI Home](./screenshots/home.png)

### 💬 AI Chat

![Synapse AI Chat](./screenshots/chat.png)

### 📄 Documents

![Synapse AI Documents](./screenshots/documents.png)
```

Screenshots are highly recommended because they allow visitors and recruiters to immediately understand the application's UI.

---

## 📚 What I Learned

This project helped me strengthen my understanding of modern React development.

### ⚛️ React

* Functional components
* Component-based architecture
* Props
* State management
* React Hooks
* Conditional rendering
* Event handling

### 🛣️ React Router

* `Routes`
* `Route`
* `Navigate`
* Client-side navigation
* Nested application layouts
* Route-based page rendering

### 🎨 Frontend Development

* Responsive layouts
* Sidebar navigation
* Dashboard UI
* Component organization
* CSS architecture
* User experience design

---

## 🔮 Future Improvements

Synapse AI is designed to eventually become a complete AI productivity platform.

### 🤖 AI Integration

* Connect real AI models
* Multiple AI model selection
* Streaming AI responses
* Conversation context
* AI-powered document analysis

### 👤 Authentication

* User registration
* Login/logout
* Protected routes
* User profiles
* Session management

### 💬 Chat

* Persistent conversations
* Message editing
* Message regeneration
* Copy responses
* Markdown support
* Code syntax highlighting

### 📄 Documents

* File uploads
* PDF support
* Document search
* AI document summarization
* Document-based conversations

### 📝 Notes

* Create, edit, and delete notes
* Rich text editor
* Search notes
* AI-powered summaries
* Organize notes with tags

### 🗄️ Backend

* Node.js backend
* Express.js API
* PostgreSQL database
* User data persistence
* Conversation storage
* Document storage

### 🔐 Security

* Authentication
* Authorization
* Secure API endpoints
* Input validation
* Protected user data

---

## 🧪 Development Goals

The long-term goal of this project is to transform Synapse AI from a frontend prototype into a complete full-stack AI productivity platform.

```text
React Frontend
      ↓
Node.js + Express
      ↓
REST API
      ↓
PostgreSQL
      ↓
AI Model APIs
```

---

## 📈 Project Status

**Current Status:** 🚧 In Development

The current version focuses primarily on the frontend architecture, UI, navigation, and application structure.

Backend services, persistent storage, authentication, and real AI integrations can be added as the project evolves.

---

## 🎯 Learning Journey

Synapse AI is part of my journey from **Frontend Development → Full-Stack Development → AI Application Development**.

The project allows me to combine the technologies I'm learning into one larger application rather than building only small isolated projects.

---

## 👨‍💻 Author

**Ravi Kumar**

Frontend Developer & aspiring Full-Stack Developer.

Currently learning:

* ⚛️ React
* 🟢 Node.js
* 🚂 Express.js
* 🐘 PostgreSQL
* 🤖 AI Integration
* 🌐 Full-Stack Development

---

## ⭐ Support

If you like **Synapse AI**, consider giving the repository a ⭐ on GitHub.

Your support helps motivate continued development and learning! 🚀

---

## 📄 License

This project is currently intended for **learning and educational purposes**.

A formal open-source license can be added as the project develops.
