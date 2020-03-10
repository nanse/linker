import React from 'react';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';

// @material-ui/icons

// core components
import GridContainer from '../../Grid/GridContainer.js';
import GridItem from '../../Grid/GridItem.js';
import CustomInput from '../../CustomInput/CustomInput.js';
import Button from '../../CustomButtons/Button.js';

import styles from '../../../assets/jss/material-kit-react/pages/landingPageSections/workStyle.js';

const useStyles = makeStyles(styles);

export default function WorkSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem cs={12} sm={12} md={8}>
          <h2 className={classes.title}>생활기록부</h2>
          <h4 className={classes.description}>
            생활기록부(이하 ‘생기부’)는 보안성과 익명성을 보장 합니다.(자세한
            내용은 하단에 설명) 생기부를 입력한 멘토는 (오프라인)과외매칭,
            (온라인)입시컨설팅, (온라인)생기부열람 3가지 수익활동이 가능합니다.
            <br />
            <br /> 생기부를 입력한 멘토는 신뢰확보와 추가적인 수익활동이
            가능합니다. 해당 이벤트의 대상을 19,20학번으로 선정한 이유는,
            경험/경력을 쌓아가고 있는 멘토들의 추가적인 신뢰확보와 멘티의
            관심도를 반영하여 선정하였습니다.
            <br />
            <br />
            참고로, 생기부의 ‘수상경력’, ‘봉사활동’, ‘독서활동’, ‘진로희망‘과
            같이 객관적 항목은 결제 후 유료열람이 가능하고, 그 외 개인을 특정할
            수 있는 항목인 ‘교과학습발달상황’, ‘세부능력 및 특기사항’,
            ‘행동발달사항’ 등은 멘토와 (온라인)입시컨설팅을 통하여 멘토의 승인
            시 유료 열람이 되는 방식입니다.
          </h4>
        </GridItem>
      </GridContainer>
    </div>
  );
}
