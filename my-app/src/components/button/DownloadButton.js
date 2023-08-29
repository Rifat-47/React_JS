import React from 'react';

const DownloadButton = () => {
  const handleDownload = () => {
    const pdfUrl = 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf';
    window.open(pdfUrl, '_blank');
  };

  return (
    <button onClick={handleDownload}>Download PDF</button>
  );
};

export default DownloadButton;
