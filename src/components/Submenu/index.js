import React, { useContext } from 'react';
import InfoContext from '../../context/InfoContext';

import { Container, Button } from './styles';

function Submenu() {
  const { currentPage, setCurrentPage } = useContext(InfoContext);
  return (
    <Container>
      <Button
        type="button"
        active={ currentPage === 'Placebo' }
        onClick={ () => setCurrentPage('Placebo') }
      >
        PLACEBO
      </Button>
      <Button
        type="button"
        active={ currentPage === 'Laranja' }
        onClick={ () => setCurrentPage('Laranja') }
      >
        LARANJA
      </Button>
      <Button
        type="button"
        active={ currentPage === 'Tangerina' }
        onClick={ () => setCurrentPage('Tangerina') }
      >
        TANGERINA
      </Button>
    </Container>
  );
}

export default Submenu;