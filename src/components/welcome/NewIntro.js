import React from 'react';
// nodejs library that concatenates classes
import classNames from 'classnames';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';

// @material-ui/icons

// core components
import GridContainer from 'components/Grid/GridContainer.js';
import GridItem from 'components/Grid/GridItem.js';
import Button from 'components/CustomButtons/Button.js';
import Parallax from 'components/Parallax/Parallax.js';

import styles from '../../assets/jss/material-kit-react/pages/landingPage.js';

// Sections for this page
import ProductSection from './Sections/ProductSection.js';
import TeamSection from './Sections/TeamSection.js';
import WorkSection from './Sections/WorkSection.js';
import WorkSection2 from './Sections/WorkSection2.js';
import WorkSection3 from './Sections/WorkSection3.js';

const useStyles = makeStyles(styles);

export default function LandingPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Parallax image={require('../../assets/img/welcome-bg1.jpg')}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <h1 className={classes.title}>
                입시의 <br></br>모든 것을 해결하다.
              </h1>
              <h2>사전모집 안내</h2>
              <h4>
                “ 당신을 먼저 초대합니다.” <br></br>먼저 가입하신 멘토들에게
                정보거래 활성화 지원금 총 5,000만원을 지급합니다.
              </h4>
              <br />
              <Button color="danger" size="lg" href="/register">
                사전모집 바로가기
              </Button>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <WorkSection />
          <WorkSection2 />
          <WorkSection3 />
          <ProductSection />
          <TeamSection />
        </div>
      </div>
    </div>
  );
}
