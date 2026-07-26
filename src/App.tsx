import Header from './components/Header';
import Hero from './components/Hero';
import CustomProcess from './components/CustomProcess';
import WhyCustom from './components/WhyCustom';
import Services from './components/Services';
import Stats from './components/Stats';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main>
        <Hero />
        <CustomProcess />
        <WhyCustom />
        <Services />
        <Stats />
        <Portfolio />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
