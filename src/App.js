import './style/bootstrap.min.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Navigation from './components/Navigation';
import Home from './pages/Home';
import ShoppingBuddy from './pages/ShoppingBuddy';
import Clock from './pages/Clock';
import TicTacToe from './pages/TicTacToe';
import About from './pages/About';
import Error from './pages/Error';
import Cocktails from './pages/Cocktails';
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

        <Route path="/Cocktails">
          <Cocktails/>
        </Route>

        <Route path="/Cocktails/:id">
          <Cocktails/>
        </Route>

        <Route path="/Clock">
          <Clock/>
        </Route>

        <Route path="/TicTacToe">
          <TicTacToe/>
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
