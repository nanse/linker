import React, { useEffect, useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { Helmet } from 'react-helmet-async';

// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import { InputAdornment, CircularProgress } from '@material-ui/core';
// @material-ui/icons
import Check from '@material-ui/icons/Check';
import Lock from '@material-ui/icons/Lock';
import AttachFileIcon from '@material-ui/icons/AttachFile';

// layout
import UploadLayout from '../components/Layouts/UploadLayout';

// component
import GridContainer from '../components/Grid/GridContainer.js';
import GridItem from '../components/Grid/GridItem.js';
import Button from '../components/CustomButtons/Button.js';
import Card from '../components/Card/Card.js';
import CardBody from '../components/Card/CardBody.js';
import CardFooter from '../components/Card/CardFooter.js';
import CustomInput from '../components/CustomInput/CustomInput.js';
import SnackbarContent from '../components/Snackbar/SnackbarContent';

// modules
import { openModal } from '../modules/base';
import { uploadRecord } from '../modules/record';

import styles from '../assets/jss/material-kit-react/pages/registerPage.js';

const useStyles = makeStyles(styles);
const UploadPage = ({ history }) => {
  const [cardAnimaton, setCardAnimation] = useState('cardHidden');
  const [file, setFile] = useState(null);
  const [pdfPassword, setPdfPassword] = useState('');
  const classes = useStyles();

  const dispatch = useDispatch();
  const { record, recordError, loading } = useSelector(
    ({ record, loading }) => ({
      record: record.record,
      recordError: record.recordError,
      loading: loading['record/UPLOAD_RECORD'],
    }),
  );

  // 인증 체크
  useEffect(() => {
    try {
      const auth = sessionStorage.getItem('auth');
      if (!auth) {
        dispatch(
          openModal({
            title: '알림',
            description: '회원가입한 사용자만 접근이 가능합니다.',
            showCancelbutton: false,
            onConfirm: () => history.push('/welcome'),
          }),
        );
        return;
      }
    } catch (error) {}
  }, [dispatch, history]);

  // 업로드 성공 / 실패
  useEffect(() => {
    // 실패
    if (recordError) {
      dispatch(
        openModal({
          title: '알림',
          description: recordError.resultText,
          showCancelbutton: false,
        }),
      );
      return;
    }

    if (record) {
      history.push('/complete');
    }
  }, [dispatch, history, record, recordError]);

  // Form Sumit 이벤트 핸들러
  const handleSubmit = e => {
    e.preventDefault();
    if (!file) {
      dispatch(
        openModal({
          title: '알림',
          description: '파일을 첨부해 주세요.',
          showCancelbutton: false,
        }),
      );
      return;
    }

    const fileFormData = new FormData();
    fileFormData.append('image', file);

    dispatch(uploadRecord({ fileFormData, pdfPassword }));
  };

  // 파일첨부 이벤트 핸들러
  const handleFileChange = useCallback(e => {
    const files = e.target.files;
    if (files && files.length > 0) {
      setFile(files[0]);
    }
  }, []);

  // 패스워드 변경 이벤트 핸들러
  const handleChange = useCallback(e => {
    setPdfPassword(e.target.value);
  }, []);

  setTimeout(function() {
    setCardAnimation('');
  }, 700);

  return (
    <UploadLayout>
      <Helmet>
        <title>생기부 업로드 - Linker</title>
      </Helmet>
      <SnackbarContent
        message={
          <span>
            <b>회원가입 성공: </b> 추가 정보를 입력해주세요.
          </span>
        }
        color="success"
        icon={Check}
      />
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={4}>
          <Card className={classes[cardAnimaton]}>
            <form
              className={classes.form}
              onSubmit={handleSubmit}
              encType="multipart/form-data"
            >
              <p className={classes.divider}>
                생기부를 업로드하고 다양한 혜택을 누려보세요.
              </p>
              <CardBody>
                <CustomInput
                  id="file1"
                  formControlProps={{
                    fullWidth: true,
                  }}
                  inputProps={{
                    type: 'file',
                    // accept: '.xlsx,.xls,.doc,.docx,.pdf',
                    endAdornment: (
                      <InputAdornment position="end">
                        <AttachFileIcon className={classes.inputIconsColor} />
                      </InputAdornment>
                    ),
                  }}
                  onChange={handleFileChange}
                />
                <CustomInput
                  labelText="pdf 패스워드"
                  id="pdfPassword"
                  formControlProps={{
                    fullWidth: true,
                  }}
                  inputProps={{
                    type: 'password',
                    endAdornment: (
                      <InputAdornment position="end">
                        <Lock className={classes.inputIconsColor} />
                      </InputAdornment>
                    ),
                  }}
                  onChange={handleChange}
                />
              </CardBody>
              <CardFooter className={classes.cardFooter}>
                {loading ? (
                  <CircularProgress></CircularProgress>
                ) : (
                  <Button color="primary" size="lg" type="submit">
                    파일 업로드
                  </Button>
                )}
              </CardFooter>
            </form>
          </Card>
        </GridItem>
      </GridContainer>
    </UploadLayout>
  );
};

export default withRouter(UploadPage);
