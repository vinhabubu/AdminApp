import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsUser } from './redux/slice/selectors';

import Sidebar from './components/sidebar/Sidebar';
import Topbar from './components/topbar/Topbar';
import Home from './pages/home/Home';
import UserList from './pages/userList/UserList';
import User from './pages/user/User';
import NewUser from './pages/newUser/NewUser';
import ProductList from './pages/productList/ProductList';
import Product from './pages/product/Product';
import NewProduct from './pages/newProduct/NewProduct';
import Login from './pages/login/Login';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const isUserData = useSelector(selectIsUser);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          element={isUserData ? <Navigate to="/" replace /> : <Login />}
        />

        {isUserData ? (
          <Route
            path="/"
            element={
              <>
                <Topbar />
                <div className="container">
                  <Sidebar />
                  <Outlet /> 
                  <Routes>
                    <Route index element={<Home />} />
                    <Route path="users" element={<UserList />} />
                    <Route path="user/:userId" element={<User />} />
                    <Route path="newUser" element={<NewUser />} />
                    <Route path="products" element={<ProductList />} />
                    <Route path="product/:productId" element={<Product />} />
                    <Route path="newproduct" element={<NewProduct />} />
                  </Routes>
                
                </div>
              </>
            }
          />
        ) : (
          <Route path="*" element={<Navigate to="/login" replace />} />
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default App;