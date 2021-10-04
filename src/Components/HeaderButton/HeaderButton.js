import * as React from 'react';
import { Link as LinkRouter } from 'react-router-dom';

import {
  IconButton, 
  Link as LinkMaterial,
  Menu,
  MenuItem
} from '@material-ui/core/';

import WbIncandescentIcon from '@material-ui/icons/WbIncandescent';
import MenuIcon from '@material-ui/icons/Menu';

const options = [
  'GIFs',
  'Vídeos',
  'Imagens',
  'Coletâneas'
];

const ITEM_HEIGHT = 80;

class LongMenu extends React.Component{

  state= {
    anchorEl: null
  }

  handleUpdate = (color) => {
    this.setState({themeColor: color})
  }

  render() { 
  
  const setAnchorEl = (anchorEl) => {
    this.setState({anchorEl})
  }

  const open = Boolean(this.state.anchorEl);
  
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
        anchorEl={this.state.anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '20ch',
          },
        }}
      >
        <MenuItem
          onClick={ () => {
            if ( this.props.themeColor === '#1976d2' ) {
              this.props.updateState('#242526')
            } else {
              this.props.updateState('#1976d2')
            }
          }}
        >
          <LinkMaterial  
            underline="none"
            sx={{
              color: 'black', 
              textDecoration: 'none', 
              fontFamily:  'Comfortaa !important'}}
            >  
            
            <span > 
              {(this.props.themeColor === '#1976d2') ? 'Apagar ' : 'Acender '}              
              <WbIncandescentIcon />                
            </span>

          </LinkMaterial> 
        </MenuItem> 


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
  );}
}

export default (LongMenu);
 