import React from 'react';
import {
  Switch,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import logo from '../../../images/logo2.png'
import MyOrders from '../MyOrders/MyOrders/MyOrders';
import Review from '../Review/Review';
import Pay from '../Pay/Pay';
import useAuth from '../../../hooks/useAuth';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import ManageAllOrders from '../ManageAllOrders/ManageAllOrders';
import ManageProducts from '../ManageProducts/ManageProducts';
import AdminRoute from '../../../PrivateRoutes/AdminRoute/AdminRoute';
import { Spinner } from 'react-bootstrap';
import NotFound from '../../NotFound/NotFound';
import AddAProduct from '../AddAProduct/AddAProduct';
import EditDetails from '../EditDetails/EditDetails';

const drawerWidth = 230;

function Dashboard(props) {
  const { admin, adminLoading } = useAuth();
  const {logOut} = useAuth();
  const { window } = props;
  let { path, url } = useRouteMatch();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar>
        <img className="img-fluid" src={logo} alt=""/>
      </Toolbar>
      <Divider />
      {
        !admin ? 
        <div className="text-start mt-4">
          <Link to={`/`} className="text-decoration-none">
            <Button className="ms-4" variant="text">
              <i className="fs-5 text-danger fw-bolder fas fa-home me-4"></i> <small className="fw-bolder text-dark">Home</small>
            </Button>
          </Link>
          <Link to={`${url}/my-bookings`} className="text-decoration-none">
            <Button className="ms-4" variant="text">
              <i className="fs-5 text-danger fw-bolder fas fa-car me-4"></i> <small className="fw-bolder text-dark">My Bookings</small>
            </Button>
          </Link>
          <Link to={`${url}/review`} className="text-decoration-none">
            <Button className="ms-4" variant="text">
              <i className="fs-5 text-danger fw-bolder fas fa-marker me-4"></i> <small className="fw-bolder text-dark">Review</small>
            </Button>
          </Link> <br/>
          <Link to={`${url}/pay`} className="text-decoration-none">
            <Button className="ms-4" variant="text">
              <i className="fs-5 text-danger fw-bolder fas fa-money-check-alt me-4"></i> <small className="fw-bolder text-dark">Pay</small>
            </Button>
          </Link>
        </div>
        :
        <div className="text-start mt-4">
          <Link to={`${url}/make-admin`} className="text-decoration-none">
            <Button className="ms-4" variant="text">
              <i className="fs-5 text-danger fw-bolder fas fa-user-cog me-3"></i> <small className="fw-bolder text-dark">Make Admin</small>
            </Button>
          </Link>
          <Link to={`${url}/add-a-product`} className="text-decoration-none">
            <Button className="ms-4" variant="text">
              <i className="fs-5 text-danger fw-bolder fas fa-folder-plus me-3"></i> <small className="fw-bolder text-dark">Add a product</small>
            </Button>
          </Link>
          <Link to={`${url}/manage-products`} className="text-decoration-none">
            <Button className="ms-4" variant="text">
              <i className="fs-5 text-danger fw-bolder fas fa-tasks me-3"></i> <small className="fw-bolder text-dark">Manage products</small>
            </Button>
          </Link>
          <Link to={`${url}/manage-all-orders`} className="text-decoration-none">
            <Button className="ms-4" variant="text">
              <i className="fs-5 text-danger fw-bolder fas fa-cogs me-3"></i> <small className="fw-bolder text-dark">Manage All Orders</small>
            </Button>
          </Link>
        </div>
      }
      <Button onClick={logOut} variant="contained" style={{backgroundColor: "#dc3545", marginTop: "300px", borderRadius: 0}}>
        <i className="fas fa-sign-in-alt me-2"></i> Signout
      </Button>

    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  if (adminLoading) {
    return <Spinner animation="border" variant="warning" />
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar style={{backgroundColor: "#dc3545"}}
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
          {
            admin? 
            <Switch>
              <Route exact path={`${path}`}>
                <ManageAllOrders></ManageAllOrders>
              </Route>
              <AdminRoute path={`${path}/manage-products`}>
                <ManageProducts></ManageProducts>
              </AdminRoute>
              <AdminRoute path={`${path}/edit-details/:id`}>
                <EditDetails></EditDetails>
              </AdminRoute>
              <AdminRoute path={`${path}/add-a-product`}>
                <AddAProduct></AddAProduct>
              </AdminRoute>
              <AdminRoute path={`${path}/make-admin`}>
                <MakeAdmin></MakeAdmin>
              </AdminRoute>
              <AdminRoute path={`${path}/manage-all-orders`}>
                <ManageAllOrders></ManageAllOrders>
              </AdminRoute>
              <Route path={`${path}/my-bookings`}>
                <MyOrders></MyOrders>
              </Route>
              <Route path={`${path}/review`}>
                <Review></Review>
              </Route>
              <Route path={`${path}/pay`}>
                <Pay></Pay>
              </Route>
            </Switch>
          :
            <Switch>
              <Route exact path={`${path}`}>
                <MyOrders></MyOrders>
              </Route>
              <Route path={`${path}/my-bookings`}>
                <MyOrders></MyOrders>
              </Route>
              <Route path={`${path}/review`}>
                <Review></Review>
              </Route>
              <Route path={`${path}/pay`}>
                <Pay></Pay>
              </Route>
              <Route path={`${path}/*`}>
                <NotFound></NotFound>
              </Route>
            </Switch>
          }
      </Box>
    </Box>
  );
}

Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Dashboard;