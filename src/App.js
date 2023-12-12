import './App.css';
import { Routes, Route } from 'react-router-dom';
import Account from './components/mainpages/accountpage/AccountTab'
import Picking from './components/mainpages/pickingpage/PickingTab';
import Spraying from './components/mainpages/sprayingpage/SprayingTab';
import Planting from './components/mainpages/plantingpage/PlantingTab';
import Footer from './components/AppFooter';
import HomeTab from './components/mainpages/homepage/HomeTab';

function App() {
  return (
    <div className="Home-page">
        <Routes>
          <Route path="/" element={<HomeTab/>}/>
          <Route path="/planting" element={<Planting/>}/>
          <Route path="/spraying" element={<Spraying/>}/>
          <Route path="/picking" element={<Picking/>}/>
          <Route path="/account" element={<Account/>}/>
        </Routes>
        <Footer />
    </div>
  );
}

export default App;
