import './index.css';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Testimonials from './components/Testimonials.jsx';
import Features from './components/Features.jsx';
import Contact from './components/Contact.jsx';

function App() {
  return (
    <div className='App'>
      <Header />
      <div className='bg-black w-full h-5/6 mt-16'>
        <Hero />
      </div>
      <div>
        <Features />
        <Testimonials />/
        <Contact />
      </div>
    </div>
  )
}

export default App
