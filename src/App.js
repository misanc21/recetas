import React from 'react';
import Header from './components/Header'
import Formulario from './components/Formulario'
import Lista from './components/Lista'

import CategoriasProvider from './context/CategoriasContext'
import RecetasProvider from './context/RecetasContext'
import ModalProvider from './context/ModalContext'

function App() {
  return (
    <CategoriasProvider>
      <RecetasProvider>
        <ModalProvider>
          <Header />
          <div className="container">
            <div className="row">
              <Formulario />
            </div>
            <Lista />
          </div>
        </ModalProvider>
      </RecetasProvider>
    </CategoriasProvider>
  );
}

export default App;
