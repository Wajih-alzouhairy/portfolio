import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Education from "./education";
import Experince from "./experince";
import Skills from "./skills";
class Resume extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{ textAlign: "center" }}>
              <img
                src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png"
                alt="avatar"
                style={{ height: "200px" }}
              />
            </div>
            <h2 style={{ paddingTop: "2em " }}>Wajih Alzouhairy</h2>
            <h4 style={{ color: "grey" }}>Programmer</h4>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <p>
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              sagittis pellentesque lacus eleifend
              lacinia................................ .........
            </p>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <h5>Address</h5>
            <p>Limburger Straße,13353 </p>
            <h5>Phone</h5>
            <p>0157 00812316</p>
            <h5>Email</h5>
            <p>Wajih93@gmail.com</p>
            <h5>GitHub</h5>
            <p>Wajih Alzouhairy</p>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>
            <Education
              startYear={2019}
              endYear={2021}
              schoolName="DCI"
              schoolDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry.
               Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
              when an unknown printer took a galley of type and scrambled it to make a type specimen book. "
            />

            <Education
              startYear={2019}
              endYear={2021}
              schoolName="DCI"
              schoolDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry.
               Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
              when an unknown printer took a galley of type and scrambled it to make a type specimen book. "
            />
            <hr style={{ borderTop: "3px solid #e22947" }} />
            <h2>Experince</h2>
            <Experince
              startYear={2019}
              endYear={2012}
              jobName="First Job"
              jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
           when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            />
            <hr style={{ borderTop: "3px solid #e22947" }} />
            <h2>Skills</h2>
            <Skills skill="javaScript" progress={85} />
            <Skills skill="Html" progress={85} />
            <Skills skill="NodeJs" progress={85} />
            <Skills skill="React" progress={85} />
            <Skills skill="Css" progress={85} />
          </Cell>
        </Grid>
      </div>
    );
  }
}
export default Resume;
