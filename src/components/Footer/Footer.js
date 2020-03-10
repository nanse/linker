/*eslint-disable*/
import React from 'react';
// nodejs library to set properties for components
import PropTypes from 'prop-types';
// nodejs library that concatenates classes
import classNames from 'classnames';
// material-ui core components
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import styles from 'assets/jss/material-kit-react/components/footerStyle.js';

const useStyles = makeStyles(styles);

export default function Footer(props) {
  const classes = useStyles();
  const { whiteFont, marginTop } = props;
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont,
    [classes.marginTop]: marginTop,
  });
  const aClasses = classNames({
    [classes.a]: true,
    [classes.footerWhiteFont]: whiteFont,
  });
  return (
    <footer className={footerClasses}>
      <Typography color="primary" variant="caption">
        상호명: 주시회사 링커 | 대표이사: 김동희 <br />
        사업자등록번호: 621-86-16962 <br />
        이메일: linker@ilinker.co.kr | 연락처 : 070-4117-0815 <br />
        경기도 성남시 분당구 판교로 253 판교 이노밸리 B동 1004호
      </Typography>
      <Typography variant="body1">
        Copyright&copy; {1900 + new Date().getYear()} linker. All Rights
        Reserved
      </Typography>
    </footer>
  );
}
