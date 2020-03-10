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
          <h2 className={classes.title}>모집 인원 및 자격</h2>
          <h4 className={classes.description}>
            오픈 전 100명의 멘토님(이하 ‘멘토’) 모집을 계획하였습니다. 현재까지
            500명이 넘는 멘토께서 지원하셨고, 검토 끝에 본인의 생활기록부와
            합격후기를 작성하여 업로드 하신다면 최대 500명, 1인당 10만원의 정보
            거래 활성화 지원금을 제공하도록 하겠습니다.
            <br />
            <br />
            타사와 같이 멘토의 정보를 링커가 구매하여 판매 수익을 얻는 것이
            아닙니다. 멘토가 링커에 입력한 정보는 멘토의 수익활동/신뢰확보
            목적으로 사용됩니다.
            <br />
            <br /> 단, 활성화 지원금을 드린 멘토의 보안 처리된 일부 정보는 거래
            활성화를 위해서 객관적 항목인 ‘수상경력’, ‘봉사활동’, ‘독서활동’,
            ‘진로희망’에 대해서만 각 항목별 제한된 횟수 로 멘티에게 무료
            열람으로 제공되어 더 많은 멘티 모집 목적으로 활용됩니다.
            <br />
            <br /> 회원가입 혹은 로그인 후 업로드 하세요. 생활기록부와
            합격수기를 각각 따로 업로드 가능합니다.
          </h4>
        </GridItem>
      </GridContainer>
    </div>
  );
}
