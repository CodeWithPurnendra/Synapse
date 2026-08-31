import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Sidebar from './Components/SideBar/SideBar';
import Home from './Components/Pages/Home/Home';
import TopNavBar from './Components/TopNavBar/TopNavBar';
import './App.css';

const Chat = () => <div>Chat Page Content</div>;
const History = () => <div>History Content</div>;
const Favorites = () => <div>Favorites Content</div>;
const Documents = () => <div>Documents Content</div>;
const Notes = () => <div>Notes Content</div>;
const Settings = () => <div>Settings Page Content</div>;

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