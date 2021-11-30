import styled from "styled-components";
import arrowsImg from '../../assets/arrows.svg';

export const Container = styled.section`
  align-items: center;
  border: 2px solid var(--yellow-20);
  display: flex;
  flex-direction: column;
  height: 60vh;
  justify-content: space-between;
  padding: 47px 56px;
  margin: 0 0 0 80px;
  width: 50vw;  
`;

export const Compare = styled.div`
  align-items: center;
  display: flex;
  height: 48px;
  justify-content: center;
  position: relative;
  width: 100%;

  p {
    font-size: 24px;
    color: var(--orange-100);
    font-weight: bold;
  }

  span {
    color: var(--font-color);
    font-size: 24px;
    margin: 0 5px;
  }

  select {
    appearance: none;
    background-color: var(--yellow-20);
    background-image: url(${arrowsImg});
    background-repeat: no-repeat;
    background-position: 100%;
    border: none;
    border-radius: 4px;
    box-shadow: 1px 1px px #00000029;
    color: var(--font-color);
    font-family: raleway, sans-serif;
    font-weight: 100;
    padding-right: 30px;
    font-size: 18px;
    height: 48px;
    text-align: center;
    width: 100%;
    max-width: 250px;

    option {
      background-color: #EAEAEA;
      border: 2px solid red;
    }

    &:hover {
      cursor: pointer;
    }
  }
`;

export const Representation = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: flex-end;
  text-align: center;
`;

export const Paragraph = styled.p`
  color: ${props => props.orange ? 'var(--orange-100)' : 'var(--font-color)'};
  font-size: ${props => props.name ? '12px' : props.orange ? '24px' : '16px' };
  font-weight: ${props => props.orange ? 'bold' : '400'};
  margin-top: ${props => props.name ? '7px' : '0' };
  margin-bottom: 7px;
`;

export const GraphicDemonstration = styled.div`
  height: 50px;
  height: ${ props => `${props.height * 11}px` };
  border-radius: 10px 10px 0 0;
  background-color: ${props => props.orange ? 'var(--orange-100)' : props.grey40 ? 'var(--grey-40)' : 'var(--grey-30)' };
  width: 55px;
  transition: 0.5s;
`;