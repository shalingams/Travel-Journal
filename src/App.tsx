import './App.css';
import Header from './components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import Login from './components/Login';
import SignUp from './components/SignUp';
import About from './Pages/About';
import Contact from './Pages/Contact';
import NoPage from './Pages/NoPage';
import Profile from './Pages/Profile';
import NewPost from './Pages/NewPost';
import Search from './Pages/Search';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="login" element={<Login />} />
          <Route path="sign-up" element={<SignUp />} />
          <Route path="profile" element={<Profile />} />
          <Route path="users/:username" element={<Profile />} />
          <Route path="posts/new" element={<NewPost />} />
          <Route path="search" element={<Search />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
