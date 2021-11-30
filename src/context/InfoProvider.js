import React, { useState, useEffect } from 'react';
import InfoContext from './InfoContext';

function InfoProvider({ children }) {
  const [currentPage, setCurrentPage] = useState('Placebo');
  const [mandarinPercentage, setMandarinPercentage] = useState('20');
  const [placeboPercentage, setPlaceboPercentage] = useState('12');
  const [laranjaPercentage, setLaranjaPercentage] = useState('15');

  useEffect(() =>{
    if (currentPage === 'Placebo') {
      setMandarinPercentage('20');
      setPlaceboPercentage('12');
      setLaranjaPercentage('15');
    }
    if (currentPage === 'Laranja') {
      setMandarinPercentage('15');
      setPlaceboPercentage('8');
      setLaranjaPercentage('10');
    }
    if (currentPage === 'Tangerina') {
      setMandarinPercentage('10');
      setPlaceboPercentage('2');
      setLaranjaPercentage('5');
    }

  },[currentPage]);
  const ContextValue = {
    currentPage,
    setCurrentPage,
    mandarinPercentage,
    setMandarinPercentage,
    placeboPercentage,
    setPlaceboPercentage,
    laranjaPercentage,
    setLaranjaPercentage,
  }

  return (
    <InfoContext.Provider value={ ContextValue }>
      { children }
    </InfoContext.Provider>
  )
}

export default InfoProvider;