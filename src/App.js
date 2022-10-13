import React, { useState } from "react";

import "./App.css";
//import Container from 'react-bootstrap/Container'
//import Row from 'react-bootstrap/Row'
//import { Container } from 'react-bootstrap';
// import ClientForm from './components/ClientForm';
import TabList from "./components/UI/TabList";
import Card from "./components/UI/Card";
import Header from "./components/UI/Header";
// import "./components/img/dog.jpg";
// import "./components/img/RFmetrics.png";

function App(props) {
  const tabs = [
    { id: 1, title: "data", src: require("./components/img/RFmetrics.png") },
    { id: 2, title: "dog", src: require("./components/img/dog.jpg") },
    { id: 3, title: "No Image", src: null },
  ];

  const [theImg, setTheImg] = useState(
    require("./components/img/RFmetrics.png")
  );

  const divClickHandler = (chngSrc) => {
    setTheImg(chngSrc);
  };

  return (
    <>
      <Header />

      <div className="outer-wrap">
        <Card className="menu-wrap">
          <TabList tabs={tabs} onDivClick={divClickHandler} />
        </Card>
        <Card className="menu-container">
          <img src={theImg} alt={theImg} width="100%" />
        </Card>
      </div>
    </>
  );
}

export default App;
