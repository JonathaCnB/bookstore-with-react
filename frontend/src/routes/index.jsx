import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { App } from '../templates/App';
import Header from '../components/Header';
import Page404 from '../components/Page404';

export default function Urls() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<App>Hello</App>} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
}
