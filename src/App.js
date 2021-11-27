import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import About from './components/About/About';
import Login from './components/Login/Login/Login';
import Register from './components/Login/Register/Register';
import Notfound from './components/Notfound/Notfound';
import AuthProvider from './context/AuthProvider';
import Order from './components/Order/Order';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import Categories from './components/Categories/Categories';
import Review from './components/Home/Review/Review';
import DashboardNav from './components/Dashboard/DashboardNav/DashboardNav';


function App() {

  return (
    <div className="App">
     
 <AuthProvider>
 <Router>
       <Switch>

         <Route exact path ="/">
          <Home></Home>
        </Route>

         <Route path="/about">
         <About></About>
         </Route>

         <Route path="/categories">
         <Categories></Categories>
         </Route>

       

         <PrivateRoute path="/dashboard">
             <DashboardNav></DashboardNav>
          </PrivateRoute>

         <PrivateRoute path="/placeorder/:id">
             <Order></Order>
          </PrivateRoute>

          <PrivateRoute path="/login/:orderId">
            <Order></Order>
          </PrivateRoute>

        <Route path="/login">
          <Login></Login>
        </Route>
        <Route path="/register">
          <Register></Register>
        </Route>

       

         <Route exact path="*">
             <Notfound></Notfound>
          </Route>

       </Switch>
     </Router>
 </AuthProvider>
    </div>
  );
}

export default App;
