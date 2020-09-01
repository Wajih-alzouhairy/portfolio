import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
class Landing extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="https://coclican.ird.fr/wp-content/uploads/2018/11/if_malecostume_403022.png"
              alt="avatar"
              className="avatar-img"
            />
            <div className="banner-text">
              <h1>Front End web Developer</h1>
              <hr />
              <p>HTML / CSS / JS / React</p>
              <div className="social-links">
                {/*LinkedIn */}
                <a href="http://google.com" target="_blank">
                  <i
                    className="fa fa-linkedin-square"
                    rel="noopener noreferrer"
                    aria-hidden="true"
                  />
                </a>
                {/*Github */}
                <a href="http://google.com" target="_blank">
                  <i
                    className="fa fa-github-square"
                    rel="noopener noreferrer"
                    aria-hidden="true"
                  />
                </a>
                {/*Freecodecamp */}
                <a href="http://google.com" target="_blank">
                  <i
                    className="fa fa-code-camp-square"
                    rel="noopener noreferrer"
                    aria-hidden="true"
                  />
                </a>
                {/*Youtube */}
                <a href="http://google.com" target="_blank">
                  <i
                    className="fa fa-youtube-square"
                    rel="noopener noreferrer"
                    aria-hidden="true"
                  />
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}
export default Landing;
