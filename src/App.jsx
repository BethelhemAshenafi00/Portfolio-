import { useState, useEffect } from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Projects from './components/Projects.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

function App() {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    return savedTheme || (prefersDark ? 'dark' : 'light');
  });

  const [views] = useState(() => {
    if (typeof window === 'undefined') return 0;
    const isDev = localStorage.getItem('isPortfolioOwner') !== 'true';
    if (isDev) {
      const count = localStorage.getItem('profileViews') || '0';
      const newCount = parseInt(count, 10) + 1;
      localStorage.setItem('profileViews', newCount.toString());
      return newCount;
    }
    const current = localStorage.getItem('profileViews') || '0';
    return parseInt(current, 10);
  });

  useEffect(() => {
    // Update DOM class and save to localStorage
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <div className="app-wrapper">
      <Navbar theme={theme} setTheme={setTheme} views={views} />
      <main>
        <Hero views={views} />
        <Projects />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
