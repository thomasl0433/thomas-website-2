import React from "react";
import NavbarCustom from "./components/Navbar";
import Content from "./components/Content";
import Footer from "./components/Footer";
import './index.css'

function App() {
  return (
    <div className="App">
      <NavbarCustom />
      <Content />
      <div class="spacer"></div>
      <Footer />
    </div>
  );
}

export default App;
