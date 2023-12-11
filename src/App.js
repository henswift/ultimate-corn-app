import './App.css';
import { Routes, Route } from 'react-router-dom';
import Account from './components/AccountTab';
import Picking from './components/PickingTab';
import Spraying from './components/SprayingTab';
import Planting from './components/PlantingTab';
import Header from './components/AppHeader';
import Footer from './components/AppFooter';

function App() {
  return (
    <div className="App-header">
        <Header />
        <Routes>
          <Route path="/" element={<Planting/>}/>
          <Route path="/blogs" element={<Spraying/>}/>
          <Route path="/blog/" element={<Picking/>}/>
          <Route path="/users" element={<Account/>}/>
        </Routes>
        <Footer />
    </div>
  );
}

export default App;
