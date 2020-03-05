import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeSharp from '@material-ui/icons/HomeSharp';
import Help from '@material-ui/icons/HelpSharp';
import CallMissed from '@material-ui/icons/CallMissedSharp';
import BusinessCenterSharp from '@material-ui/icons/BusinessCenterSharp';
import ExitToAppSharp from '@material-ui/icons/ExitToAppSharp';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Redirect } from 'react-router-dom';
import Reqs from './Requisites';
import Quieries from './Queries';
import Docs from './Docs';


const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function ResponsiveDrawerUser(props) {
  const { container } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);

  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div className="center"><br/><b>Личный кабинет</b>
      <div className={classes.toolbar} />
      <Divider />
      <List>
          <ListItem button selected={selectedIndex === 0} onClick={event => handleListItemClick(event, 0)}>
            <ListItemIcon><HomeSharp /></ListItemIcon>
            <ListItemText primary='На главную' />
          </ListItem>
          <ListItem button selected={selectedIndex === 1} onClick={event => handleListItemClick(event, 1)}>
            <ListItemIcon><Help /></ListItemIcon>
            <ListItemText primary='Мои реквизиты' />
          </ListItem>
          <ListItem button selected={selectedIndex === 2} onClick={event => handleListItemClick(event, 2)}>
            <ListItemIcon><CallMissed /></ListItemIcon>
            <ListItemText primary='Ваши запросы' />
          </ListItem>
          <ListItem button selected={selectedIndex === 3} onClick={event => handleListItemClick(event, 3)}>
            <ListItemIcon><BusinessCenterSharp /></ListItemIcon>
            <ListItemText primary='Документы' />
          </ListItem>
         
      </List>
      <Divider />
      <List>
          <ListItem button selected={selectedIndex === 5} onClick={event => handleListItemClick(event, 5)}>
            <ListItemIcon><ExitToAppSharp /></ListItemIcon>
            <ListItemText primary='Выход' />
          </ListItem>
      </List>
    </div>
  );
  const fStyle = {
    fontFamily: "Times New Roman"
  };
   
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h5" >
          Добро пожаловать, {localStorage.getItem('userEmail')}!
          </Typography>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} style={fStyle}/>
        {selectedIndex === 0 && <Redirect to="/home"/>}
        {selectedIndex === 1 && <Reqs/>}
        {selectedIndex === 2 && <Quieries/>}
        {selectedIndex === 3 && <Docs/>}
        {selectedIndex === 5 && <Redirect to="/logout"/>}
        
      </main>
    </div>
  );
}

ResponsiveDrawerUser.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  container: PropTypes.instanceOf(typeof Element === 'undefined' ? Object : Element),
};

export default ResponsiveDrawerUser;