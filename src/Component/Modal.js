import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom'
import style from '../Css/Modal.module.css'
import {FaTimesCircle, FaCheckSquare} from 'react-icons/fa'
class Modal extends PureComponent {
    state = {
        list: ['HTML', "CSS", "React"]
    }
     tech = (list) => {
         const newList = []
     for(let i = 0; i < list.length; i++){
        newList.push(<p id={list[i]} className={style.p}> <FaCheckSquare color="#4bc6f2"/> {list[i]}</p>)
     }
     return newList
    }
    code = (code) => {
        if(code == null || code == undefined){
            return null
        }
        else{
            return (
<p> Click <a className={style.a} href={code}>here</a> to get the source code from GitHub </p>
            )
        }
    }
    site = (site) => {
        if(site == null || site == undefined){
            return null
        }
        else{
            return (
<p> Click <a className={style.a} href={site}>here</a> to see the website </p>
            )
        }
    }
    render() {
        if (!this.props.open) return null
        return ReactDOM.createPortal(
            <div className={style.overlay}>
            <div className={style.modal}>
             <FaTimesCircle className={style.close} />
        <h3 className={style.heading}>{this.props.projectName}</h3>
             <hr/>
             <div className={style.content}>
                <div className={style.technology}>
                    <p >Technologies Used</p>
                     {this.tech(this.props.list)}
                     {this.code(this.props.codeLink)}
                     {this.site(this.props.siteLink)}
                </div>
                <div className={style.image}>
                    <img className={style.img} src={this.props.src} alt='project-picture' />
                </div>
            </div>
            </div>
            </div>,
            document.getElementById('modal')
        );
    }
}

export default Modal;