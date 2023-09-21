import React, { useState } from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import './styles.css';

export default function TogglePriceType({priceType,handlePriceTypeChange}) {
  /* const [priceType, setPriceType] = useState('prices');

  const handlePriceTypeChange = (event, newType) => {
    setPriceType(newType);
    console.log(newType);
  }; */

  return (
    <div className='toogle-prices'> 
     <ToggleButtonGroup
      value={priceType}
      exclusive
      onChange={handlePriceTypeChange}
      sx={{
        "& .Mui-selected": {
          color: "var(--blue) !important",
        },
        borderColor: "var(--blue)",
        border: "unset !important",
        "& .MuiToggleButtonGroup-grouped": {
          border: "1px solid !important",
          borderColor: "var(--blue)",
          color: "var(--blue)",
        },
        "& .MuiToggleButton-standard": {
          color: "var(--blue)",
        },
      }}
    >
      <ToggleButton value="prices" className='toogle-btn'>
        Price 
      </ToggleButton>
      <ToggleButton value="market_caps" className='toogle-btn'>
        Market Cap
      </ToggleButton>
      <ToggleButton value="total_volumes" className='toogle-btn'>
         Total Volume
      </ToggleButton>

    </ToggleButtonGroup>
    </div>
  );
}