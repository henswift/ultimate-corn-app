import './App.css';
import { Routes, Route } from 'react-router-dom';
import Account from './components/AccountTab';
import Picking from './components/PickingTab';
import Spraying from './components/SprayingTab';
import Planting from './components/PlantingTab';
import Header from './components/AppHeader';
import Footer from './components/AppFooter';
import HomeTab from './components/HomeTab';

function App() {
  return (
    <div className="Home-page">
        <Header />
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
