import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';
import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import AccountCircle from '@material-ui/icons/AccountCircle';
import ListAlt from '@material-ui/icons/ListAlt';
import Home from '@material-ui/icons/Home';
import styles from './navbar-mobile.module.css';
import LoginModal from '../../login-modal';
import SignupModal from '../../signup-modal';

const styling = {
  root: {
    position: 'fixed',
    bottom: '0',
    backgroundColor: 'white',
    width: '100%',
    alignItems: 'center',
    height: '4.5em',
    zIndex: '999',
  },
  actionItem: {
    color: '#313131',
    fontSize: '.95em',
    '&$selected': {
      color: '#3da601',
      fontSize: '1.05em',
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
          icon={<Home className={styles.homeIcon} />}
        />
        <BottomNavigationAction
          classes={{
            label: classes.actionItem,
            root: classes.actionItem,
            selected: classes.selected,
          }}
          label="Requests"
          value="request"
          icon={<ListAlt className={styles.homeIcon} />}
        />
        {this.props.isLoggedIn ? (
          <BottomNavigationAction
            classes={{
              label: classes.actionItem,
              root: classes.actionItem,
              selected: classes.selected,
            }}
            label="Account"
            value="account"
            icon={<AccountCircle className={styles.accountIcon} />}
          />
        ) : (
          <React.Fragment>
            <BottomNavigationAction
              classes={{
                label: classes.actionItem,
                root: classes.actionItem,
                selected: classes.selected,
              }}
              label="Account"
              value="account"
              icon={<LoginModal history={this.props.history} />}
            />
            <BottomNavigationAction
              classes={{
                label: classes.actionItem,
                root: classes.actionItem,
                selected: classes.selected,
              }}
              label="Account"
              value="account"
              icon={<SignupModal history={this.props.history} />}
            />
          </React.Fragment>
        )}
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
