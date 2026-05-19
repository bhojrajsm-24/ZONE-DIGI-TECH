import { useState, useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

type Page = 'home' | 'about' | 'services' | 'projects' | 'contact';

function AppContent() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  useEffect(() => {
    const pageTitles: Record<Page, string> = {
      home: 'KiranDigital — Creative Digital Studio',
      about: 'About Us — KiranDigital',
      services: 'Services — KiranDigital',
      projects: 'Projects — KiranDigital',
      contact: 'Contact Us — KiranDigital',
    };
    document.title = pageTitles[currentPage];
  }, [currentPage]);

  const navigate = (page: string) => {
    setCurrentPage(page as Page);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <Home onNavigate={navigate} />;
      case 'about': return <About onNavigate={navigate} />;
      case 'services': return <Services onNavigate={navigate} />;
      case 'projects': return <Projects onNavigate={navigate} />;
      case 'contact': return <Contact />;
      default: return <Home onNavigate={navigate} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-stone-50 dark:bg-[#0a0a0f] transition-colors duration-300">
      <Navbar currentPage={currentPage} onNavigate={navigate} />
      <main className="flex-1">
        {renderPage()}
      </main>
      <Footer onNavigate={navigate} />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
