import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Stacks from './pages/Stacks';
import Projects from './pages/Projects';
import MediaQueryAbout from './components/MediaQueryAbout';
import Provider from './context/Provider';
import GlobalStyle from './util/GlobalStyled'
import MediaQueryHeader from './components/MediaQueryHeader'



function App() {
  return (
    <div>
      <Provider>
        <GlobalStyle/>
        <MediaQueryHeader/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/stacks' element={<Stacks />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/about' element={<MediaQueryAbout />} />
        </Routes>
      </Provider>
    </div>
  );
}

export default App;
