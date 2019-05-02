import React from 'react';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import Styles from '../../styles/helpers/sidebar';

class Sidebar extends React.Component {
  state = {
    isOpen: false,
  };

  toggleDrawer = open => () => {
    this.setState({ isOpen: open });
  };

  render() {
    return (
      <div>
        <Button onClick={this.toggleDrawer(true)}>Open Left</Button>
        <Drawer open={this.state.isOpen} onClose={this.toggleDrawer(false)}>
          <ListItem button>
            <ListItemText>Hello</ListItemText>
          </ListItem>
        </Drawer>
      </div>
    );
  }
}

export default Sidebar;
