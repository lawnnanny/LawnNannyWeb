import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';
import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import styles from './navbar-mobile.module.css';

const styling = {
  root: {
    position: 'fixed',
    bottom: '0',
    backgroundColor: '#3da601',
    width: '100%',
    alignItems: 'center',
    height: '84px',
  },
  actionItem: {
    color: 'white',
    fontSize: '1em',
    '&$selected': {
      color: 'black',
      fontSize: '1.1em',
    },
  },
  // NOTE: You need to include a `.selected` class in your
  // styles rules for the "&$selected" selector to work.
  selected: {},
};

class LabelBottomNavigation extends React.Component {
  state = {
    value: '',
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <BottomNavigation
        showLabels
        value={value}
        onChange={this.handleChange}
        className={classes.root}
      >
        <BottomNavigationAction
          classes={{
            label: classes.actionItem,
            root: classes.actionItem,
            selected: classes.selected,
          }}
          label="Home"
          value="home"
          icon={
            <SvgIcon className={styles.homeIcon}>
              <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
            </SvgIcon>
          }
        />
        <BottomNavigationAction
          classes={{
            label: classes.actionItem,
            root: classes.actionItem,
            selected: classes.selected,
          }}
          label="Account"
          value="account"
          icon={
            <SvgIcon className={styles.accountIcon}>
              <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm7.753 18.305c-.261-.586-.789-.991-1.871-1.241-2.293-.529-4.428-.993-3.393-2.945 3.145-5.942.833-9.119-2.489-9.119-3.388 0-5.644 3.299-2.489 9.119 1.066 1.964-1.148 2.427-3.393 2.945-1.084.25-1.608.658-1.867 1.246-1.405-1.723-2.251-3.919-2.251-6.31 0-5.514 4.486-10 10-10s10 4.486 10 10c0 2.389-.845 4.583-2.247 6.305z" />
            </SvgIcon>
          }
        />
        <BottomNavigationAction
          classes={{
            label: classes.actionItem,
            root: classes.actionItem,
            selected: classes.selected,
          }}
          label="More"
          value="more"
          icon={
            <SvgIcon className={styles.menuIcon}>
              <path d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z" />
            </SvgIcon>
          }
        />
      </BottomNavigation>
    );
  }
}

export default withStyles(styling)(LabelBottomNavigation);
