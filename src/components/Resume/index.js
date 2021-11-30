import { React, useState } from 'react';
import ResumeModal from '../ResumeModal';

import { Container, Button, InfoBox} from './styles';

function Resume() {
  const [modalShow, setModalShow] = useState(false);
  return (
    <Container>
      <h1>
        O título do parágrafo
      </h1>
      <p>
        Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum.
      </p>
      <Button type="button" onClick={() => setModalShow(true)}>
        ESTUDO
      </Button>
      <InfoBox>
        <p>i</p>
        <span>
          O que é Lorem Ipsum?
        </span>
      </InfoBox>
      <ResumeModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </Container>
  );
}

export default Resume;