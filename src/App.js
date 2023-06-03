import {BrowserRouter as Router , Route, Routes } from 'react-router-dom';


import Main from './components/Main';

import Home from './components/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' Component={Home}/>
        <Route path='/main' Component={Main}/>
      </Routes>
    </Router>
  );
}

export default App;
