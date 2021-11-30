import styled from "styled-components";

import logoImg from '../../assets/logo_mandarin.png';

export const Container = styled.section`
  background-color: var(--white);
  background-image: url(${logoImg});
  background-repeat: no-repeat;
  background-size: 96px;
  background-position: 95%;
  padding: 49px 80px;
  height: 20vh;
  width: 100%;
  h1 {
    font-size: 45px;
    font-weight: 700;
    color: var(--orange-100);
  }

  h2 {
    font-size: 32px;
    font-weight: 600;
    color: var(--font-color);
  }
`;