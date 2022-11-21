import React from "react";
import Grid from '@mui/material/Grid';
import YouTubeIcon from '@mui/icons-material/YouTube';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import "./Footer.css";

function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="column">
        <Grid className="footer"
  container spacing={2}
  direction="row"
  justify="centre"
>
        <Grid item xs={3.5} md={7.5} sm={4}>
        <div class="Learn Candlestick-logo">
          <ul className="Footer-links">
           
            <h5 className="list-items">
              <li>Features</li><br/>
              <li>Learn Candlestick</li><br/>
              <li>Docs</li>
            </h5>
            </ul>
          </div>
          </Grid>
         <Grid item xs={2.5} md={1.5} sm={2}>
          <div className="row">
          <ul className="Footer-links">
            <h3>Resources</h3>
            
            <h5 className="list-items">
           
              <li>Learning</li><br/>
              <li>Practice</li><br/>
              <li>Quiz</li>
              </h5>
            </ul>
          </div>
          </Grid>
          <Grid item xs={3.5} md={1.5} sm={4}>
          <h3>Socials</h3>  
          <div class="social-container" >
        <a href="https://www.youtube.com/c/jamesqquick" target="_blank"
        className="youtube social">
          <YouTubeIcon fontSize="large"/>
      </a>
      <a href="https://www.facebook.com/learnbuildteach/" target="_blank"
        className="facebook social">
        <GitHubIcon fontSize="large"/>
      </a>
      <a href="https://www.twitter.com/jamesqquick" target="_blank" className="twitter social">
        <TwitterIcon fontSize="large"/>
      </a>
      <a href="https://www.instagram.com/learnbuildteach" target="_blank"
        className="instagram social">
        <InstagramIcon fontSize="large" />
      </a>
        </div>
          </Grid>
        </Grid>
        </div>
       
        <div class="grid-container">

        <div className="row">
          <p className="copyright">
            &copy;{new Date().getFullYear()} Learn Candlestick | All rights reserved
             | Privacy
          </p>
        </div>
</div>
      </div>
    </div>
  );
}
export default Footer;