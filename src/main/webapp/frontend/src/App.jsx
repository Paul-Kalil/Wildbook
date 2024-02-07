import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';import About from './About';
import NotFound from './NotFound';
import Home from './Home';
import { Link } from 'react-router-dom';


import './App.css';

function App() {
  return (
    <div className="App">
      <h1>123</h1>
      {/* <Button> */}
        {/* <Link to="/wildbook/react/about">About</Link> */}
      {/* </Button> */}
      <Router>
        <Routes>
          <Route path="/wildbook/react/about" element={<About />} />
          <Route path="/wildbook/react" element={<Home />} />    
          <Route path="/wildbook/react/home" element={<Home />} />      
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>

      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          Tada~~~ 
        </h1>
        <a
          className="App-link"
          href="https://images.unsplash.com/photo-1533084417605-e538a510d50a?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hello World!
        </a>
      </header> */}
    </div>
  );
}

export default App;
