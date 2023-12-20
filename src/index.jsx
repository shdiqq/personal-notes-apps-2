import React from 'react';
import { createRoot } from 'react-dom/client';

import NoteApp from './pages';

// styling
import './styles/style.css';
import { BrowserRouter } from 'react-router-dom';

const root = createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <NoteApp />
  </BrowserRouter>
);