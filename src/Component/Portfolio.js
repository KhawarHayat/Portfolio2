import React, { Component } from 'react';
import ProjectBox from './ProjectBox';
import style from '../Css/Portfolio.module.css'
class Portfolio extends Component {
    render() {
        return (
            <div id='Portfolio'>
            <center><h2>Portfolio</h2></center>
            <div className={style.main}>
            <ProjectBox src='Portfolio.jpg' projectName='Portfolio 2.0' list={['React', 'CSS3', 'JavaScript']} codeLink='https://github.com/KhawarHayat/Portfolio' siteLink='https://master.d3iivkwy7rqvu6.amplifyapp.com/' />
            <ProjectBox src='MilkMan.jpeg' projectName='Milk Man' list={['React', 'Redux', 'Semantic-UI', 'Node', 'Express.js', 'Restful APIs', 'MongoDB']} codeLink='https://github.com/KhawarHayat/MilkMan' />
            <ProjectBox src='FMS.jpeg' projectName='Frequency Management System' list={['React', 'Semantic-UI', 'Node', 'Express.js', 'Restful APIs', 'MySQL']} codeLink='https://github.com/KhawarHayat/FreqManagement' />
            <ProjectBox src='Portfolio.jpeg' projectName='Portfolio 1.0' list={['Next.js', 'Style Component', 'JavaScript']} codeLink='https://github.com/KhawarHayat/Portfolio' />
            <ProjectBox src='Ecommers.jpeg' projectName='E-Selling' list={['React', 'Semantic UI', 'GraphQL',"MongoDB", 'Node', "Express.js"]} codeLink='https://github.com/KhawarHayat/E-Selling'  />
            <ProjectBox src='MusicalStore.jpeg' projectName='Muisc Instruments Store' list={['React', 'CSS3', 'JavaScript']} codeLink='https://github.com/KhawarHayat/LandingPage' />
            </div>
            </div>
        );
    }
}

export default Portfolio;