import './App.css';
import React, {useState} from "react";
import Checkbox from "./components/Checkbox";
import {Input} from '@material-ui/core';

function App() {
  const [clicked, setClicked] = useState(false);
  return (
    <div className='App'>
      <header className="pageHeader">Header {React.version}
      </header>
      <article style={clicked ? {backgroundColor: 'green'} : {}} onClick={() => setClicked(!clicked)}
               className={clicked ? "clicked" : "mainArticle"}>{clicked ? "clicked Article" : "Article"} <Checkbox
        labelOn="On" labelOff="Off"/>
      </article>
      <nav className="mainNav">Nav <Input/></nav>
      <div className="siteAds">Ads</div>
      <footer className="pageFooter">Footer</footer>
    </div>
  );
}

export default App;
