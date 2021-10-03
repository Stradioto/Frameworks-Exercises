import React from 'react';
import './App.css';
import Header from './components/Header';
import LastNews from './components/LastNews';
import MainNews from './components/MainNews';
import SideNews from './components/SideNews';

function App() {
  return (
    <div>
      <Header />
      <LastNews LastNewsTitle="ULKOMAAT:" LastNewsText=" Jalanjälkilöydös voi mullista käsityksen Amerikan asuttamisesta"/>
      <LastNews LastNewsTitle="MAINOS:" LastNewsText=" Lunasta kaksi viikoa maksutonta lukuaikaa!"/>
      <LastNews LastNewsTitle="PÄIVÄN TIMANTTI:" LastNewsText=" Vuosia koditoomana ollut Seppo Bollström pälyili varjoista nälkäisenä Kampissa olluta kahvilaa - Sitten yrittäjä teki eleen, josta alkoi hedelmällinen yhteistyö"/>
        <div className="BodyNews">
          <div>
          <MainNews newsHeader="Älypuhelimet" img="https://hs.mediadelivery.fi/img/658/c489e6ffdd9ae8bd47d04cade1905fcc.jpg.webp" newsTitle="Kommentti | " newsText="Iphonessa ei todennäköisesti koskaan nähdä EU:n vaatimaa yhtenäistä lataus­porttia" date="Talous 24.9."/>
          <MainNews newsTitle="Apple | " newsText="Apple moittii EU-komissiota: Latureiden yhtenäistämiseen tähtäävä lakiesitys tukahduttaa innovaatioita" date="Talous 24.9. 13:08"/>
          <MainNews newsTitle="Lauantaivieras | " newsText="Ministeri Jari Leppä sanoo ”ei” maatalouden päästövähennys­tavoitteelle" date="Talous 6:03"/>
          </div>
          <div className="side">
          <SideNews sidetitle="Luetuimmat" number="1" sideTitle="Kirjeenvaihtajan kommentti | " sideText="Britanniassa jonotetaan nyt bensiiniä, eikä se ole yllätys – Brexitin myötä pulasta on tullut osa arkea"/>
          <SideNews number="2" sideTitle="Luonnonkatastrofit | " sideText="Tulivuoren­purkaus kiihtyi Kanarian La Palmalla, sammuttajat joutuivat perääntymään, lentokenttä on suljettu – suora lähetys käynnissä"/>
          <SideNews number="3" sideTitle="Perhe | " sideText="Pakko olla paljaat nilkat ja sama hiustyyli kuin kavereilla – Kun lapsi janoaa muiden hyväksyntää, vanhemman kannattaa havahtua"/>
          </div>
        </div>
    </div>
  );
}

export default App;
