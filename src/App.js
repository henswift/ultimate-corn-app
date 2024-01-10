import React, { useReducer } from 'react';
import { Routes, Route } from 'react-router-dom';
import { AppContext, initAppObject } from './store/AppContext';
import appReducer from './store/appReducer';
import Header from './globalcomponants/header/AppHeader';
import Footer from './globalcomponants/footer/AppFooter';
import HomeTab from './pages/homepage/HomeTab';
import Account from './pages/accountpage/AccountTab'
import Spraying from './pages/sprayingpage/SprayingTab';
import Picking from './pages/pickingpage/PickingTab';
import PlantingTab from './pages/plantingpage/PlantingTab';
import AddPlantings from './pagecomponents/AddPlantings';
import AddSections from './pagecomponents/AddSections';
import useGetAndSortSections from './hooks/useGetAndSortSections';
import ViewPlanting from './pagecomponents/ViewPlanting';
import ViewSection from './pagecomponents/ViewSection';
import ScrollToTop from './pagecomponents/ScrollToTop';
import './Global.css';

function App() {
  let [app, setApp] = useReducer(appReducer, initAppObject);

  useGetAndSortSections(setApp);

  return (
    <AppContext.Provider value={{app, setApp}}>      
      <div className="homePage">
          <ScrollToTop/>
          <Header/>
          <Routes>
            <Route path="/" element={<HomeTab/>}/>
            <Route path="/planting" element={<PlantingTab/>}/>
            <Route path="/add-planting" element={<AddPlantings/>}/>
            <Route path="/add-section" element={<AddSections/>}/>
            <Route path="/planting/:id" element={<ViewPlanting/>}/>
            <Route path="/section/:id" element={<ViewSection/>}/>
            <Route path="/spraying" element={<Spraying/>}/>
            <Route path="/picking" element={<Picking/>}/>
            <Route path="/account" element={<Account/>}/>
          </Routes>
          <Footer/>
      </div>
      {app.plantingToEdit ? <div> Editing... {app.plantingToEdit.name}</div> : null}
      {app.plantingToEdit && <div>Editing Again...</div>}
    </AppContext.Provider>
  );
};

export default App;
