import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import '../HomeHeader/HomeHeader.css';
import './AboutAvatar.css';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
export default function ColumnsGrid() {
  return (
    <>
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
      <div className='cardContainer'>
        <Grid container spacing={2} columns={40} >
          <Grid item xs={32} md={8} sm={16}>

            <Card sx={{ minWidth: 180 }} className="card1">
              <CardContent>
                <img id="aboutprofile" src="1.png" alt="profile" width={200} height={200} />
                <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
                  Vinayak<br />
                  Sharma
                </Typography>
              </CardContent>
              <CardActions>
                <div class="sociala-container">
                
                  <a href="https://github.com/vinayaksh42" target="_blank"
                    className="github sociala">
                    <GitHubIcon fontSize='large'/>
                  </a>
                  <a href="https://twitter.com/Vinayak47427793" target="_blank" className="twitter sociala">
                    <TwitterIcon fontSize='large'/>
                  </a>
                  <a href="https://www.linkedin.com/in/vinayak-sharma-141096193/" target="_blank"
                    className="linkedin sociala">
                    <LinkedInIcon fontSize='large'/>
                  </a>
                </div>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={32} md={8} sm={16}>
            <Card sx={{ minWidth: 180 }} className="card2">
              <CardContent>
                {
                  <img id="aboutprofile" src="3.png" alt="profile" width={200} height={200} />}

                <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
                  Priyanshu<br /> Sharma
                </Typography>
              </CardContent>
              <CardActions>
                <div class="sociala-container">
                  <a href="https://github.com/Priyanshu2601" target="_blank"
                    className="github sociala">
                    <GitHubIcon fontSize='large'/>
                  </a>
                  <a href="https://twitter.com/Priyanshu995840" target="_blank" className="twitter sociala">
                  <TwitterIcon fontSize='large'/>
                  </a>
                  <a href="https://www.linkedin.com/in/priyanshu-sharma-722760197/" target="_blank"
                    className="linkedin sociala">
                  <LinkedInIcon fontSize='large'/>
                  </a>
                </div>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={32} md={8} sm={16}>
            <Card sx={{ minWidth: 180 }} className="card3">
              <CardContent>
                {
                  <img id="aboutprofile" src="2.png" alt="profile" width={200} height={200} />}

                <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
                  Harsh<br /> Chaudhary
                </Typography>
              </CardContent>
              <CardActions>
                <div class="sociala-container">
                  <a href="https://github.com/mrharsh0606" target="_blank"
                    className="github sociala">
                    <GitHubIcon fontSize='large'/>
                  </a>
                  <a href="https://twitter.com/mrharsh06" target="_blank" className="twitter sociala">
                  <TwitterIcon fontSize='large'/>
                  </a>
                  <a href="https://www.linkedin.com/in/harsh-chaudhary-563b47199/" target="_blank"
                    className="linkedin sociala">
                    <LinkedInIcon fontSize='large'/>
    
                  </a>
                </div>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={32} md={8} sm={16}>
            <Card sx={{ minWidth: 180 }} className="card4">
              <CardContent>
                {
                  <img id="aboutprofile" src="4.png" alt="profile" width={200} height={200} />}

                <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
                  Siddhant<br /> Vardhan Singh
                </Typography>
              </CardContent>
              <CardActions>
                <div class="sociala-container">
                  <a href="https://github.com/Siddhant-vardhansingh" target="_blank"
                    className="github sociala">
                    <GitHubIcon fontSize='large'/>
                  </a>
                  <a href="https://twitter.com/SiddhantVardha1" target="_blank" className="twitter sociala">
                  <TwitterIcon fontSize='large'/>
                  </a>
                  <a href="https://www.linkedin.com/in/siddhant-vardhan-singh/" target="_blank"
                    className="linkedin sociala">
                   <LinkedInIcon fontSize='large'/>
                  </a>
                </div>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={32} md={8} sm={16}>
            <Card sx={{ minWidth: 180 }} className="card4">
              <CardContent>
                {
                  <img id="aboutprofile" src="tapesh.png" alt="profile" width={200} height={200} />}

                <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
                  Tapesh<br /> Malik
                </Typography>
              </CardContent>
              <CardActions>
                <div class="sociala-container">
                  <a href="https://github.com" target="_blank"
                    className="github sociala">
                    <GitHubIcon fontSize='large'/>
                  </a>
                  <a href="https://twitter.com/malik_tapesh" target="_blank" className="twitter sociala">
                  <TwitterIcon fontSize='large'/>
                  </a>
                  <a href="https://www.linkedin.com/in/tapesh-malik/" target="_blank"
                    className="linkedin sociala">
                   <LinkedInIcon fontSize='large'/>
                  </a>
                </div>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </div>
    </>
  );
}
