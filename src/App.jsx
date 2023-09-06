import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import Footer from "./components/Footer"
import xpData from "../db/data.js"

export default function App() {
  const renderedData = xpData.map((item)=> {
      return (
        <Card
          key={item.id}
          {...item}
        />
      );  
    }
  );
  
  
  
  return (
    <div className="container">
      <Navbar />
      <Hero />
      <div className="cards--container">
      {renderedData}
      </div>
      <Footer />
    </div>
  );
};