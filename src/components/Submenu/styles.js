import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 5vh;
  background-color: var(--yellow-20);

  display: flex;
`;

export const Button = styled.button`
  width: 100%;
  height: 5vh;
  background-color: var(--yellow-20);

  border: none;
  border-top: ${ props => props.active ? '2px solid var(--orange-100)' : 'none'};
  color: var(--orange-100);
  font-weight: ${ props => props.active ? 'bold' : 'normal'};;
`;