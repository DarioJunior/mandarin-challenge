import React, { useContext } from 'react';
import InfoContext from '../../context/InfoContext';

import { Container, Compare, Representation, GraphicDemonstration, Paragraph } from './styles';

function Graphic() {
  const { currentPage,
    setCurrentPage,
    mandarinPercentage,
    placeboPercentage,
    laranjaPercentage,
   } = useContext(InfoContext);
  return (
    <Container>
      <Compare>
        <p>Mandarin</p><span>vs.</span>
        <select value={ currentPage } onChange={ ({ target }) => setCurrentPage(target.value)}>
          <option value="Placebo">Placebo vs. Laranja</option>
          <option value="Laranja">Laranja</option>
          <option value="Tangerina">Tangerina</option>
        </select>
      </Compare>
      <Representation>
        <div>
          <Paragraph orange>{ mandarinPercentage }%</Paragraph>
          <GraphicDemonstration orange height={ mandarinPercentage } />
          <Paragraph name>Mandarin</Paragraph>
        </div>
        <div>
          <Paragraph>{ placeboPercentage }%</Paragraph>
          <GraphicDemonstration grey40 height={ placeboPercentage } />
          <Paragraph name>Placebo</Paragraph>
        </div>
        <div>
          <Paragraph>{ laranjaPercentage }%</Paragraph>
          <GraphicDemonstration grey20 height={ laranjaPercentage } />
          <Paragraph name>Laranja</Paragraph>
        </div>
      </Representation>
    </Container>
  );
}

export default Graphic;