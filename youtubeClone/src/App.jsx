// import { useState } from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header/Header';
import SideBar from './components/sideBar/SideBar';
import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import HomeScreen from './screen/homeScreen/HomeScreen';
import './_app.scss';
import LogInScreen from './screen/logInScreen/LogInScreen';

function App() {
  const [sidebar, togglesidebar] = useState(false);

  const handleToggleSidebar = () => togglesidebar((value) => !value);

  return (
    <>
      <Header handleToggleSidebar={handleToggleSidebar} />
      <div className="app__container ">
        <SideBar sidebar={sidebar} />
        <Container className="app_main">
          <HomeScreen />
        </Container>
      </div>
      {/* <LogInScreen /> */}
    </>
  );
}

export default App;
