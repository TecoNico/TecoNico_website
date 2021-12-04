import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes,Route} from "react-router-dom";
import { s1route } from './Component/s1route';
import { s2route } from './Component/s2route';
import { s3route } from './Component/s3route';
import { s4route } from './Component/s4route';

function App() {
  return (
    <Router>
      <div className="Light">
      <Routes>
        <Route path="/" element={<s1route />} />
        <Route path="/s2route" element={<s2route />} />
        <Route path="/s3route" element={<s3route />} />
        <Route path="/s4route" element={<s4route />} />
      </Routes>
      </div>
    </Router>
  );
}

export default App;
