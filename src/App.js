import { createContext, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Header } from './components/Header/Header';
import { Home } from './pages/Home';
import { Cart } from './pages/Cart';
import { NotFound } from './pages/NotFound';

export const Context = createContext();

function App() {
  const [searchValue, setSearchValue] = useState('');

  return (
    <BrowserRouter>
      <Context.Provider value={{ searchValue, setSearchValue }}>
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
      </Context.Provider>
    </BrowserRouter>
  );
}

export default App;
