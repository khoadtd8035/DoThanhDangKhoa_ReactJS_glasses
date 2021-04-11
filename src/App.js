import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import GlassList from "./components/GlassList";

function App() {
  return (
    <section className="glasses-app bg-dark" style={{ height: "100vh" }}>
      <Header />
      <div className="d-flex justify-content-center align-items-center">
          <div className="container row">
              <GlassList/>
          </div>
      </div>
    </section>
  );
}

export default App;
