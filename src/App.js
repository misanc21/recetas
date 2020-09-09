import React from 'react';
import Header from './components/Header'
import Formulario from './components/Formulario'

import CategoriasProvider from './context/CategoriasContext'
import RecetasProvider from './context/RecetasContext'

function App() {
  return (
    <CategoriasProvider>
      <RecetasProvider>
        <Header/>
        <div className="container">
          <div className="row">
            <Formulario/>
          </div>
        </div>
      </RecetasProvider>
    </CategoriasProvider>
  );
}

export default App;
