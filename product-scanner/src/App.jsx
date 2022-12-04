import QRGenerator from './components/QRGenerator'
import QRReader from './components/QRReader';
import Navbar from './components/Navbar'
import InvalidPage from './components/InvalidPage';
import Home from './components/Home';
import LoginForm from './components/LoginForm';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './index.css';

function App() {
  return (
      <>
       <Router>
        <Routes>
        <Route path="/" element={<Navbar />}>
        <Route path="/home" element={<Home />} />
          <Route path="/scan" element={<QRReader />} />
          <Route path="/generate" element={<QRGenerator />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="*" element={<InvalidPage />} />
        </Route>
        </Routes>
      </Router>
      </>
  );
}

export default App;
