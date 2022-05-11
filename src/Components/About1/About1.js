import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { typography } from '@mui/system';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { red } from '@mui/material/colors';
import { CardHeader } from '@mui/material';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'centre',
  color: theme.palette.text.secondary,
}));


export default function ColumnsGrid() {
  return (
    <>  <Typography>
     <h1>
       Candle Sticks Project
           </h1>
           <h4>
             <p>
               Here you will learn about Different Candle sticks which is used in stock Market
               and Crypto market<br></br>After Attending all the quizes you will be able to predict the behaviour 
               of these candles and earn money.<br></br>

             </p>
           </h4>
      </Typography>
      <Grid container spacing={2} columns={32}>
        <Grid item xs={8}>

    <Card sx={{ minWidth: 200 }}>
      <CardContent>
     {
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            VS
          </Avatar>}

        <Typography sx={{ fontSize: 30}} color="text.secondary" gutterBottom>
         Vinayak Sharma
        </Typography>
        <Typography variant="h5" component="div">
          Project Head
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Gsoc 
        </Typography>
        <Typography variant="body2">
         Helpful and Intelligent
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">contact</Button>
      </CardActions>
    </Card>
        </Grid>
        <Grid item xs={8}>
        <Card sx={{ minWidth: 200 }}>
      <CardContent>
     {
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            PS
          </Avatar>}

        <Typography sx={{ fontSize: 30}} color="text.secondary" gutterBottom>
         Priyanshu Sharma
        </Typography>
        <Typography variant="h5" component="div">
           Team member
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Anime Lover
        </Typography>
        <Typography variant="body2">
        Honest and Hard Working
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">contact</Button>
      </CardActions>
    </Card>
        </Grid>
        <Grid item xs={8}>
        <Card sx={{ minWidth: 200 }}>
      <CardContent>
     {
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            HC
          </Avatar>}

        <Typography sx={{ fontSize: 30}} color="text.secondary" gutterBottom>
       Harsh Chaudhary
        </Typography>
        <Typography variant="h5" component="div">
         Team member
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Cricket Lover 
        </Typography>
        <Typography variant="body2">
        Sincere and Obidient
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">contact</Button>
      </CardActions>
    </Card>
        </Grid>
        <Grid item xs={8}>
        <Card sx={{ minWidth: 200 }}>
      <CardContent>
     {
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            SVS
          </Avatar>}

        <Typography sx={{ fontSize: 30}} color="text.secondary" gutterBottom>
        Siddhant Vardhan Singh
        </Typography>
        <Typography variant="h5" component="div">
          Star Member
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          IIT jammu Intern 
        </Typography>
        <Typography variant="body2">
         Helpful and Kind
                 </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">contact</Button>
      </CardActions>
    </Card>
        </Grid>
      </Grid>
    </>
  );
}
