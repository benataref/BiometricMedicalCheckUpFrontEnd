import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Toaster } from 'react-hot-toast';
import Signup from './components/Login/Signup';
import Login from './components/Login/Login';
import Sidebar from './Table/Sidebar';
import Test from './components/test/Test';
import Vital from './components/vital/Vital';
import Vitaltest from './components/test/Vitaltest';
import Patient from './components/Patients/Patient';
import Labresult from './components/Labresualt/Labresult';
import Xray from './components/xray/Xray';
import Maglumi800 from './components/Maglumi800/Maglumi800';
import Mindray from './components/Mindray/Mindray';
import Verify from './components/Patients/Verify';
import Barcode from './components/Patients/Barcode';
import Reader from './components/barcodReader/Reader';
import BarcodeGenerator from './components/Patients/Barcode';
import './App.css';
//import './pdf-worker';
import HomePage from './Table/HomePage';
import '@fortawesome/fontawesome-free/css/all.min.css';
function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const authState = localStorage.getItem('isAuthenticated');
    setIsAuthenticated(authState === 'true');
  }, []);

  const handleLogin = () => {
    localStorage.setItem('isAuthenticated', 'true');
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    setIsAuthenticated(false);
  };


  return (
    <BrowserRouter>
      <Toaster />
{/*    {!isAuthenticated ? (
        <Routes>
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      ) : (   */}
        <div className="main-content-wrapper" style={{ display: 'flex', flex: 1, marginTop: '60px' }}> {/* Margin-top to accommodate Topbar height */}
          <Sidebar handleLogout={handleLogout} />
          <div className="main-content" style={{ flex: 1, padding: '1rem' }}>
            <Routes>
              <Route path="/" element={<Navigate to="/patient" />} />
              <Route path="/Vital" element={<Vital />} />  
           {/*    <Route path="/Signup" element={<Signup />} />  */}
              <Route path="/Maglumi800" element={<Maglumi800 />} />
              <Route path="/Mindray" element={<Mindray />} />
              <Route path="/Barcode" element={<Barcode />} />
              <Route path="/Patient" element={<Patient />} />
              <Route path="/Labresult" element={<Labresult />} />
              <Route path="/BarcodeGenerator" element={<BarcodeGenerator />} />
              <Route path="/Test" element={<Test />} />
              <Route path="/Xray" element={<Xray />} />
              <Route path="/Verify" element={<Verify />} />
              <Route path="/Vitaltest" element={<Vitaltest />} />
              <Route path="/Reader" element={<Reader />} />
              <Route path="/HomePage" element={<HomePage />} />
              <Route path="*" element={<Navigate to="/Patient" />} />
            </Routes>
          </div>
        </div>
     {/*   )}  */} 
    </BrowserRouter>
  );
}

export default App;
