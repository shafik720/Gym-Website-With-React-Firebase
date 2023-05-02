import logo from './logo.svg';
import './App.css';
import Footer from './Pages/Footer/Footer';
import Home from './Pages/Home/Home';
import { Route, Routes, useLocation } from 'react-router';
import Error from './Pages/Error/Error';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './Pages/Header/Header';
import Navbar from './Pages/Header/Navbar';


function App() {
  const location = useLocation();
  return (
    <div>    
    {location.pathname !== '/' && <Navbar />}
      <Routes>
        <Route path="/" element={<Home></Home>} ></Route>
        <Route path="/login" element={<Login></Login>} ></Route>
        <Route path="/register" element={<Register></Register>} ></Route>
        <Route path="*" element={<Error></Error>} ></Route>
      </Routes>
      <Footer></Footer>

      <ToastContainer />
    </div>
  );
}

export default App;
