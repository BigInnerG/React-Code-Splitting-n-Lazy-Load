import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route,Routes,  Link } from 'react-router-dom';
import './App.css'


// Lazy load the components
//This is used to dynamically import the HomePage and AboutPage components. 
// These components will only be loaded when the user navigates to them, not on the initial load.
const HomePage = lazy(() => import('./HomePage.jsx'));
const AboutPage = lazy(() => import('./AboutPage.jsx'));
const ContactPage = lazy(() => import('./ContactPage.jsx'));


 
const App = () => {
  return (
    <Router>
      <div>
        <h1>Code Splitting Example with React</h1>
        <nav>
          <ul id="navBar">
            <li>
              <Link to="/">|| Home |</Link>
            </li>
            <li>
              <Link to="/about"> | About | </Link>
            </li>
            <li>
              <Link to="/contact"> |  Contact ||</Link>
            </li>
          </ul> 
        </nav>
 
        {/* Suspense with fallback while the page is loading */}
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/about" element={<AboutPage/>} />
            <Route path="/contact" element={<ContactPage/>} />
          </Routes>
        </Suspense>
      </div>
      </Router>
   
  );
};
 
export default App;