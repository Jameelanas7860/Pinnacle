import React from "react";
import About from "./About";
import Contact from "./Contact";
import Join from "./Join";
import Recents from "./Recents";
import Smile from "./Smile";
import Thought from "./Thought";

<script>AOS.init();</script>;

function Home() {
  return (
    <>
    <Thought/>
    <Recents/>
    <About/>
    <Smile/>
    <Join/>
    <Contact/>
    
    </>
  );
}

export default Home;
