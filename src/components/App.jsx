import "./App.css";
import { useState } from "react";

export default function App() {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    imageUrl: "https://i.imgflip.com/1bij.jpg",
  });

  function handleSubmit(e) {
    e.preventDefault();
  }

  function handleChange(e) {
    const { name, value } = e.currentTarget;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
    console.log(value);
  }

  return (
    <main className="main-content">
      <div className="container">
        <form className="meme-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="top-text">Top Text</label>
            <input
              type="text"
              id="top-text"
              name="topText"
              placeholder="One does not simply"
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="bottom-text">Bottom Text</label>
            <input
              type="text"
              id="bottom-text"
              name="bottomText"
              placeholder="Walk into Mordor"
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="submit-btn">
            Generate Meme 🖼️
          </button>
        </form>
        <div className="meme">
          <img src={meme.imageUrl} alt="Meme Preview" className="meme-image" />
          <span className="meme-text top">{meme.topText}</span>
          <span className="meme-text bottom">{meme.bottomText}</span>
        </div>
      </div>
    </main>
  );
}
