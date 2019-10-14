import React from 'react'
import Home from './components/Home'
import About from './components/About'
import './App.css'
import Skills from './components/Skills'
import Gallery from './components/Gallery'
import Registration from './components/Registration'
import Contact from './components/Contact'


class App extends React.Component{

  render(){
      return(
        <div className="is-preload">
          <Home />
          <About />
          <Skills />
          <Gallery />
          <Registration />
          <Contact />
        </div>
      )
        

      } 
  
}

export default App;