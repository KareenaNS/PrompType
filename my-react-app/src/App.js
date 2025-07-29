import './App.css';
import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import '@visa/nova-styles/styles.css';
import '@visa/nova-styles/themes/visa-light/index.css';
import SearchBar from "./components/SearchBar";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Login from './components/Login';
import History from './components/History';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Results from './components/Results';
import Categories from "./components/Categories";

function App() {
  const [user, setUser] = useState(null);
    const [view, setView] = useState('login');
  const handleLogin = (email) => {
    setUser(email);
    setView('home'); 
  };
   const handleHomeClick = () => {
    setView('home');   };
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={user ? <Home user={user} /> : <Navigate to="/login" replace />}
        />
        <Route
          path="/login"
          element={<Login onLogin={handleLogin} />}
        />
        <Route
          path="/home"
          element={user ? <Home user={user} /> : <Navigate to="/login" replace />}
        />
        <Route
          path="/history"
          element={user ? <History /> : <Navigate to="/login" replace />}
        />
        <Route
          path="/results"
          element={user ? <Results /> : <Navigate to="/login" replace />}
        />
          <Route
          path="/categories"
          element={user ? <Categories /> : <Navigate to="/login" replace />}
        />
      </Routes>
    </Router>
  );
}

export default App;
