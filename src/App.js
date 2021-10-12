import { BrowserRouter as Router ,Switch ,Route} from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Inventory from './components/Inventory/Inventory';
import Login from './components/Login/Login';
import Notfound from './components/Notfound/Notfound';
import Order from './components/Order-Review/Order';
import PlaceOrder from './components/place/PlaceOrder';
import Shop from './components/Shop/Shop';

function App() {
  return (
    <div>

      <Router>
        <Header />

        <Switch>
          <Route exact path="/">
            <Shop />
          </Route>
          <Route path="/shop">
            <Shop />
          </Route>
          <Route path="/order">
            <Order />
          </Route>
          
          <Route path="/place">
             <PlaceOrder />
          </Route>

          <Route path="/inventory">
            <Inventory />
          </Route>

          <Route path="/login">
            <Login />
          </Route>       

          <Route path="*">
            <Notfound />
          </Route>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
