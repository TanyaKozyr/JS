import "./App.css";
import Header from "./components/Header";
import Section from "./components/Main";
import Footer from "./components/Footer";
import Bar from "./components/AppBar";

export default function App() {
  return (
    <>
    <Bar/>
      
      <>
        <Section
          title={"About us"}
          content={<p>We are a web development company...</p>}
        />

        <Section
          title={"Services"}
          content={
            <ul>
              <li>Web Design</li>
              <li>Front-end Development</li>
              <li>Back-end Development</li>
            </ul>
          }
        />
      </>
      <Footer />
    </>
  );
}
