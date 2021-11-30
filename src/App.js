import React, { useContext } from 'react';
import InfoContext from './context/InfoContext';

import Home from './Page/Home';
import Minibula from './Page/Minibula';

function App() {
  const { currentPage } = useContext(InfoContext);

  return (
    currentPage === 'Minibula' ?  <Minibula /> : <Home />
  );
}

export default App;
