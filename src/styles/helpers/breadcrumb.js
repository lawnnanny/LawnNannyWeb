const green = '#20ad1d';
const blue = '#1205ff';

export default {
  grid: {
    display: 'flex',
  },
  link: {
    width: '20%',
    padding: '0',
    border: 'none',
    boxShadow: 'none',
    margin: '0',
  },
  column: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  row: {
    paddingTop: '1.5rem',
  },
  currentLabel: {
    backgroundColor: 'white',
    fontSize: '1.2rem',
    color: 'black',
    padding: '0',
    marginTop: '.2em',
  },
  label: {
    backgroundColor: 'white',
    padding: '0',
    marginTop: '.2em',
    fontSize: '1em',
    color: '#dadada',
  },
  finishedIcon: {
    boxShadow: '0 0 0 2px #20ad1d inset',
    margin: '0',
    color: green,
    width: '48px',
    height: '48px',
    fontSize: '4em',
    backgroundColor: 'white',
  },
  currentIcon: {
    boxShadow: '0 0 10px 2px #0e42ff inset',
    margin: '0',
    width: '48px',
    height: '48px',
    color: blue,

    fontSize: '4em',
    backgroundColor: 'white',
  },
  unfinishedIcon: {
    margin: '0',
    width: '48px',
    height: '48px',
    boxShadow: '0 0 0 2px #D7D7D7 inset',
    color: '#D7D7D7',

    fontSize: '4em',
    backgroundColor: 'white',
  },
  finishedSvg: {
    color: green,
  },
  currentSvg: {
    color: blue,
  },
  unfinishedSvg: {
    color: '#D7D7D7',
  },
  leftBarUnfinished: {
    position: 'absolute',
    top: 20,
    height: 1,
    borderTopStyle: 'solid',
    borderTopWidth: 3,
    borderTopColor: '#D7D7D7',
    left: 0,
    right: '51%',
    marginRight: 20,
  },
  rightBarUnfinished: {
    position: 'absolute',
    top: 20,
    height: 1,
    borderTopStyle: 'solid',
    borderTopWidth: 3,
    borderTopColor: '#D7D7D7',
    right: 0,
    left: '49.7%',
    marginLeft: 20,
  },
  leftBarFinished: {
    position: 'absolute',
    top: 20,
    height: 1,
    borderTopStyle: 'solid',
    borderTopWidth: 3,
    borderTopColor: '#20ad1d',
    left: 0,
    right: '51%',
    marginRight: 20,
  },
  rightBarFinished: {
    position: 'absolute',
    top: 20,
    height: 1,
    borderTopStyle: 'solid',
    borderTopWidth: 3,
    borderTopColor: '#20ad1d',
    right: 0,
    left: '49.5%',
    marginLeft: 20,
  },
  base: {
    opacity: 0,
  },
  appear: {
    opacity: 1,
    transition: 'all 5000ms',
  },
  enter: {
    opacity: 0.5,
    transition: 'all 5000ms',
    background: '#4CAF50',
  },
};
