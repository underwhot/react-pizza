import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Header } from './components/Header/Header';
import { Home } from './pages/Home';
import { Cart } from './pages/Cart';
import { NotFound } from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header />
        <main className="content">
          <Routes>
            <Route index element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
