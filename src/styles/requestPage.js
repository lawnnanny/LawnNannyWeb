import home from '../images/nicehome2.jpg';
const white = '#FFFFFF';
const green = '#20ad1d';
const blue = '#1205ff';
export default {
  menu: {
    height: '6em',
    alignItems: 'center',
    justifyContent: 'center',
  },
  requestButton: {
    height: '2.5em',
    padding: '.5em',
    fontSize: '1.9em',
    backgroundColor: green,
    color: white,
    margin: '0',
  },
  image: {
    height: '23em',
    width:'100%',
    backgroundImage:`url(${home})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
  },
  header: {
    color: '#3d3b3b',
  },
  userRow: {
    paddingBottom: '.5em',
  },
  ratingRow: {
    paddingTop: '0em',
    paddingLeft: '1em',
  },
  userRating: {
    paddingRight: '.2em',
  },
  descriptionHeader: {
    textDecoration: 'underline',
  },
  reviewHeader: {
    textDecoration: 'underline',
  },
};
