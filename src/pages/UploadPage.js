import React, { useEffect, useState, useCallback, useRef } from 'react';
import clsx from 'clsx';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { Helmet } from 'react-helmet-async';

// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import { Button, InputAdornment, CircularProgress } from '@material-ui/core';
// @material-ui/icons
import Lock from '@material-ui/icons/Lock';

// layout
import UploadLayout from '../components/Layouts/Upload/UploadLayout';

// component
import GridContainer from '../components/Grid/GridContainer.js';
import GridItem from '../components/Grid/GridItem.js';
import Card from '../components/Card/Card.js';
import CardHeader from '../components/Card/CardHeader.js';
import CardBody from '../components/Card/CardBody.js';
import CardFooter from '../components/Card/CardFooter.js';
import CustomInput from '../components/CustomInput/CustomInput.js';

// modules
import { openModal } from '../modules/base';
import { uploadRecord, docs } from '../modules/record';

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
}));
const UploadPage = ({ history }) => {
  const [cardAnimaton, setCardAnimation] = useState('cardHidden');
  const [file, setFile] = useState(null);
  const [file3, setFile3] = useState(null);
  const [selectedRecordSchoolFile, setSelectedRecordSchoolFile] = useState(
    '생기부 업로드. pdf 가능',
  );
  const [selectedReviewfile, setSelectedReview] = useState(
    '합격후기 업로드. pdf, word, excel 가능',
  );
  const [uploadedRecordFile, setUploadedRecordFile] = useState('');
  const [uploadedReviewFile, setUploadedReviewFile] = useState('');

  const [pdfPassword, setPdfPassword] = useState('');
  const classes = useStyles();

  const dispatch = useDispatch();
  const { record, mentoDocs, recordError, loading } = useSelector(
    ({ record, loading }) => ({
      record: record.record,
      mentoDocs: record.mentoDocs,
      recordError: record.recordError,
      loading: loading['record/UPLOAD_RECORD'],
    }),
  );

  const recordSchoolInput = useRef();
  const reviewInput = useRef();

  // 초기 진입
  useEffect(() => {
    // 01. 인증체크
    try {
      const auth = sessionStorage.getItem('auth');
      if (!auth) {
        dispatch(
          openModal({
            title: '알림',
            description: '회원가입한 사용자만 접근이 가능합니다.',
            showCancelbutton: false,
            onConfirm: () => history.push('/'),
          }),
        );
        return;
      }
    } catch (error) {}

    // 02. Mento 업로드 파일내역 가져오기
    dispatch(docs());
  }, [dispatch, history]);

  // Mento 업로드 파일내역 가져오기 성공 / 실패
  useEffect(() => {
    if (mentoDocs) {
      // TODO: API 확인후 최종작업하면됨.
      console.log(mentoDocs);
    }
  }, [dispatch, mentoDocs, recordError]);

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

    let uploadSuccessMessage = '정상으로 업로드 되었습니다.';
    if (record) {
      if (file && file3) {
        uploadSuccessMessage =
          '"생기부 / 합격후기" 정상으로 업로드 되었습니다.';
      } else if (file && !file3) {
        uploadSuccessMessage = '"생기부"가 정상으로 업로드 되었습니다.';
      } else if (!file && file3) {
        uploadSuccessMessage = '"합격후기"가 정상으로 업로드 되었습니다.';
      }

      dispatch(
        openModal({
          title: '알림',
          description: uploadSuccessMessage,
          showCancelbutton: false,
          onConfirm: () => history.push('/complete'),
        }),
      );
    }
  }, [dispatch, history, record, recordError]);

  // Form Sumit 이벤트 핸들러
  const handleSubmit = e => {
    e.preventDefault();
    if (!file && !file3) {
      dispatch(
        openModal({
          title: '알림',
          description: '파일을 1개 이상 첨부해 주세요.',
          showCancelbutton: false,
        }),
      );
      return;
    }

    const fileFormData = new FormData();
    fileFormData.append('file1', file);
    fileFormData.append('file3', file3);

    dispatch(uploadRecord({ fileFormData, pdfPassword }));
  };

  // 파일첨부 이벤트 핸들러
  const handleFileChange = useCallback(e => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const { name } = files[0];
      setSelectedRecordSchoolFile(name);
      setFile(files[0]);
    }
  }, []);

  const handleReviewFileChange = useCallback(e => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const { name } = files[0];
      setSelectedReview(name);
      setFile3(files[0]);
    }
  }, []);

  // 패스워드 변경 이벤트 핸들러
  const handleChange = useCallback(e => {
    setPdfPassword(e.target.value);
  }, []);

  // 파일찾기
  const onRecordShcoolUpload = useCallback(() => {
    recordSchoolInput.current.click();
  }, [recordSchoolInput.current]);

  const onReviewUpload = useCallback(() => {
    reviewInput.current.click();
  }, [reviewInput.current]);

  setTimeout(function() {
    setCardAnimation('');
  }, 700);

  return (
    <UploadLayout>
      <Helmet>
        <title>업로드 - Linker</title>
      </Helmet>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={4}>
          <Card className={clsx(classes[cardAnimaton], classes.root)}>
            <form
              className={classes.form}
              onSubmit={handleSubmit}
              encType="multipart/form-data"
            >
              <CardHeader color="primary" className={classes.cardHeader}>
                <h4>파일 업로드</h4>
              </CardHeader>
              <CardBody>
                {/* 생기부 */}
                <input
                  type="file"
                  multiple
                  hidden
                  ref={recordSchoolInput}
                  onChange={handleFileChange}
                  accept="application/pdf"
                />
                <CustomInput
                  labelText={selectedRecordSchoolFile}
                  id="recordSchoolFile"
                  helperText={uploadedRecordFile}
                  disabled
                  formControlProps={{
                    fullWidth: true,
                  }}
                  inputProps={{
                    type: 'text',
                  }}
                  endAdornment={
                    <InputAdornment position="end">
                      <Button
                        color="secondary"
                        size="small"
                        onClick={onRecordShcoolUpload}
                      >
                        파일찾기
                      </Button>
                    </InputAdornment>
                  }
                />
                <CustomInput
                  labelText="생기부 pdf 비밀번호"
                  id="pdfPassword"
                  formControlProps={{
                    fullWidth: true,
                  }}
                  endAdornment={
                    <InputAdornment position="end">
                      <Lock className={classes.inputIconsColor} />
                    </InputAdornment>
                  }
                  inputProps={{
                    type: 'password',
                  }}
                  onChange={handleChange}
                />

                {/* 후기  */}
                <input
                  type="file"
                  multiple
                  hidden
                  ref={reviewInput}
                  onChange={handleReviewFileChange}
                  accept="application/pdf,.xlsx,.xls,.doc,.docx"
                />
                <CustomInput
                  labelText={selectedReviewfile}
                  id="reviewFile"
                  helperText={uploadedReviewFile}
                  disabled
                  formControlProps={{
                    fullWidth: true,
                  }}
                  inputProps={{
                    type: 'text',
                  }}
                  endAdornment={
                    <InputAdornment position="end">
                      <Button
                        color="secondary"
                        size="small"
                        onClick={onReviewUpload}
                      >
                        파일찾기
                      </Button>
                    </InputAdornment>
                  }
                />
              </CardBody>
              <CardFooter className={classes.cardFooter}>
                {loading ? (
                  <CircularProgress></CircularProgress>
                ) : (
                  <Button
                    variant="contained"
                    color="secondary"
                    size="large"
                    type="submit"
                  >
                    확인
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
