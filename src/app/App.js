import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Product from "../product/product";
import HttpService from '../services/http-service-js/http-service';

 
const http = new HttpService();

class App extends Component {

  constructor (props){
    super (props);
    //binds to the function below
    this.loadData = this.loadData.bind(this);
    this.loadData();
  }

  loadData = () => {
    http.getProducts().then(products => {
      console.log(products);
    }, err => {

    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Welcome to the Swag Shop!
          </p>
          <div className="container App-main">
              <div className= "row">
                <Product className="col-sm-4" price="4.23" title="Teddy Bear" imgUrl="https://www.buildabear.com/dw/image/v2/BBNG_PRD/on/demandware.static/-/Sites-buildabear-master/default/dwcda44071/27423x.jpg?sw=600&sh=600&sm=fit"/>
                <Product className="col-sm-4" price="4.23" title="Teddy Bear" imgUrl="https://www.buildabear.com/dw/image/v2/BBNG_PRD/on/demandware.static/-/Sites-buildabear-master/default/dwcda44071/27423x.jpg?sw=600&sh=600&sm=fit"/>
                <Product className="col-sm-4" price="4.23" title="Teddy Bear" imgUrl="https://www.buildabear.com/dw/image/v2/BBNG_PRD/on/demandware.static/-/Sites-buildabear-master/default/dwcda44071/27423x.jpg?sw=600&sh=600&sm=fit"/>
              </div> 
          </div>
        </header>
      </div>
    );
  }
}

export default App;
