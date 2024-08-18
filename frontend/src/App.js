//import logo from './logo.svg';
import "./App.css";
import Home from "./components/Home";
import Tweet from "./components/Tweet";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Nav />
        </header>
        <body className="App-body">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tweets" element={<Tweet />} />
          </Routes>
        </body>
      </div>
    </Router>
  );
}

export default App;
