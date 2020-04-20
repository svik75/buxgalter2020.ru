import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { NavLink } from 'react-router-dom';
import CallMissed from '@material-ui/icons/CallSharp';

export default function SimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const myStyle = {
    position: 'fixed',
    top: 0,
    left: '50%',
    transform: 'translate(-50%, 0)',
    zIndex: 1000,
    background: 'white',
    width: '100%'
};

  return (
    <div style={myStyle}>
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        МЕНЮ
      </Button>
      <Menu 
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}><NavLink to="/home">Главная</NavLink></MenuItem>
        <MenuItem onClick={handleClose}><NavLink to="/auth"><b>Личный кабинет</b></NavLink></MenuItem>
        <MenuItem onClick={handleClose}><NavLink to="/about">О нас</NavLink></MenuItem>
        <MenuItem onClick={handleClose}><NavLink to="/description1">Учет в НКО</NavLink></MenuItem>
        <MenuItem onClick={handleClose}><NavLink to="/description2">Учет в ООО</NavLink></MenuItem>
        <MenuItem onClick={handleClose}><NavLink to="/description3">Учет ИП</NavLink></MenuItem>
        <MenuItem onClick={handleClose}><NavLink to="/description4">Отчетность НКО</NavLink></MenuItem>
        <MenuItem onClick={handleClose}><NavLink to="/description5">Отчетность ООО и ИП</NavLink></MenuItem>
        <MenuItem onClick={handleClose}><NavLink to="/description6">Нулевая отчетность</NavLink></MenuItem>
        <MenuItem onClick={handleClose}><NavLink to="/description7">1С Отчетность</NavLink></MenuItem>
        <MenuItem onClick={handleClose}><NavLink to="/description8">Астрал Отчетность</NavLink></MenuItem>
        <MenuItem onClick={handleClose}><NavLink to="/description10">Открыть счет</NavLink></MenuItem>

      </Menu>
      <br/>
      <a className="center red-text" href="tel:74993977513" style={{'fontSize':'22px'}}> <CallMissed /> +74993977513</a>
    </div>
  );
}