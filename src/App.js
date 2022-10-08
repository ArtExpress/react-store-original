import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Home from './components/pages/Home';



function App() {
  return (
    <div className="app">
      <Router>
          <Nav />
            <Routes>
              <Route path="/" exact element={<Home />} />
            </Routes>
          <Footer />
      </Router>
    </div>
  );
}

export default App;
