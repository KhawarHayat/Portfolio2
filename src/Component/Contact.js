import React, { PureComponent } from 'react';
import style from '../Css/Contact.module.css'
import {FaPhoneSquare, FaEnvelope, FaPhone, FaMobile, FaSkype, FaLinkedinIn, FaFacebook, FaGithub} from 'react-icons/fa'
class Contact extends PureComponent {
    render() {
        return (
            <div id='Contact'>
            <center><h2>Contact Me</h2></center>
            <div className={style.main}>
            <div className={style.contactInfo}>
                <pre className={style.info}><FaMobile className={style.icon}/><span>  +92-300-6012057</span></pre>
                <pre className={style.info}><FaEnvelope className={style.icon}/><span>  khawarhayat1997@gmail.com</span></pre>
                <p className={style.socialIconMain}>
                    <a style={{color:'black'}} href='https://join.skype.com/invite/oTZDq6UpXmfZ'><FaSkype className={style.socialIcon}/></a>
                    <a style={{color:'black'}} href='https://www.linkedin.com/in/khawar-hayat-bhatti'><FaLinkedinIn className={style.socialIcon}/></a>
                    <a style={{color:'black'}} href='https://web.facebook.com/khawar.bhatti.50/' ><FaFacebook className={style.socialIcon}/></a>
                    <a style={{color:'black'}} href='https://github.com/KhawarHayat'><FaGithub className={style.socialIcon}/></a> 
                    </p>
            </div>
            <div className={style.map}>
                <img className={style.img} src='Map.png' alt='Map' />
            </div>
            </div>
            </div>
        );
    }
}

export default Contact;