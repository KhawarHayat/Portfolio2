import React, { Component } from 'react';
import style from '../Css/About.module.css'
class About extends Component {
    state = {  }
    render() {
        return (
            <div id="About" className={style.Main}>
                <center><h2>About Me</h2></center>
                <div className={style.main}>
                <div className={style.picDiv}>
                 <img className={style.profile} src='ProfileKhawar.jpg' height="300" width='300'/>
                <center><h3>Khawar Hayat</h3></center>
                </div>
                <div className={style.infoDiv}><p className={style.para}>I am expert in front-end. Have a strong technical and logical problem solving expertise & experience in core infrastructure development. I hold a deep understanding of React and Redux, have good fortunate on working medium to large projects.</p>
                <p className={style.para}>On a personal level, I am highly-motivated, result oriented, self-driven, hard-working, fast learner and constantly seeking to improve my skills and am fully aware of the latest Front-end Development Tools.</p>

                 <p className={style.para}>In addition to this, I have the ability to adapt to any type of team environment, I am team oriented and get along with others when working in a group setting. I also have the ability to work independently while staying on schedule and meeting those tight deadlines.</p>
                </div>
                </div>
            
            </div>
        );
    }
}

export default About;