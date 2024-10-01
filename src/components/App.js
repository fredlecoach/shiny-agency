import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '../styles/App.css';
import Home from './Home';
import Survey from './Survey';
import Header from'./Header';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/survey" element={<Survey />} />
      </Routes>
    </Router>
  );
}

export default App;
