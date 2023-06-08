import { HashRouter, Routes, Route } from 'react-router-dom';
import Menu from './componets/Menu';
import HomePage from './componets/HomePage';
import Blog from './componets/Blog';
import Profile from './componets/Profile';
import './App.css';

function App() {
  return (
    <>
      <HashRouter>
        <Menu />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<p>Not found</p>} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
