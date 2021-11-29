import React from 'react';

import { Container, Button } from './styles';

function Submenu() {
  return (
    <Container>
      <Button type="button" active>
        SUBMENU
      </Button>
      <Button type="button">
        SUBMENU
      </Button>
      <Button type="button">
        SUBMENU
      </Button>
    </Container>
  );
}

export default Submenu;