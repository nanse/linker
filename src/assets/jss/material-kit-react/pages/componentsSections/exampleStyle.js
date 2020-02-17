import { conatinerFluid } from '../../material-kit-react.js';

import imagesStyle from './assets/jss/material-kit-react/imagesStyles.js.js.js';

const exampleStyle = {
  section: {
    padding: '70px 0',
  },
  container: {
    ...conatinerFluid,
    textAlign: 'center !important',
  },
  ...imagesStyle,
  link: {
    textDecoration: 'none',
  },
};

export default exampleStyle;
