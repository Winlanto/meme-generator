import "./App.css";
import { useState, useEffect } from "react";

export default function App() {
  const [isRandom, setIsRandom] = useState(false);
  const [memeCounter, setMemeCounter] = useState(0);
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    imageUrl: "https://i.imgflip.com/1bij.jpg",
  });

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => {
        setMeme((prevMeme) => ({
          ...prevMeme,
          imageUrl: data.data.memes[memeCounter].url,
        }));
      });
  }, [memeCounter]);

  function handleSubmit(e) {
    e.preventDefault();
    const randomIndex = Math.floor(Math.random() * 100);
    if (isRandom) {
      setMemeCounter(randomIndex);
    } else {
      setMemeCounter((prevCounter) => {
        const newCounter = prevCounter + 11;
        return newCounter % 100; //
      });
    }
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

          <div className="form-group">
            <label htmlFor="random">Random</label>
            <input
              type="checkbox"
              id="random"
              name="random"
              onChange={(e) => setIsRandom(e.target.checked)}
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
