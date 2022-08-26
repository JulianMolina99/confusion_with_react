import {Navbar, NavbarBrand} from 'react-bootstrap'
import Menu from './components/MenuComponents';
import './App.css';
import {DISHES} from './shared/dishes';
import { Component } from 'react';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      dishes: DISHES
    };
  }

  render(){
    return (
      <div>
        <Navbar bg='warning'>
          <div className='container'>
            <NavbarBrand href="/" className= "text-white">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
        <Menu dishes={this.state.dishes}/>
      </div>
      
    );
  }
}

export default App;
