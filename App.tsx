import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Walkthrough from './pages/Walkthrough';
import Characters from './pages/Characters';
import Techs from './pages/Techs';
import Endings from './pages/Endings';

const App: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="walkthrough" element={<Walkthrough />} />
          <Route path="characters" element={<Characters />} />
          <Route path="techs" element={<Techs />} />
          <Route path="endings" element={<Endings />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default App;