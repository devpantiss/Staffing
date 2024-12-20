import "./App.css";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NanoContractors from "./pages/NanoContractors";
import Businesses from "./pages/Businesses";
import Workers from "./pages/Workers";


function App() {
  return (
    <div>
      <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/for-nano-contractors" element={<NanoContractors />}/>
        <Route path="/for-businesses" element={<Businesses />}/>
        <Route path="/for-workers" element={<Workers />}/>
      </Routes>
      <Footer />
      </Router>
    </div>
  );
}

export default App;
