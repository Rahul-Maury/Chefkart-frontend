
import './App.css';

import Home from './components/Home/Home.js';
import Ingredients from './components/Ingredient/Ingredients.js'

import { BrowserRouter as Router,Route } from 'react-router-dom';
function App() {
  return (
   <>
    {/* <Home/> */}
   
    {/* <Ingredients/> */}
   
    <Router>
         <Route exact path="/" component={Home}/>
        <Route  exact path='/ing' component={Ingredients}/>
      </Router>
  
     
   
   
   </>
  );
}

export default App;
