import React from 'react';
import { Switch, Route } from 'react-router-dom'

//pages
import CreateItem from './pages/create_item';


function App() {
 return (
   <Switch>
     <Route path='/create-item' component={CreateItem}/>
   </Switch>
 )
}

export default App;
