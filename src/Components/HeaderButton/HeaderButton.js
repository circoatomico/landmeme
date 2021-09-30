import * as React from 'react';
import { IconButton, Link as LinkMaterial } from '@material-ui/core';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';
import { Link as LinkRouter } from 'react-router-dom';

const options = [
  'GIFs',
  'Vídeos',
  'Imagens',
  'Coletâneas'
];

const ITEM_HEIGHT = 48;

export default function LongMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
    
  return (
    <div>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls="long-menu"
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MenuIcon sx={{color: 'white'}} />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '20ch',
          },
        }}
      >
        {options.map((option) => ( 
          <LinkRouter to={option} key={'link_' + option}>
            <MenuItem 
              key={option} 
              selected={option === 'Pyxis'} 
              onClick={handleClose}
              >
              <LinkMaterial 
                to={option} 
                underline="none"
                sx={{
                  color: 'black', 
                  textDecoration: 'none', 
                  fontFamily:  'Comfortaa !important'}}
                > 
              {option}
              </LinkMaterial> 
            </MenuItem> 
          </LinkRouter>
        ))}
      </Menu>
    </div>
  );
}