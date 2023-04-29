import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Stacks from './pages/Stacks';
import Projects from './pages/Projects';
import About from './pages/About';
import Provider from './context/Provider';
import GlobalStyle from './util/GlobalStyled'
import MediaQuery from './components/MediaQuery'



function App() {
  return (
    <div>
      <Provider>
        <GlobalStyle/>
        <MediaQuery/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/stacks' element={<Stacks />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </Provider>
    </div>
  );
}

export default App;
