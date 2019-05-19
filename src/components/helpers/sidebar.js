import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import SvgIcon from '@material-ui/core/SvgIcon';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';
import Styles from '../../styles/helpers/sidebar';

const MyItem = styled(ListItem)`
  &&& {
    :hover {
      background-color: #20ad1d;
    }
  }
`;

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
            <MyItem button style={Styles.aboutTerraItem}>
              <Typography style={Styles.aboutTerraText}>About Terra</Typography>
            </MyItem>
            <MyItem button style={Styles.featuresItem}>
              <Typography style={Styles.featuresText}>Features</Typography>
            </MyItem>
            <MyItem button style={Styles.helpItem}>
              <Typography style={Styles.helpText}>Help</Typography>
            </MyItem>
            <MyItem button style={Styles.contactItem}>
              <Typography style={Styles.contactText}>Contact Us</Typography>
            </MyItem>
          </div>
        </Drawer>
      </div>
    );
  }
}

Sidebar.propTypes = {
  classes: PropTypes.func,
};

Sidebar.defaultProps = {
  classes: PropTypes.func,
};

export default withStyles(styles)(Sidebar);
