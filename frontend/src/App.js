import './styles/index.css';
import Nav from './components/header/Nav';
import Banking from './components/main/Banking';
import Easy from './components/main/Easy';
import Latest from './components/main/Latest';
import Contact from './components/footer/Contact';

function App() {
  return (
    <div className='app__body'>
      <header className='header__container'>
        <Nav />
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
        <Contact />
      </footer>
    </div>
  );
}

export default App;
