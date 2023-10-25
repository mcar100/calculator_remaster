import "./App.css";
import Calculator from "./pages/Calculator";

function App() {
  return (
    <div className="body-container">
      <header className="container">
        <h2>Calculator Remaster</h2>
      </header>
      <main className="container">
        <Calculator />
      </main>
      <footer className="container"></footer>
    </div>
  );
}

export default App;
