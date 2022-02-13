import './App.css';
import NavBar from './components/NavBar';
import { Routes, Route, Link } from "react-router-dom";
import Home from './views/Home';
import About from "./views/About";
import Contacts from './views/Contacts';

function App() {
  return (
    <div className="App">

      <NavBar></NavBar>
      <header className="App-header">
        header
      </header>
      <section className='App-section'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contacts" element={<Contacts />} />
        </Routes>
      </section>
      <header className="App-footer">
        footer
      </header>
    </div>
  );
}

export default App;
