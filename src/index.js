import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from '@mui/material';
import { AmplifyProvider } from '@aws-amplify/ui-react';
import { BrowserRouter } from "react-router-dom";
import { Amplify } from "aws-amplify";

import config from "./aws-exports";
import './index.css';
import App from './App';
import { Theme } from './Theme';

const root = ReactDOM.createRoot(document.getElementById('root'));
Amplify.configure(config);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={Theme}>
      <BrowserRouter>
        <AmplifyProvider>
          <App />
        </AmplifyProvider>
      </BrowserRouter>
    </ThemeProvider>

  </React.StrictMode>
);
