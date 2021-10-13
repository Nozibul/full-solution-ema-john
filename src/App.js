import { BrowserRouter as Router ,Switch ,Route} from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Inventory from './components/Inventory/Inventory';
import Login from './components/Login/Login';
import Notfound from './components/Notfound/Notfound';
import Order from './components/Order-Review/Order';
import PlaceOrder from './components/place/PlaceOrder';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Register from './components/Register/Register';
import Shipping from './components/Shipping/Shipping';
import Shop from './components/Shop/Shop';
import AuthProvider from './context/AuthProvider';

function App() {
  return (
   
    <div>
     <AuthProvider>  
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

          <PrivateRoute path="/shipping">
             {/* <PlaceOrder /> */}
             <Shipping />
          </PrivateRoute>

          <PrivateRoute path="/inventory">
            <Inventory />
          </PrivateRoute>

          <Route path="/login">
            <Login />
          </Route>    
          <Route to="/register">
            <Register />
          </Route>   

          <Route path="*">
            <Notfound />
          </Route>
        </Switch>
      </Router>
      </AuthProvider>  
     </div>
    
  );
}

export default App;
