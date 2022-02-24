import './App.css';
import Header from './Header.js';
import Home from './Home.js';
import Footer from './Footer';

function App() {
  return (
    <HomePage />
  );
}

function HomePage() {
  return (
    <div>
      <Header />
      <Home />
      <Footer />
    </div>
  )
}

export default App;
