import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import './App.css';
import Counter from './components/Counter';
import Layout from './components/Layout';
import MainContent from './components/MainContent';
import NewCounter from './components/NewCounter';
import NewUserInfo from './components/NewUserInfo';
import UserInfo from './components/UserInfo';
import UserList from './components/UserList';
import AboutPage from './pages/AboutPage';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';

function App() {
  return (
    <BrowserRouter>
      <div className="pages">
        <div className="page-header">
          <NavLink to="/" activeclassname="active">
            Home
          </NavLink>{' '}
          <NavLink to="/product" activeclassname="active">
            Product
          </NavLink>{' '}
          <NavLink to="/about" activeclassname="active">
            About
          </NavLink>
        </div>
        <div className="page-content">
          <Routes>
            <Route path="/about" element={<AboutPage />}></Route>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/product/:id" element={<ProductPage />}></Route>
            <Route path="/product" element={<ProductPage />}></Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
