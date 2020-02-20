import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

// layout
import UploadLayout from '../components/Layouts/UploadLayout';
import GridContainer from '../components/Grid/GridContainer.js';
import GridItem from '../components/Grid/GridItem.js';
const styles = {
  // root: {},
  // container: {
  //   margin: '0 auto',
  //   padding: theme.spacing(3),
  // },
  // title: {
  //   marginTop: theme.spacing(-10),
  //   color: theme.palette.common.neutral,
  //   fontSize: '3.2rem',
  //   fontWeight: '600',
  //   lineHeight: '60px',
  // },
  // subtitle: {
  //   marginTop: theme.spacing(7),
  //   marginBottom: theme.spacing(5),
  //   color: theme.palette.common.neutral,
  //   fontSize: '1.4rem',
  //   lineHeight: '30px',
  // },
  // buttonContainer: {
  //   textAlign: 'center',
  // },
  // button: {
  //   margin: theme.spacing(2),
  // },
};

const useStyles = makeStyles(styles);

const WelcomePage = () => {
  const classes = useStyles();

  return (
    <UploadLayout>
      <GridItem>
        <div className={classes.brand}>
          <h1 className={classes.title}>🎉 생기부 업로드 완료 🎊</h1>
          <h3 className={classes.subtitle}>
            🌼 더 좋은 서비스로 찾아뵙겠습니다. 그떄까지 안녕히 계세요. 🌻
          </h3>
        </div>
      </GridItem>
    </UploadLayout>
  );
};

export default WelcomePage;
