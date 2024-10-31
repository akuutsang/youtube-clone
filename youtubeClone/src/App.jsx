// import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/header/Header";
import SideBar from "./components/sideBar/SideBar";

import { Container } from "react-bootstrap";
import HomeScreen from "./screen/homeScreen/HomeScreen";
import "./_app.scss";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <div className="app__container border border-info">
        <SideBar />
        <Container className="app_main border border-warning">
          <HomeScreen />
        </Container>
      </div>
    </>
  );
}

export default App;
