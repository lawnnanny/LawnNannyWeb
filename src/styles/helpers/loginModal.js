const green = '#20ad1d';
const blue = '#1205ff';
const white = '#FFFFFF';

export default {
  Menu: {
    width: '100%',
    minHeight: 42,
    backgroundColor: white,
    paddingBottom: '.5rem',
    paddingTop: '.5rem',
    boxShadow: 'none',
    border: 'none',
    marginBottom: '0rem',
  },
  loginButton: {
    backgroundColor: white,
    color: blue,
    padding: '.8em',
    borderRadius: '25px',
    border: '.1rem solid',
    borderColor: blue,
  },
  menuItem: {
    padding: '.5rem',
  },
  modal: {
    position: 'absolute',
    float: 'left',
    left: '50%',
    top: '65%',
    transform: 'translate(-50%, -50%)',
    padding: '1em',
  },
  modalHeader: {
    display: 'flex',
    justifyContent: 'center',
    color: green,
    fontSize: '2rem',
    backgroundColor: white,
    borderBottom: 'none',
  },
  modalButton: {
    backgroundColor: green,
    color: white,
  },
  dynamicSegment: {
    border: 'none',
    boxShadow: 'none',
    padding: '0',
  },
  formSegment: {
    backgroundColor: white,
    border: 'none',
    boxShadow: 'none',
    padding: '0',
  },
};
