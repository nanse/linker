import client from './client';

// 생기부 업로드
export const uploadRecord = ({ fileFormData, pdfPassword = '' }) =>
  client.post(
    `edu/svc/uploadMentorDocs?pdfPassword=${pdfPassword}`,
    fileFormData,
  );
