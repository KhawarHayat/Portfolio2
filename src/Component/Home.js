import React, { Component } from 'react';
import style from'../Css/Home.module.css'
import Header from './Header';
class Home extends Component {
    
    render() {
        return (
            <>
            <div id='Home' className={style.Img}>
            <div className={style.main}>
                <center>
                <p className={style.first}>Front-End Web Developer</p>
                <p className={style.second}>with a passion for learning</p>
                </center>
         </div>
         </div>
            </>
        );
    }
}

export default Home;