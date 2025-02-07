import React from "react";
import { BrowserRouter as Router, Route,Routes } from "react-router-dom";
import Layout from "./layouts/layouts";
import Home from "./pages/Home";
const App = () => {
  return <div>
      <Router>
      <Routes>
        {/* Parent route with Layout */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} /> {/* Default route */}
          {/* <Route path="about" element={< />} />
          <Route path="contact" element={<Contact />} /> */}
        </Route>
      </Routes>
    </Router>
  </div>;
};

export default App;
