import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Drawer from '@material-ui/core/Drawer';
import SvgIcon from '@material-ui/core/SvgIcon';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Styles from '../../styles/helpers/sidebar';

const styles = {
  paperOverride: {
    opacity: '.95',
    width: '22em',
    backgroundColor: 'black',
    paddingTop: '.56em',
  },
};

class Sidebar extends React.Component {
  state = {
    isOpen: false,
  };

  toggleDrawer = open => () => {
    this.setState({ isOpen: open });
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <IconButton onClick={this.toggleDrawer(true)} style={Styles.menuButton}>
          <SvgIcon style={Styles.menuIcon}>
            <path d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z" />
          </SvgIcon>
        </IconButton>
        <Drawer
          open={this.state.isOpen}
          onClose={this.toggleDrawer(false)}
          classes={{ paper: classes.paperOverride }}
        >
          <div style={Styles.sidebar}>
            <IconButton onClick={this.toggleDrawer(false)} style={Styles.menuButton}>
              <SvgIcon style={Styles.menuIcon}>
                <path d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z" />
              </SvgIcon>
            </IconButton>
            <ListItem button style={Styles.sidebar}>
              <ListItemText>Hello</ListItemText>
            </ListItem>
          </div>
        </Drawer>
      </div>
    );
  }
}

export default withStyles(styles)(Sidebar);
