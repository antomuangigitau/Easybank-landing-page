import './styles/index.css';
import Nav from './components/header/Nav';
import Banking from './components/main/Banking';
import Easy from './components/main/Easy';
import Latest from './components/main/Latest';
import Contacts from './components/footer/Contacts';
import { Routes, Route } from 'react-router-dom';
//pages
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Blog from './components/pages/Blog';
import Careers from './components/pages/Careers';
import Signup from './components/login/Signup';
function App() {
  return (
    <div className='app__body'>
      <header className='header__container'>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/careers' element={<Careers />} />
          <Route path='/signin' element={<Signup />} />
        </Routes>
      </header>
      <main className='main__section'>
        <section className='main__banking__section'>
          <Banking />
        </section>
        <section className='choose__easy__bank'>
          <Easy />
        </section>
        <section className='latest__articles'>
          <Latest />
        </section>
      </main>
      <footer className='footer'>
        <Contacts />
      </footer>
    </div>
  );
}

export default App;
