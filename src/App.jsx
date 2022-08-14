import "./App.css";
import discord from "./Assets/Images/discord.png";
import github from "./Assets/Images/github.png";

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
      </div>
    </div>
  );
}

export default App;
