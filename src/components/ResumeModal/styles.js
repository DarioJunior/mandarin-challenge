import styled from "styled-components";

export const Paragraph = styled.p`
  padding: 49px 73px;
`;

export const Button = styled.button`
  background-color: var(--orange-100);
  border-radius: 4px;
  border: none;
  color: white;
  width: 38px;
  height: 38px;
  position: absolute;
  right: 0;
  top: -50px;
  font-weight: 800;
  font-size: 18px;
  font-family: raleway, sans-serif;
  transition: 0.3s;
  &:hover {
    transform: scale(1.1);
  }
`;
