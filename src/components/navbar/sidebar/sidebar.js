import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';
import styles from './sidebar.module.css';
import MenuIcon from '../../icons/menu';

const MyItem = styled(ListItem)`
  &&& {
    :hover {
      background-color: #20ad1d;
    }
  }
`;

const styling = {
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
        <IconButton onClick={this.toggleDrawer(true)} className={styles.menuButton}>
          <MenuIcon styling={styles.menuIcon} />
        </IconButton>
        <Drawer
          open={this.state.isOpen}
          onClose={this.toggleDrawer(false)}
          classes={{ paper: classes.paperOverride }}
        >
          <div className={styles.sidebar}>
            <IconButton onClick={this.toggleDrawer(false)} className={styles.menuButton}>
              <MenuIcon styling={styles.menuIcon} />
            </IconButton>
            <MyItem button className={styles.aboutTerraItem}>
              <Typography className={styles.aboutTerraText}>About Terra</Typography>
            </MyItem>
            <MyItem button className={styles.featuresItem}>
              <Typography className={styles.featuresText}>Features</Typography>
            </MyItem>
            <MyItem button className={styles.helpItem}>
              <Typography className={styles.helpText}>Help</Typography>
            </MyItem>
            <MyItem button className={styles.contactItem}>
              <Typography className={styles.contactText}>Contact Us</Typography>
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

export default withStyles(styling)(Sidebar);
