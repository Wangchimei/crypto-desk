import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home, Cryptocurrencies, CryptoDetails, News } from "./components";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cryptocurrencies" element={<Cryptocurrencies />} />
        <Route path="/crypto/:coinId" element={<CryptoDetails />} />
        <Route path="/news" element={<News />} />
      </Routes>
    </div>
  );
}

export default App;
