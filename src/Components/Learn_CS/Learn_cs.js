import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";
import './Learn_cs.css';
function Module() {
  const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
  ))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
  }));
  
  const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
      expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
      {...props}
    />
  ))(({ theme }) => ({
    backgroundColor:
      theme.palette.mode === 'dark'
        ? 'rgba(255, 255, 255, .05)'
        : 'rgba(0, 0, 0, .03)',
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
      transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
      marginLeft: theme.spacing(1),
    },
  }));
  
  const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
  }));
    const list = [
        { id: '1', name: 'Hammer', lm: 'Learn More', quiz: 'quiz' },
        { id: '2', name: 'Piercing Pattern', lm: 'Learn More', quiz: 'quiz' },
        { id: '3', name: 'Bullish Engulfing', lm: 'Learn More', quiz: 'quiz' },
        { id: '4', name: 'The Morning Star', lm: 'Learn More', quiz: 'quiz' },
        { id: '5', name: 'Three White Soldiers', lm: 'Learn More', quiz: 'quiz' },
        { id: '6', name: 'White Marubozu', lm: 'Learn More', quiz: 'quiz' },
        { id: '7', name: 'Three Inside Up', lm: 'Learn More', quiz: 'quiz' },
        { id: '8', name: 'Bullish Harami', lm: 'Learn More', quiz: 'quiz' },
        { id: '9', name: 'Tweezer Bottom', lm: 'Learn More', quiz: 'quiz' },
        { id: '10', name: 'Inverted Hammer', lm: 'Learn More', quiz: 'quiz' },
        { id: '11', name: 'Three Outside Up', lm: 'Learn More', quiz: 'quiz' },
        { id: '12', name: 'On-Neck Pattern', lm: 'Learn More', quiz: 'quiz' },
        { id: '13', name: 'Bullish Counterattack', lm: 'Learn More', quiz: 'quiz' },
        { id: '14', name: 'Hanging man', lm: 'Learn More', quiz: 'quiz' },
        { id: '15', name: 'Dark cloud cover', lm: 'Learn More', quiz: 'quiz' },
        { id: '16', name: 'Bearish Engulfing', lm: 'Learn More', quiz: 'quiz' },
        { id: '17', name: 'The Evening Star', lm: 'Learn More', quiz: 'quiz' },
        { id: '18', name: 'Three Black Crows', lm: 'Learn More', quiz: 'quiz' },
        { id: '19', name: 'Black Marubozu', lm: 'Learn More', quiz: 'quiz' },
        { id: '20', name: 'Three Inside Down', lm: 'Learn More', quiz: 'quiz' },
        { id: '21', name: 'Bearish Harami', lm: 'Learn More', quiz: 'quiz' },
        { id: '22', name: 'Shooting Star', lm: 'Learn More', quiz: 'quiz' },
        { id: '23', name: 'Tweezer Top', lm: 'Learn More', quiz: 'quiz' },
        { id: '24', name: 'Three Outside Down', lm: 'Learn More', quiz: 'quiz' },
        { id: '25', name: 'Bearish Counterattack', lm: 'Learn More', quiz: 'quiz' },
        { id: '26', name: 'Doji', lm: 'Learn More', quiz: 'quiz' },
        { id: '27', name: 'Spinning Top', lm: 'Learn More', quiz: 'quiz' },
        { id: '28', name: 'Falling Three Methods', lm: 'Learn More', quiz: 'quiz' },
        { id: '29', name: 'Rising Three Methods', lm: 'Learn More', quiz: 'quiz' },
        { id: '30', name: 'Upside Tasuki Gap', lm: 'Learn More', quiz: 'quiz' },
        { id: '31', name: 'Downside Tasuki Gap', lm: 'Learn More', quiz: 'quiz' },
        { id: '32', name: 'Mat-Hold', lm: 'Learn More', quiz: 'quiz' },
        { id: '33', name: 'Rising Window', lm: 'Learn More', quiz: 'quiz' },
        { id: '34', name: 'Falling Window', lm: 'Learn More', quiz: 'quiz' },
        { id: '35', name: 'High Wave', lm: 'Learn More', quiz: 'quiz' },
    ]
    const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
    return (
      <div className='learnList'>
        <h1 className='learnHeading'>Learn Module</h1>
        {
            list.map(item => (
                <Accordion key={item.id} expanded={expanded === `panel${item.id}`} onChange={handleChange(`panel${item.id}`)}>
                    <AccordionSummary>
                        <div className='learnList__item'>
                            <Typography>{item.name}</Typography>
                        </div>
                    </AccordionSummary>
                    <AccordionDetails>
                        <ul className='learnList__item'>
                            <li><Link to="/LearnModule">{item.quiz}</Link></li>
                            <li><Link to="/LearnModule">{item.lm}</Link></li>
                        </ul>
                    </AccordionDetails>
                </Accordion>
            ))
        }
    </div>
    )
}

export default Module