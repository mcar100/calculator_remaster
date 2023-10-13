import "./App.css";
import Home from "./pages/Home";

function App() {
  return (
    <div className="body-container">
      <header className="container">
        <h2>Calculator</h2>
      </header>
      <main className="container">
        <Home />
      </main>
      <footer className="container"></footer>
    </div>
  );
}

export default App;
