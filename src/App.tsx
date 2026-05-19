import { useState, useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Preloader from './components/Preloader';

type Page = 'home' | 'about' | 'services' | 'projects' | 'contact';

function AppContent() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const pageData: Record<Page, { title: string; desc: string }> = {
      home: { title: 'KiranDigital — Creative Digital Studio', desc: 'A premium creative digital agency helping Indian startups and businesses build powerful digital presences.' },
      about: { title: 'About Us — KiranDigital', desc: 'Learn more about KiranDigital, our mission, values, and the creative team behind our digital solutions.' },
      services: { title: 'Services — KiranDigital', desc: 'Explore our comprehensive digital services including UI/UX Design, Web Development, SEO, and Social Media.' },
      projects: { title: 'Projects — KiranDigital', desc: 'View our portfolio of featured projects across web design, e-commerce, branding, and digital marketing.' },
      contact: { title: 'Contact Us — KiranDigital', desc: 'Get in touch with KiranDigital to discuss your next big digital project. We would love to hear from you.' },
    };
    
    document.title = pageData[currentPage].title;
    
    // Update meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', pageData[currentPage].desc);
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
      {loading && <Preloader onLoadingComplete={() => setLoading(false)} />}
      
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
