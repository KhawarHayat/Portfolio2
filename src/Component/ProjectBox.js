import React, { PureComponent } from 'react';
import Modal from './Modal'
import style from '../Css/Portfolio.module.css'
import {FaSearchPlus} from "react-icons/fa"
class ProjectBox extends PureComponent {
  state = {
    isOpen : false
  }
    render() {
        return (
                <div className={style.projectbox} onClick={() => this.setState({isOpen : !this.state.isOpen})}>
                  <img className={style.img} src={this.props.src} height={200} width={300} />
                  <p className={style.text}>
                    <FaSearchPlus className={style.icon}/>
                  </p>
                  <Modal open = {this.state.isOpen} projectName={this.props.projectName} list={this.props.list} codeLink={this.props.codeLink} siteLink={this.props.siteLink} src={this.props.src} />
                </div>
        );
    }
}

export default ProjectBox;