import React from 'react';
import './App.css';
import Home from './components/Home';
import View from './components/View';

/** Importing Toastify ToastContainer */
import {ToastContainer} from 'react-toastify';

import { Switch, Route} from "react-router-dom";

import AddBlog from './components/AddBlog';
import EditBlog from './components/EditBlog';

const App = () => {
  return (
    <div className="App">
      
      {/**Routes we need : add, edit, view (using id) */}
      
      <ToastContainer/>

      <Switch>
        <Route exact path="/" component={()=><Home/>}/>

        <Route path="/add">
          <AddBlog/>
        </Route>

        <Route path="/edit/:id">
          <EditBlog/>
        </Route>

        <Route path="/view/:id">
          <View/>
        </Route>
      </Switch>

    </div>
  );
}

export default App;