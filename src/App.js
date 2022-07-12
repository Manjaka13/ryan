import "./App.css";
import "./Card.css";
import "./Balloons.css";

function App() {
  return (
    <div className="app">
      <canvas id="confetti"></canvas>
      <div className="container">
        <div className="balloon">
          <div>
            <span>R</span>
          </div>
          <div>
            <span>Y</span>
          </div>
          <div>
            <span>A</span>
          </div>
          <div>
            <span>N</span>
          </div>
        </div>
      </div>
      <div className="card">
        <p className="card__wish">
          Pour l'obtention de ton brevet, nous te souhaitons plein de réussite dans tout ce que tu entreprendras. De la part de tout le monde, bravo !
        </p>
        <h1 className="card__title">Ryan Rasamoelina</h1>
      </div>
      <div className="lottie-container">
        <iframe
          className="lottie"
          src="https://embed.lottiefiles.com/animation/61257"
        ></iframe>
      </div>
    </div>
  );
}

export default App;
