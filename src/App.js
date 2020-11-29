import './bootstrap.min.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Navigation from './components/Navigation'
import Home from './pages/Home'
import ShoppingBuddy from './pages/ShoppingBuddy'

import About from './pages/About'
import Error from './pages/Error'
function App() {
  return (

    
    <Router>

      <Navigation/>


      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/ShoppingBuddy">
          <ShoppingBuddy/>
        </Route>

        <Route path="/About">
          <About/>
        </Route>
        <Route path="*">
          <Error/>
        </Route>
      </Switch>




    </Router>
   
  )
  
  
}

export default App;
