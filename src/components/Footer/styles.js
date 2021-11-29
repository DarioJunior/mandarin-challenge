import styled from "styled-components";

export const Container = styled.section`
  background-color: var(--orange-100);
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0 0 0 73px;
  height: 15vh;
  width: 100vw;
`;

export const Button = styled.button`
  height: 48px;
  width: 120px;

  background-color: ${props => props.active ? 'white' : 'var(--orange-100)'};
  border: ${props => props.active ? 'none' : '2px solid var(--orange-30)'};
  border-radius: 4px;
  
  color:  ${props => props.active ? 'var(--orange-100)' : 'var(--orange-30)'};
  font-family: raleway, sans-serif;
  font-size: 14px;
  font-weight: ${props => props.active ? '900' : '400'};

  margin-left: 10px;
  text-decoration: none;
`;