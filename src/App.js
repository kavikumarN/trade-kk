import React from "react";
import "./App.css";
import MenuBar from "./MenuBar";
import Wallet from "./Wallet";
import SimpleDealingRates from "./SimpleDealingRates";


class App extends React.Component {

  render() {

    return (

      <div className  = 'app' >

      	  <MenuBar className = "menubar" id = "menubar" />    

          <Wallet className = "wallet" id = "wallet" />

          <SimpleDealingRates className = "simpledealingrates" id = "simpledealingrates" />
         
          


        </div>
     
    );
  }
}

export default App;
