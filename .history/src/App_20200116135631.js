import React, { Component} from 'react';
import './bootstrap.min.css'
import Header from './components/ui/Header'


class App extends Component {
  state = {  }
  render() { 
    return ( 
      <div class="container">
        <Header titulo = "Administrador"/>
      </div>
     );
  }
}
 
export default App;