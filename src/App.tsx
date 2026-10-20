import { useState } from 'react'
import './App.css'

function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  return (
    <main className="page" data-theme={theme}>
      <button
        className="theme-toggle"
        type="button"
        aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
        aria-pressed={theme === 'dark'}
        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      >
        {theme === 'light' ? 'Dark mode' : 'Light mode'}
      </button>
      <section className="content">
        <h1>Copilot Agent</h1>
        <p>Your workspace starts here.</p>
      </section>
    </main>
  )
}

export default App
