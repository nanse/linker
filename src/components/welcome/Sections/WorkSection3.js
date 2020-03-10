import React from 'react';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';

// @material-ui/icons

// core components
import GridContainer from '../../Grid/GridContainer.js';
import GridItem from '../../Grid/GridItem.js';

import styles from '../../../assets/jss/material-kit-react/pages/landingPageSections/workStyle.js';

const useStyles = makeStyles(styles);

export default function WorkSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem cs={12} sm={12} md={8}>
          <h2 className={classes.title}>합격후기</h2>
          <h4 className={classes.description}>
            합격후기는 링커 메인에 노출되어 (멘티)유저 모집 시 무료열람 하도록
            하고 해당 글 작성자인 멘토에게 흥미를 갖고 질문을 주고받으며
            오프라인과외나 온라인컨설팅으로 이어지는 등 생기부와 함께 정보 거래
            활성화 소재로 활용될 예정입니다.
            <br />
            <br /> 향후에는 멘티들이 궁금해 하는 다양한 소재로 확장할 예정이며,
            조회수나 질문수가 높은 글을 작성하신 멘토들은 선별되어 멘토와 멘티가
            1:N채팅 방식으로 진행되는 온라인멘토링 서비스에 참여 하실 수
            있습니다.
            <br />
            <br />
            온라인멘토링 서비스는 링커가 후원하며 선정된 멘토에게는 1시간에
            3만원 내외의 지원금을 추가로 지원하고 멘토는 추가적인 신뢰확보가
            가능할 것으로 기대하고 있습니다.
          </h4>
        </GridItem>
      </GridContainer>
    </div>
  );
}
