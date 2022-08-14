import { Routes, Route } from "react-router-dom";
import "./App.css";
import discord from "./Assets/Images/discord.png";
import github from "./Assets/Images/github.png";
import person from "./Assets/Images/person.png";
import About from "./Components/About";

function App() {
  return (
    <div className="container">
      <h1 className="title">kennedy</h1>

      <div className="socialLinks">
        <a href="https://discord.com/users/856336317197320222">
          <img id="imgDiscord" src={discord} />
        </a>
        <a href="https://github.com/KennedyReisz">
          <img id="imgGithub" src={github} />
        </a>
        <a href="/about">
          <img id="imgPerson" src={person} />
        </a>
      </div>

      <Routes>
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
