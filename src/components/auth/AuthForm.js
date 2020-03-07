import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

import Card from '../Card/Card.js';
import CardHeader from '../Card/CardHeader.js';

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(6),
  },
  cardHidden: {
    opacity: '0',
    transform: 'translate3d(0, -60px, 0)',
  },
  form: {
    margin: '0',
  },
  cardHeader: {
    width: 'auto',
    textAlign: 'center',
    marginLeft: '20px',
    marginRight: '20px',
    marginTop: '-40px',
    padding: theme.spacing(1, 0),
    marginBottom: '15px',
  },

  divider: {
    marginTop: '30px',
    marginBottom: '0px',
    textAlign: 'center',
  },
  cardFooter: {
    paddingTop: '0rem',
    border: '0',
    borderRadius: '6px',
    justifyContent: 'center !important',
  },
  inputIconsColor: {
    color: '#495057',
  },
  terms: {
    textAlign: 'center',
  },
}));

const RegisterForm = ({ title, cardAnimaton, onSubmit, children }) => {
  const classes = useStyles();

  return (
    <Card className={clsx(classes[cardAnimaton], classes.root)}>
      <form className={classes.form} onSubmit={onSubmit}>
        <CardHeader color="primary" className={classes.cardHeader}>
          <h4>{title}</h4>
        </CardHeader>
        {children}
      </form>
    </Card>
  );
};

export default RegisterForm;
