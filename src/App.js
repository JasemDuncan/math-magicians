import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from 'react-router-dom';
import Calculator from './pages/Calculator';
import Home from './pages/Home';
import Quotes from './pages/Quotes';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Router>
        <div className="main">
          <div className="headerNavList">
            <div className="header">
              Math Magicians
            </div>
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/Calculator">Calculator</Link>
                </li>
                <li>
                  <Link to="/Quotes">Quotes</Link>
                </li>
              </ul>
            </nav>

          </div>

          <Routes>
            <Route path="Calculator" element={<Calculator />} />
            <Route path="Quotes" element={<Quotes />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
