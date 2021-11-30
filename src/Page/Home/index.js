import { React } from 'react';
import Comparation from '../../components/Comparation';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

import { Container } from './styles';

export default function Home() {
  return (
    <Container>
      <Header>
        <h1>O título é lorem Ipsum?</h1>
        <h2>O subtítulo é Lorem Ipsum?</h2>
      </Header>
      <Comparation />
      <Footer />
    </Container>
  );
}