import client from './client';

// 생기부 업로드
export const uploadRecord = ({ fileFormData, pdfPassword = '' }) =>
  client.post(
    `edu/svc/uploadMentorDocs?pdfPassword=${pdfPassword}`,
    fileFormData,
  );

// 멘토 업로드 파일 가져오기
export const mentoDocs = () => client.get('/svc/retrieveMentorDocs');
