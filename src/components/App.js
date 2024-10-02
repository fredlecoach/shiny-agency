import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '../styles/App.css';
import Home from './Home';
import Survey from './Survey';
import Header from'./Header';
import Freelance from './FreelanceForm/index';
import Client from './ClientForm/index';
import Error from './Error'
import Results from './Results';
import Freelances from './Freelances'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/survey/:questionNumber" element={<Survey />} />
        <Route path="/client/:questionNumber" element={ <Client />} />
        <Route path="/freelance" element={ <Freelance /> } />
        <Route path="/results" element={ <Results />} />
        <Route path="/freelances" element={ <Freelances />} />
        <Route path="*" element={ <Error />} />
      </Routes>
    </Router>
  );
}

export default App;
