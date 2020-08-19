import React, { Component } from 'react';
import style from '../Css/Skill.module.css'
import { Line } from 'rc-progress';
class SkillBox extends Component {
    render() {
        return (
            <div className={style.skillbox}>
            <center><img src={this.props.src} height={150} width={150}/></center>
        <p className={style.font}>{this.props.name}<strong>{this.props.percent}%</strong></p>
            <Line  percent={this.props.percent} strokeWidth="3" strokeColor={this.props.color} />
            </div>
        );
    }
}

export default SkillBox;