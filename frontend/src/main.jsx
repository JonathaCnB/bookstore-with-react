import React from 'react';
import ReactDOM from 'react-dom/client';
import { MyThemeProvider } from './styles/MyThemeProvider';
import Urls from './routes';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MyThemeProvider>
      <Urls />
    </MyThemeProvider>
  </React.StrictMode>,
);
