import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Stacks from './pages/Stacks';
import Projects from './pages/Projects';
import About from './pages/About';
import Header from './components/Header';
import Provider from './context/Provider';
import GlobalStyle from './util/GlobalStyled'


function App() {
  return (
    <div>
      <Provider>
        <GlobalStyle/>
        <Header />
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
