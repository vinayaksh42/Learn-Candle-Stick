import { brown } from '@mui/material/colors';
import * as React from 'react';
import './HomeHeader.css';


export default function ColumnsGrid() {
  const image = "bro.jpg"
  return (
    <>
      <p className='Main-text'>Enter the Stocks</p>
      <p className='Main-text-1'>Dive into the stock market starting with the basics of candle sticks, Learn all of it
       at the comfort of your house with fun quizzes</p>
      <button className='button-1'><p className='button-text'>Test Your Knowledge</p></button> 
      <img className='image' src={image}/>
    </>
  );
}
