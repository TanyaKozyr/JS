
import "./App.css";
import Header from "./components/Header";
import Section from "./components/Main";
import Footer from "./components/Footer";


export default function App() {
  return (
  <>
  <Header />
  <>
<Section 
title={"About us"}
content={<p>We are a web development company...</p>}
/>

<Section 
title={'Services'}
content={<ul>
    <li>Web Design</li>
    <li>Front-end Development</li>
    <li>Back-end Development</li>
  </ul>}
/></>
 <Footer />
  </>
  )
  }
  