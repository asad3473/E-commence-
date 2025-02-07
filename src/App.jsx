import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Footter from './Components/Footter';
import Home from './Components/Home/Home';
import Store from './Pages/Store';
import LogIn from './Pages/LogIn';
import SignUp from './Pages/SignUp';
import AllShops from './Components/Shop/AllShops';
import Blogs from './Components/Blogs/Blogs';
import Blogss from './AdminDashboard/Page/Blogss';
import ContactUs from './Components/Contact/ContactUs';
import AddCart from './Pages/AddCart';
import Admin from './AdminDashboard/Components/Admin';
import Orders from './AdminDashboard/Page/Orders';
import Products from './AdminDashboard/Page/Products';
import Users from './AdminDashboard/Page/Users';
import LoginProduct from './AdminDashboard/Page/LoginProduct';


function MainLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footter />
    </>
  );
}

function AdminLayout() {
  return <Outlet />;
}

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/blogs', element: <Blogs /> },
      { path: '/store', element: <Store /> },
      { path: '/shop', element: <AllShops /> },
      { path: '/contact', element: <ContactUs /> },
      { path: '/cart', element: <AddCart /> },
    ],
  },
  { path: '/signup', element: <SignUp /> },
  { path: '/login', element: <LogIn /> },
  {
    element: <AdminLayout />,
    children: [
      { path: '/admin', element: <Admin /> },
      { path: '/admin/blog', element: <Blogss /> },
      { path: '/admin/order', element: <Orders /> },
      { path: '/admin/product', element: <Products /> },
      { path: '/admin/LoginProduct', element: <LoginProduct /> },
      { path: '/admin/user', element: <Users /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
