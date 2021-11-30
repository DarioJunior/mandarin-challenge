import React from 'react';


import Submenu from '../Submenu';
import Graphic from '../Graphic';
import Resume from '../Resume';

import { Container, Content } from './styles';

function Comparation() {

  return (
    <Container>
      <Content>
        <Graphic />
        <Resume />
      </Content>
      <Submenu />
    </Container>
  );
}

export default Comparation;