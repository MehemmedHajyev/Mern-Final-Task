import { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Loading from './components/Loading';
import Faq from './pages/Faq/Faq';
import Contact from './pages/Contact/Contact';
import About from './pages/About/About';
import Products from './pages/Product/Products';

export default function App() {
  const [loading, setLoading] = useState(true);

  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);


    return () => clearTimeout(timer);
  }, [location]);

  if (loading) {
    return <Loading />;
  }

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />

        <Route path="/faq" element={<Faq />} />

        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />






        {/* Əlavə marşrutlar bura əlavə edilə bilər */}
      </Route>

      <Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>


      {/* 404 səhifəsi və digər yollar üçün marşrutlar burada yerləşdirilməlidir */}
    </Routes>
  );
}
