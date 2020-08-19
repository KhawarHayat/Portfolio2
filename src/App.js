import React, { Component } from 'react';
import Header from './Component/Header';
import style from './Css/App.module.css'
import Home from './Component/Home';
import About from './Component/About';
import Skill from './Component/Skill';
import Portfolio from './Component/Portfolio';
import Contact from './Component/Contact';
import Footer from './Component/Footer';
import Loader from 'react-loader-spinner'
// import MenuIcon from './Component/MenuIcon';

class App extends Component{
  state={
    isLoading: true
  }
  componentDidMount(){
    setInterval(() => {
      this.setState({
        isLoading: false
      })
    }, 3000)
      
    
  }
  render(){
    if(this.state.isLoading){
      return(
        <div className={style.isLoading}>
          <Loader type="Audio" color="#00BFFF" height={80} width={80}/>
          </div>
      )
    }
    else{
      return(
        <div className={style.App}>
        <Header class={style.header}/>
        <Home/>
        <About/>
        <Skill/>
        <Portfolio/>
        <Contact/>
        <Footer/>
        </div>
      )
    }
    
  }   
  
  
}

export default App;
