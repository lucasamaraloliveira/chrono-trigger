import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Walkthrough from './pages/Walkthrough';
import Characters from './pages/Characters';
import Techs from './pages/Techs';
import Endings from './pages/Endings';
import Items from './pages/Items';
import Bestiary from './pages/Bestiary';
import Extras from './pages/Extras';
import Timeline from './pages/Timeline';
import Jukebox from './pages/Jukebox';
import Challenges from './pages/Challenges';
import Quiz from './pages/Quiz';

const App: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="walkthrough" element={<Walkthrough />} />
          <Route path="characters" element={<Characters />} />
          <Route path="items" element={<Items />} />
          <Route path="bestiary" element={<Bestiary />} />
          <Route path="techs" element={<Techs />} />
          <Route path="extras" element={<Extras />} />
          <Route path="timeline" element={<Timeline />} />
          <Route path="jukebox" element={<Jukebox />} />
          <Route path="challenges" element={<Challenges />} />
          <Route path="quiz" element={<Quiz />} />
          <Route path="endings" element={<Endings />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default App;