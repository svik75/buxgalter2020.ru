import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();
const styleAB = {
    background: '#2E3B55',
    color: 'white'
};
  return (
    <div className={classes.root}>
      <AppBar position="static" style={styleAB}>
        <Toolbar>
          <IconButton style={styleAB}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            ООО "Гарант Консалтинг"
          </Typography>
          <Button style={styleAB}>Вход</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}