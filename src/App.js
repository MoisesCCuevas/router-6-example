import { HashRouter, Routes, Route } from 'react-router-dom';
import Menu from './componets/Menu';
import HomePage from './componets/HomePage';
import Blog from './componets/Blog';
import BlogPost from './componets/BlogPost';
import Profile from './componets/Profile';
import Login from './componets/LoginPage';
import Logout from './componets/LogoutPage';
import AuthProvider from './context/auth';
import AuthRoute from './componets/AuthRoute';
import './App.css';

function App() {
  return (
    <>
      <HashRouter>
        <AuthProvider>
          <Menu />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/blog" element={<Blog />} >
              <Route path=":slug" element={<BlogPost />} />
            </Route>
            {/* <Route path="/blog/:slug" element={<BlogPost />} /> */}
            <Route path="/login" element={<Login />} />
            <Route
              path="/logout"
              element={
                <AuthRoute>
                  <Logout />
                </AuthRoute>
              }
            />
            <Route
              path="/profile"
              element={
                <AuthRoute>
                  <Profile />
                </AuthRoute>
              }
            />
            <Route path="*" element={<p>Not found</p>} />
          </Routes>
        </AuthProvider>
      </HashRouter>
    </>
  );
}

export default App;
