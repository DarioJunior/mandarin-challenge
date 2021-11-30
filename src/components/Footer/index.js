import React, { useContext } from 'react';
import InfoContext from '../../context/InfoContext';

import { Container, Button } from './styles';

function Footer() {
  const { currentPage,
    setCurrentPage,

   } = useContext(InfoContext);
  return(
    <Container>
      <Button
        type="button"
        active={ currentPage !== 'Minibula' }
        onClick={ () => setCurrentPage('Placebo') }
      >
        RESUMO
      </Button>
      <Button
        type="button"
        active={ currentPage === 'Minibula' }
        onClick={ () => setCurrentPage('Minibula') }
      >
        MINIBULA
      </Button>
    </Container>
  );
}

export default Footer;