import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { NavLink } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';

export default function SimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        <MenuIcon />
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
        <MenuItem onClick={handleClose}><NavLink to="/description9">Консультация</NavLink></MenuItem>

      </Menu>
    </div>
  );
}