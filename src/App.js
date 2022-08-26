import {Navbar, NavbarBrand} from 'react-bootstrap'
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar bg='warning'>
        <div className='container'>
          <NavbarBrand href="/" className= "text-white">Ristorante Con Fusion</NavbarBrand>
        </div>
      </Navbar>
    </div>
    
  );
}

export default App;
