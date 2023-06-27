import Sidebar from './components/sidebar/Sidebar';
import Topbar from './components/topbar/Topbar';
import './App.css';
import Home from './pages/home/Home';
import { BrowserRouter, Routes, Route, Navigate , Outlet} from 'react-router-dom';
import UserList from './pages/userList/UserList';
import User from './pages/user/User';
import NewUser from './pages/newUser/NewUser';
import ProductList from './pages/productList/ProductList';
import Product from './pages/product/Product';
import NewProduct from './pages/newProduct/NewProduct';
import Login from './pages/login/Login';

function App() {
  const user = false;

  const SidebarLayout = () => (
    <>
      <Sidebar />
      <Outlet />
    </>
  );
  return (
    <BrowserRouter>
      {/* <Route path="/login" element={user ? <Navigate to="/" /> : <Login />}></Route> */}

      <>
        <Topbar />
        <div className='container'>
          {/* <Sidebar /> */}

          <Routes>
            <Route path="/login" element={user ? <Navigate to="/" /> : <Login />}></Route> 
            <Route element={<SidebarLayout />}>
              
            <Route exact path='/' element={<Home />} />

            <Route path='/users' element={<UserList />} />

            <Route path='/user/:userId' element={<User />} />

            <Route path='/newUser' element={<NewUser />} />

            <Route path='/products' element={<ProductList />} />

            <Route path='/product/:productId' element={<Product />} />
            <Route path='/newproduct' element={<NewProduct />} />
            </Route>
          </Routes>
        </div>
      </>
    </BrowserRouter>
  );
}

export default App;
