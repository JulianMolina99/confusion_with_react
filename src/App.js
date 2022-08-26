import {Navbar, NavbarBrand} from 'react-bootstrap'
import Menu from './components/MenuComponents';
import './App.css';

function App() {
  return (
    <div>
      <Navbar bg='warning'>
        <div className='container'>
          <NavbarBrand href="/" className= "text-white">Ristorante Con Fusion</NavbarBrand>
        </div>
      </Navbar>
      <Menu/>
    </div>
    
  );
}

export default App;
