import NavBar from "./components/Navbar/NavBar";
import "./css/layout.scss";
import HomePage from "./routes/HomePage/HomePage";

function App() {
  return (
    <div className="layout">
      <div className="navBar">
        <NavBar />
      </div>
      <div className="content">
        <HomePage />
      </div>
    </div>
  );
}

export default App;
