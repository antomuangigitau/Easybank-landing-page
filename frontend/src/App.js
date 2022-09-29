import './styles/index.css';
//pages
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Blog from './components/pages/Blog';
import Careers from './components/pages/Careers';
import SignIn from './components/login/SignIn';
import SignUp from './components/login/SignUp';
import SharedLayout from './components/pages/SharedLayout';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='app__body'>
      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/careers' element={<Careers />} />
          <Route path='/signin' element={<SignIn />} />
          <Route path='/signup' element={<SignUp />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
