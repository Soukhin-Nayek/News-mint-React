
import './App.css';

import React, { Component } from 'react';
import {
  HashRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Navbar from './component/Navbar';
import News from './component/News';
export class App extends Component {
  render() {
    return (
      <>
      <Router>
        <div>
          <Navbar/>
          <Routes>
            <Route exact path="/" element={< News key="home" pagesize={6} country="in" category="general"/>} />
            <Route exact path="/business" element={< News key="business" pagesize={6} country="in" category="business"/>} />
            <Route exact path="/entertainment" element={< News key="entertainment" pagesize={6} country="in" category="entertainment"/>} />
            <Route exact path="/general" element={< News key="general" pagesize={6} country="in" category="general"/>} />
            <Route exact path="/health" element={< News key="health" pagesize={6} country="in" category="health"/>} />
            <Route exact path="/science" element={< News key="science" pagesize={6} country="in" category="science"/>} />
            <Route exact path="/sports" element={< News key="sports" pagesize={6} country="in" category="sports"/>} />
            <Route exact path="/technology" element={< News key="technology" pagesize={6} country="in" category="technology"/>} />
          </Routes>
        </div>
      </Router>
    </>
    )
  }
}

export default App;