import React, { Component } from 'react';
import HamburgerMenu from 'react-hamburger-menu'
import ReactDOM from 'react-dom'
import style from '../Css/Header.module.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'

class Header extends Component {
    state = {
        open : false,
    }
    handleClick = () => {
        this.setState({
            open: !this.state.open
        })
    }
    render() {
        let menu ;
        if(this.state.open){
            menu = <Menu/>
        }
        else{
            menu = null
        }
        return (
            <>
            <div className={`${style.head} ${this.props.class}`}>
                <div className={style.Div1}>
                    <img className={style.img} src='https://fontmeme.com/permalink/200814/740d3fbcf44c7d7d4b9f15fc0bd7e812.png' />
                </div>
                <div className={style.Div2} >
                    <AnchorLink offset='70' href='#Home'>Home</AnchorLink>
                    <AnchorLink offset='70' href='#About'>About</AnchorLink>
                    <AnchorLink offset='70' href='#Skill'>Skills</AnchorLink>
                    <AnchorLink  offset='70' href='#Portfolio'>Portfolio</AnchorLink>
                    <AnchorLink offset='70' href='#Contact'>Contact</AnchorLink>
                    <a href='MyResume.pdf' download='KhawarResume'>Resume</a>
                </div>
                <div className={style.Div3}>
                <HamburgerMenu
                isOpen={this.state.open}
                menuClicked={this.handleClick.bind(this)}
                width={50}
                height={30}
                strokeWidth={5}
                rotate={0}
                color='blanchedalmond'
                borderRadius={5}
                animationDuration={0.5}
                />
                {menu}
                </div>
            </div>
            </>
        );
    }
}

class Menu extends Component {
    render(){
        return(
            <>
            <div className = {style.menu}>
            <AnchorLink offset='70' href='#Home'>Home</AnchorLink>
                    <AnchorLink offset='70' href='#About'>About</AnchorLink>
                    <AnchorLink offset='70' href='#Skill'>Skills</AnchorLink>
                    <AnchorLink  offset='70' href='#Portfolio'>Portfolio</AnchorLink>
                    <AnchorLink offset='70' href='#Contact'>Contact</AnchorLink>
                    <a href='MyResume.pdf' download='KhawarResume'>Resume</a>
                </div>
            </>
        )
    }
}

export default Header;