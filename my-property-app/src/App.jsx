import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginSignup from './components/SignIn';
import PropertyCard from "./components/PropertyCard";
import HeroSection from './components/HeroSection';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HeroSection />} />
        <Route path="/login" element={<LoginSignup />} />
        <Route path="/Property" element={<PropertyCard />} />
        {/* Other routes */}
      </Routes>
    </Router>
  );
}

export default App;
