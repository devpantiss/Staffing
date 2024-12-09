import "./App.css";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";


function App() {
  return (
    <div>
      <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />}/>
      </Routes>
      <Footer />
      </Router>
    </div>
  );
}

export default App;
