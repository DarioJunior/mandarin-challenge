import React from 'react';

import { Container, Button } from './styles';

function Footer() {
  return(
    <Container>
      <Button type="button" active>
        RESUMO
      </Button>
      <Button type="button">
        MINIBULA
      </Button>
    </Container>
  );
}

export default Footer;