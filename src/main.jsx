import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router';
import { BasketballApp } from './BasketballApp.jsx';
import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AppProvider } from './context/AppProvider.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <AppProvider>
        <BasketballApp />
      </AppProvider>
    </HashRouter>
  </StrictMode>,
)
