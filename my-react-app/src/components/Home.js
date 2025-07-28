//this will be the home page with the search bar and teh component cateogires underneath. 
// once a user presses enter on a search, they are taken to a chat-bot like search page
// src/Home.js
import React from "react";
import SearchBar from "./SearchBar";
import "../App.css";
import NavBar from "./NavBar";

function Home( { user }) {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Welcome, {user}!</h2>
      </header>
      <div class="body-section">
        <img src="/promptype_logo.png" className="logo" alt="logo" />
        <img src="/promptype_slogan.png" className="logo2" alt="slogan" />
        <SearchBar/>
        {/* include the categories underneath now */}
      </div>
    </div>
  );
}

export default Home;
