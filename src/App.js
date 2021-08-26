import './App.css';
import Discount from './components/Discount';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import NewLaunch from './components/NewLaunch';
import Products from './components/Products';
import Specs from './components/Specs';

function App() {
  return (
    <>
      <Header/>
      <Hero />
      <Specs/>
      <NewLaunch/>
      <Discount/>
      <Products/>
      <Footer/>
    </>
  );
}

export default App;
