import React from 'react';
import './App.css';
import HeaderContainer from './components/HeaderComponents/HeaderTitle';
import CardContainer from './components/CardComponents/CardContainer';
import ImageThumbnail from './components/HeaderComponents/ImageThumbnail';
import HeaderTitle from './components/HeaderComponents/HeaderTitle';
import HeaderContent from './components/HeaderComponents/HeaderContent';
import CardBanner from './components/CardComponents/CardBanner';
import CardContent from './components/CardComponents/CardContent';


const App = () => {
  return (
    <div className="container">
    {/* <HeaderContainer /> */}
    <HeaderTitle />
    <HeaderContent />
    <CardContainer />
    {/* <CardBanner /> */}
    {/* <CardContent /> */}
     
    </div>
  );
};

export default App;
