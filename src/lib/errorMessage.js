import { ERROR_MESSAGES } from '../common/const';
const findErrorMessage = errorCode => {
  let message = '';
  switch (errorCode) {
    case ERROR_MESSAGES.ERROR_RECORD_UPLOAD:
      message = '생활기록부 업로드중에 오류가 발생했습니다. 다시 시도해주세요.';
      break;
    case ERROR_MESSAGES.ERROR_RECORD_EXTENSION_NOT_ALLOWED:
      message =
        '지원하지 않는 확장자 입니다. (지원가능한 확장자: xls, xlsx, pdf, doc, docx)';
      break;
    case ERROR_MESSAGES.ERROR_BAD_REQUEST:
      message = '잘못된 요청 입니다.';
      break;
    default:
      message = '오류가 발생 했습니다. ';
      break;
  }
  return message;
};

export default findErrorMessage;
