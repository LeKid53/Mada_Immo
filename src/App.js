// App.js
import React from 'react';
import './styles/App.css';
import Header from './components/Header/Header';
import Accueil from './components/Home/Accueil';
import Center from './components/Centre/Centre';
import Proprietes from './components/Proprietes/Propietes';
import Portofolio from './components/Portofolio/Portofolio';
import Reviews from './components/Reviews/Reviews';
import Questions from './components/Questions/Questions';
import Subscribe from './components/Subscribe/Subscribe';
import Footer from './components/Footer/Footer';
//import RechercheBar from './components/pages/RechercheBar';

function App() {
  return (
    <div className="App">
      <Header />
      <Accueil />
      <Center />
      <Proprietes/>
      <Portofolio/>
      <Reviews/>
      <Questions/>
      <Subscribe/>
      <Footer/>
    </div>
  );
}

export default App;
