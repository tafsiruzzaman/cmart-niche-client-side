import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home/Home/Home';
import AuthProvider from './contexts/AuthProvider';
import RegistrationRoute from './PrivateRoutes/RegistrationRoute/RegistrationRoute';
import SignIn from './pages/Registration/SignIn/SignIn';
import GeneralRoute from './PrivateRoutes/GeneralRoute/GeneralRoute';
import Deshboard from './pages/Deshboard/Deshboard/Deshboard';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Explore from './pages/Explore/Explore';
import NotFound from './pages/NotFound/NotFound';
import OrderCar from './pages/OrderCar/OrderCar';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <Route path="/explore">
            <Explore></Explore>
          </Route>
          <GeneralRoute path="/ordercar/:id">
            <OrderCar></OrderCar>
          </GeneralRoute>
          <GeneralRoute path="/deshboard">
            <Deshboard></Deshboard>
          </GeneralRoute>
          <RegistrationRoute path="/signin">
            <SignIn></SignIn>
          </RegistrationRoute>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
