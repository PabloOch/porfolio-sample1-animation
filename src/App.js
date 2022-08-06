import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Stacks from './pages/Stacks';
import Projects from './pages/Projects';
import About from './pages/About';
import Header from './components/Header';
import { createGlobalStyle } from 'styled-components';
import Provider from './context/Provider';

const globalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: teal;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }
`;

function App() {
  return (
    <div>
      <Provider>
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
