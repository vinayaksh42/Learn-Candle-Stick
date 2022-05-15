import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import '../HomeHeader/HomeHeader.css';
import './AboutAvatar.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faLinkedinIn, faGithub} from "@fortawesome/free-brands-svg-icons";
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
        <Grid container spacing={2} columns={32} >
          <Grid item xs={32} md={8} sm={16}>

            <Card sx={{ minWidth: 180 }} className="card1">
              <CardContent>
                <img id="profile" src="1.png" alt="profile" width={200} height={200} />
                <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
                  Vinayak<br />
                  Sharma
                </Typography>
              </CardContent>
              <CardActions>
                <div class="social-container">
                
                  <a href="https://github.com/vinayaksh42"
                    className="github social">
                    <FontAwesomeIcon icon={faGithub} size="2x" />
                  </a>
                  <a href="https://twitter.com/Vinayak47427793" className="twitter social">
                    <FontAwesomeIcon icon={faTwitter} size="2x" />
                  </a>
                  <a href="https://www.linkedin.com/in/vinayak-sharma-141096193/"
                    className="linkedin social">
                    <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
                  </a>
                </div>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={32} md={8} sm={16}>
            <Card sx={{ minWidth: 180 }} className="card2">
              <CardContent>
                {
                  <img id="profile" src="3.png" alt="profile" width={200} height={200} />}

                <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
                  Priyanshu<br /> Sharma
                </Typography>
              </CardContent>
              <CardActions>
                <div class="social-container">
                  <a href="https://github.com/Priyanshu2601"
                    className="github social">
                    <FontAwesomeIcon icon={faGithub} size="2x" />
                  </a>
                  <a href="https://twitter.com/Priyanshu995840" className="twitter social">
                    <FontAwesomeIcon icon={faTwitter} size="2x" />
                  </a>
                  <a href="https://www.linkedin.com/in/priyanshu-sharma-722760197/"
                    className="linkedin social">
                    <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
                  </a>
                </div>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={32} md={8} sm={16}>
            <Card sx={{ minWidth: 180 }} className="card3">
              <CardContent>
                {
                  <img id="profile" src="2.png" alt="profile" width={200} height={200} />}

                <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
                  Harsh<br /> Chaudhary
                </Typography>
              </CardContent>
              <CardActions>
                <div class="social-container">
                  <a href="https://github.com/mrharsh0606"
                    className="github social">
                    <FontAwesomeIcon icon={faGithub} size="2x" />
                  </a>
                  <a href="https://twitter.com/mrharsh06" className="twitter social">
                    <FontAwesomeIcon icon={faTwitter} size="2x" />
                  </a>
                  <a href="https://www.linkedin.com/in/harsh-chaudhary-563b47199/"
                    className="linkedin social">
                    <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
                  </a>
                </div>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={32} md={8} sm={16}>
            <Card sx={{ minWidth: 180 }} className="card4">
              <CardContent>
                {
                  <img id="profile" src="4.png" alt="profile" width={200} height={200} />}

                <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
                  Siddhant<br /> Vardhan Singh
                </Typography>
              </CardContent>
              <CardActions>
                <div class="social-container">
                  <a href="https://github.com/Siddhant-vardhansingh"
                    className="github social">
                    <FontAwesomeIcon icon={faGithub} size="2x" />
                  </a>
                  <a href="https://twitter.com/SiddhantVardha1" className="twitter social">
                    <FontAwesomeIcon icon={faTwitter} size="2x" />
                  </a>
                  <a href="https://www.linkedin.com/in/siddhant-vardhan-singh/"
                    className="linkedin social">
                    <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
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
