import lawn from '../../images/homepage/lawn.jpg';

const white = '#FFFFFF';
const green = '#20ad1d';
export default {
  homepageContainer: {
    margin: '0',
    flexGrow: '1',
  },
  homepageHeadingContainer: {
    backgroundImage: `url(${lawn})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'noRepeat',
    backgroundPosition: 'center',
    height: '40em',
    overflow: 'hidden',
    width: '100%',
    margin: '0',
  },
  headingShadowContainer: {
    backgroundColor: 'rgba(0,0,0,0.7)',
    width: '100%',
    margin: '4em 0',
  },
  headingHeader: {
    textAlign: 'center',
    width: '100%',
    marginBottom: '-10em',
  },
  header: {
    fontSize: '5em',
    color: 'white',
    paddingTop: '1em',
  },
  buttonContainer: {
    width: '100%',
  },
  buttonDiv: {
    height: '3em',
    marginTop: '0em',
    textAlign: 'center',
  },
  requestButton: {
    padding: '.65em 1.1em',
    fontSize: '1.7em',
    borderRadius: '25px',
    color: white,
    backgroundColor: green,
    boxShadow: '0px 12px 10px -10px rgba(0,0,0,0.4)',
  },
};
