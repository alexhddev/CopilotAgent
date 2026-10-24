import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import NotFound from './pages/NotFound'


function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  return (
    <main className="page" data-theme={theme}>
      <header className="topbar">
        <Navbar />
        <button
          className="theme-toggle"
          type="button"
          aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
          aria-pressed={theme === 'dark'}
          onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        >
          {theme === 'light' ? 'Dark mode' : 'Light mode'}
        </button>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
  )
}

export default App
