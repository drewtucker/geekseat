import React from 'react';
import ReactDOM from "react-dom";
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import MainFeed from './MainFeed';

function App(){
  return (
    <div>
      <Header/>
      <MainFeed/>
    </div>
  );
}

export default App;
