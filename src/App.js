import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Projects from './pages/Projects';
import Home from './pages/Home';
import Experience from './pages/Experience';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProjectDisplay from "./pages/ProjectDisplay";
import { Helmet } from 'react-helmet';

function App() {
  return (
    <div className='App'>
      <Helmet>
        <title>Ezzat Makar | Software Engineer Portfolio</title>
        <meta name="description" content="Welcome to Ezzat Makar's personal portfolio website! As a passionate software engineer, I showcase my latest projects, skills, and experiences in the world of software development." />
        <meta name="keywords" content="Ezzat Makar, software engineer, portfolio, projects, web development, mobile development, software solutions, technology, innovation, creativity" />
      </Helmet>
      <Router>
        <Navbar />
        <Routes >
          <Route path='/' element={<Home />} />
          <Route path='/projects' element={<Projects />} />
          <Route path="/project/:slug" element={<ProjectDisplay />} />
          <Route path='/experience' element={<Experience />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
