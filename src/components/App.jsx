import "./App.css";

export default function App() {
  function handleSubmit(e) {
    e.preventDefault();
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
            />
          </div>

          <div className="form-group">
            <label htmlFor="bottom-text">Bottom Text</label>
            <input
              type="text"
              id="bottom-text"
              name="bottomText"
              placeholder="Walk into Mordor"
            />
          </div>

          <button type="submit" className="submit-btn">
            Generate Meme 🖼️
          </button>
        </form>
      </div>
    </main>
  );
}