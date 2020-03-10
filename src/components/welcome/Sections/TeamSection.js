import React from 'react';
// nodejs library that concatenates classes
import classNames from 'classnames';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';

// @material-ui/icons

// core components
import GridContainer from '../../Grid/GridContainer.js';
import GridItem from '../../Grid/GridItem.js';
import Button from '../../CustomButtons/Button.js';
import Card from '../../Card/Card.js';
import CardBody from '../../Card/CardBody.js';
import CardFooter from '../../Card/CardFooter.js';

import styles from '../../../assets/jss/material-kit-react/pages/landingPageSections/teamStyle.js';

import team1 from '../../../assets/img/home/linker-01.png';
import team2 from '../../../assets/img/home/linker-02.png';

const useStyles = makeStyles(styles);

export default function TeamSection() {
  const classes = useStyles();
  const imageClasses = classNames(classes.imgRaised, classes.imgFluid);
  return (
    <div className={classes.section}>
      <h2 className={classes.title}>링커는?</h2>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={team1} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                입시컨설팅
                <br />
                {/* <small className={classes.smallTitle}>App</small> */}
              </h4>
              <CardBody>
                <p className={classes.description}>
                  1:1 온라인 입시컨설팅 매칭을 할 수 있습니다. 생기부 등을
                  기반으로 멘티/멘토가 상호 제안과 협의를 할 수있습니다.
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + ' fab fa-twitter'} />
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + ' fab fa-instagram'} />
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + ' fab fa-facebook'} />
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={team2} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                멘토검증
                <br />
                {/* <small className={classes.smallTitle}>Designer</small> */}
              </h4>
              <CardBody>
                <p className={classes.description}>
                  객과적 항목인 수상경력, 봉사활동, 독서활동 등 진로희망 만 결제
                  후 유료열람이 가능하고 개인을 식별할 수 있는 정보는 익명처리
                  됩니다.
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + ' fab fa-twitter'} />
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + ' fab fa-linkedin'} />
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={team1} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                과외매칭
                <br />
                {/* <small className={classes.smallTitle}>Model</small> */}
              </h4>
              <CardBody>
                <p className={classes.description}>
                  오프라인 과외 매칭을 할 수있습니다. 멘티입장에서는 과외 선생님
                  리스트를 멘토 입장에서는 과외 구하는 학생 리스트를 보고 과외
                  제안과 협의를 할수 있습니다.
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + ' fab fa-twitter'} />
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + ' fab fa-instagram'} />
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + ' fab fa-facebook'} />
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
