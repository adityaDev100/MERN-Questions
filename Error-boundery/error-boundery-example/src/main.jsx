import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ErrorBoundary from '../error-boundery/Index.jsx'

createRoot(document.getElementById('root')).render(
  <ErrorBoundary fallback={<h1>Oops! Something went wrong.</h1>}>
     <App />
  </ErrorBoundary>
)
