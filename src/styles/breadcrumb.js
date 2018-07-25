const green = '#20ad1d';
const white = '#FFFFFF';
const black = '#000000';
const blue = '#0e42ff';

export default {
  grid: {
    marginTop: '.3em',
  },
  link: {
    width: '20%',
    padding: '0',
    border: 'none',
    boxShadow: 'none',
    margin: '0',
  },
  segment: {
    textAlign: 'center',
    padding: '0',
    border: 'none',
    boxShadow: 'none',
    margin: '0',
  },
  column: {
    padding: '0',
  },
  row: {
    paddingTop: '1.5rem',
  },
  currentLabel: {
    backgroundColor: 'white',
    fontSize: '1.2rem',
    color: 'black',
    padding: '0',
  },
  label: {
    backgroundColor: 'white',
    padding: '0',
  },
  finishedIcon: {
    boxShadow: '0 0 0 0.1em #20ad1d inset',
    margin: '0',
    color: green,
  },
  currentIcon: {
    boxShadow: '0 0 10px 0.1em #0e42ff inset',
    margin: '0',
    color: blue,
  },
  unfinishedIcon: {
    margin: '0',
    boxShadow: '0 0 0 0.1em #D7D7D7 inset',
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
    left: '51%',
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
    left: '51%',
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
