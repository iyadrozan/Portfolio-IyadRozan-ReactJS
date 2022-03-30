import './App.css';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import About from './components/About';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <About />
    </div>
  );
}

export default App;
