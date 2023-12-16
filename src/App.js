import './Global.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Account from './pages/accountpage/AccountTab'
import Picking from './pages/pickingpage/PickingTab';
import Spraying from './pages/sprayingpage/SprayingTab';
import PlantingTab from './pages/plantingpage/PlantingTab';
import Footer from './globalcomponants/footer/AppFooter';
import HomeTab from './pages/homepage/HomeTab';
import Header from './globalcomponants/header/AppHeader';

function App() {
  return (
    <div className="Home-page">
        <Header />
        <Routes>
          <Route path="/" element={<HomeTab/>}/>
          <Route path="/planting" element={<PlantingTab/>}/>
          <Route path="/spraying" element={<Spraying/>}/>
          <Route path="/picking" element={<Picking/>}/>
          <Route path="/account" element={<Account/>}/>
        </Routes>
        <Footer />
    </div>
  );
}

export default App;
