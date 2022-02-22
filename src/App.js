import './App.css';
import Header from './Header.js';
import Home from './Home.js';

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
    </div>
  )
}


export default App;
