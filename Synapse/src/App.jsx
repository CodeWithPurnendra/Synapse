import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import './App.css';
import Sidebar from './Components/SideBar/SideBar';
import TopNavBar from './Components/TopNavBar/TopNavBar';
import Home from './Components/Pages/Home/Home';
import Chat from './Components/Pages/Chat/Chat';
import History from './Components/Pages/History/History';
import Favorites from "./Components/Pages/Favorites/Favorites";
import Documents from "./Components/Pages/Documents/Documents";
import Notes from './Components/Pages/Notes/Notes';
import Settings from './Components/Pages/Settings/Settings';

function App() {
    return (
        <div className="app">
            <Sidebar />
            <div className="app-content">
                <TopNavBar />
                <main className="page-content">
                    <Routes>

                        <Route
                            path="/"
                            element={<Navigate to="/home" replace />}
                        />

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

                        <Route
                            path="/favorites"
                            element={<Favorites />}
                        />

                        <Route
                            path="/documents"
                            element={<Documents />}
                        />

                        <Route
                            path="/notes"
                            element={<Notes />}
                        />

                        <Route
                            path="/settings"
                            element={<Settings />}
                        />

                    </Routes>
                </main>

            </div>

        </div>
    );
}

export default App;