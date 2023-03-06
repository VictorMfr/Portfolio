import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer"


const App = () => {
  return (
    <>
      <section>
        <Header />
        <Main />
      </section>
      <section className="bg-black">
        <Footer/>
      </section>
    </>

  );
}

export default App;
