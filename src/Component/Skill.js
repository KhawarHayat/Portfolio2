import React, { Component } from 'react';
import style from '../Css/Skill.module.css'
import SkillBox from './SkillBox.js';
class Skill extends Component {
    render() {
        return (
            <div id='Skill' className={style.main}>
                <center><h2>Skills</h2></center>
                <div className={style.skillwrap}>
                <SkillBox color="#ffce6b" percent='85' name='JavaScript' src='jsLogo.png' />
                <SkillBox color="#fa743e" percent='80' name='HTML' src='htmlLogo.png' />
                <SkillBox color="#0d96ff" percent='70' name='CSS' src='cssLogo.png' />
                <SkillBox color="#9cdeff" percent='85' name='React' src='reactLogo.png' />
                <SkillBox color="#a60afa" percent='75' name='Redux' src='reduxLogo.png' />
                <SkillBox color="#9ACD32" percent='70' name='Node' src='node2.png' />
                <SkillBox color='#e3dd30' percent='60' name='ExpressJs' src='expressLogo.png' />
                <SkillBox color="#bf69b5" percent='60' name='Sass' src='download.png' />
                <SkillBox color="#9cdeff" percent='60' name='ReactStrap' src='reactStrapLogo.png' />
                <SkillBox color="#4599f7" percent='60' name='Material-UI' src='material-UI.png' />
                <SkillBox color="#4599f7" percent='60' name='MySQL' src='mySQLLogo.png' />
                <SkillBox color="#9ACD32" percent='60' name='Mongo-DB' src='mongoDBLogo.png' />
                <SkillBox color="#4599f7" percent='50' name='Webpack' src='webpackLogo.png' />
                </div>
            </div>
        );
    }
}

export default Skill;