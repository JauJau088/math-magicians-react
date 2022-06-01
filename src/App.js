import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Calculator from './components/Calculator';
import Quotes from './pages/Quotes';
import Error from './pages/Error';

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} exact />
      <Route path="/calculator" element={<Calculator />} exact />
      <Route path="/quotes" element={<Quotes />} exact />
      <Route path="*" element={<Error />} />
    </Routes>
  </Router>
);

export default App;
