import React, { Component } from 'react';
import Navbar from './component/Navbar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './component/home';
import About from './component/about';
import DisplayItem from './component/displayItem';
 class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar/>
          <Switch>
         <Route exact path='/' component={Home}/>
          <Route  path='/about' component={About}/>
          <Route   path='/:path' component={DisplayItem}/>
          </Switch>

        </div>
        
      </BrowserRouter>
    )
  }
}

export default App;

// redirecting pages visit page : https://www.youtube.com/watch?v=GiaFedx5cfA&list=PL4cUxeGkcC9ij8CfkAY2RAGb-tmkNwQHG&index=27
