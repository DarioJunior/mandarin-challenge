import styled from "styled-components";


export const Container = styled.section`
  width: 40vw;
  height: 60vh;
  margin: 0 80px 0 0; 
  padding: 0 30px;

  display: flex;
  flex-direction: column;
  justify-content: space-around;

  h1 {
    font-size: 24px;
    color: var(--font-color);
  }

  p {
    font-size: 16px;
    color: var(--font-color);
  }
`;

export const Button = styled.button`
  width: 128px;
  height: 48px;

  background-color: var(--orange-100);
  border: none;
  border-radius: 4px;
  box-shadow: 1px 1px 2px #00000029;
  color: var(--white);
  font: normal normal 800 16px/20px Raleway;
`;

export const InfoBox = styled.div`
  width: 38px;
  height: 38px;

  background-color: var(--white);
  border: 2px solid var(--orange-100);
  border-radius: 4px;

  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  transition: 0.1s;

  p { 
    color: var(--orange-100);
    font-family: monospace;
    font-size: 20px;
    font-weight: 600;
  }

  span {
    visibility: hidden;
    width: 200px;
    height: 38px;
    background: #E0E0E050 0% 0% no-repeat padding-box;
    color: var(--font-color);
    text-align: center;
    border-radius: 6px;
    padding: 5px 0;
    position: absolute;
    z-index: 1;
    bottom: 0px;
    left: 100px;
    margin-left: -50px;
    opacity: 0;
    transition: opacity 0.3s;
    padding: 10px 0;

    &:after {
      content: "";
      position: absolute;
      top: 15px;
      left: 50%;
      margin-left: -110px;
      border-width: 5px;
      border-style: solid;
      border-color:  transparent #E0E0E050 transparent transparent;
    }
  }

  &:hover {
    background-color: var(--orange-100);
    border: none;
    cursor: pointer;

    p {
      color: white;
    }
  }

  &:hover span {
    visibility: visible;
    opacity: 1;
    
  }
`;