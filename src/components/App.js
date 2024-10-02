import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '../styles/App.css';
import Home from './Home';
import Survey from './Survey';
import Header from'./Header';
import Freelance from './FreelanceForm/index';
import Client from './ClientForm/index';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/survey" element={<Survey />} />
        <Route path="/client" element={ <Client />} />
        <Route path="/freelance" element={ <Freelance /> } />
      </Routes>
    </Router>
  );
}

export default App;
