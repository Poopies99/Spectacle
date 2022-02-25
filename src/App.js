import './App.css';
import Header from './Header.js';
import Home from './Home.js';
import Footer from './Footer';
import styled from "styled-components";

function App() {
  return (
    <HomePage />
  );
}

function HomePage() {
  return (
    <div>
        <div className='header'>
          <Header />
        </div>
        <div className='home'>
          <Home />
        </div>
        <div className='footer'>
          <Footer />
        </div>
    </div>
  )
}
export default App;
