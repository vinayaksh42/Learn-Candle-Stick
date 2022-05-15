import React from "react";
import Grid from '@mui/material/Grid';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faGithub,
  faTwitter,
  faSlack,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";


function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="column">
        <Grid
  container spacing={2}
  direction="row"
  justify="centre"
>
        <Grid item xs={4} md={4} sm={4}>
        <div class="Learn Candlestick-logo">
			
			 <h1>LEARN CANDLESTICK</h1>
             
				</div>
                </Grid>
          <Grid item xs={4} md={4} sm={4}>
          <div className="row">
          <ul className="Footer-links">
            <h3>Getting Started</h3>
           
            <h5 className="list-items">
              <li>Features</li>
              <li>Run Learn Candlestick</li>
              <li>Docs</li>
            </h5>
            </ul>
          </div>
          </Grid>
         <Grid item xs={4} md={4} sm={4}>
          <div className="row">
          <ul className="Footer-links">
            <h3>Resources</h3>
            
            <h5 className="list-items">
           
              <li>Learning</li>
              <li>Practice</li>
              <li>Quiz</li>
              </h5>
            </ul>
          </div>
          </Grid>
          </Grid>
        </div>
        <hr />
        <div class="grid-container">

        <div className="row">
          <p className="copyright">
            &copy;{new Date().getFullYear()} Learn Candlestick | All rights reserved
             | Privacy
          </p>
        </div>
        <div class="social-container" >
        <a href="https://www.youtube.com/c/jamesqquick"
        className="youtube social">
        <FontAwesomeIcon icon={faYoutube} size="2x" />
      </a>
      <a href="https://www.facebook.com/learnbuildteach/"
        className="facebook social">
        <FontAwesomeIcon icon={faGithub} size="2x" />
      </a>
      <a href="https://www.twitter.com/jamesqquick" className="twitter social">
        <FontAwesomeIcon icon={faTwitter} size="2x" />
      </a>
      <a href="https://www.instagram.com/learnbuildteach"
        className="instagram social">
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>
      <a href="https://www.instagram.com/learnbuildteach"
        className="slack social">
        <FontAwesomeIcon icon={faSlack} size="2x" />
      </a>
        </div>
</div>
      </div>
    </div>
  );
}
export default Footer;