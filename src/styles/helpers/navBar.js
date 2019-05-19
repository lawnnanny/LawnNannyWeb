const green = '#25ff03';
const white = '#FFFFFF';
const blue = '#1205ff';

export default {
  Menu: {
    width: '100%',
    minHeight: '6em',
    backgroundColor: 'black',
    boxShadow: 'none',
    border: 'none',
    margin: '0',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  leftMenuDiv: {
    display: 'flex',
    alignItems: 'center',
  },
  rightMenuDiv: {
    display: 'flex',
  },
  homeIcon: {
    fontSize: '2.5em',
    color: green,
  },
  userIcon: {
    fontSize: '1.8em',
    marginTop: '.5em',
    marginRight: '.8em',
  },
  logoutButton: {
    backgroundColor: blue,
    color: white,
    marginRight: '.5em',
    padding: '.7em',
  },
};
