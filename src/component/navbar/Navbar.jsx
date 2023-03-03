import React, { Component } from 'react'

export default class Navbar extends Component {
  constructor(props){
    super(props)
    this.state={
      title:"",
    }
  }
  addTitle(title){
    this.setState({
      title:title,
    })
  }
componentDidMount(){
 this.addTitle(this.props.title);
}
  render(
    
  ) {

    return (
 
        <nav className="navegar" id="navegando"> 
         <h1 className="navegar__title">{this.state.title}</h1>
        <ul className="navegacion">
          <li className="nav-list"><a href="#" class="nav-link">HOME</a></li>
        </ul>
        </nav>
      
      
    )
  }
}
