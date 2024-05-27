import React, { useEffect } from 'react'
import StyleSheet from "../FilterSection/FilterSection.module.css";
import BasicTabs from '../BasicTabs/BasicTabs';
import Carousel from '../Carousel/Carousel';
import Card from '../Card/Card';
import { CircularProgress } from '@mui/material';
import Box from '@mui/material/Box';

const FilterSection = ({ 
    title, 
    data, 
    type, 
    filteredData,
    filteredDataValues,
    value, 
    handleChange, 
  }) => {
  
    return (
        <div>
      <div className={StyleSheet.header}>
        <h3 style={{ fontFamily: 'Poppins', color: "white" }}>{title}</h3>
      </div>
      <BasicTabs value={value} handleChange={handleChange} filteredData={filteredData}/>
      {data.length === 0 ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <CircularProgress />
        </Box>
      ) :
        ( 
          <div className={StyleSheet.cardsWrapper}>
            <Carousel data={filteredDataValues} renderCardComponent={(data) => <Card data={data} type={type} />} />
          </div>
        )}
    </div>
    )
  }
  
  export default FilterSection;