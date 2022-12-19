import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./assets/App.scss";

import Home from "./screens/Home/Home";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
