import React from 'react';
import { Document, Page } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css'; // Required for annotations

const PdfViewer = ({ fileUrl }) => {
  return (
    <div>
      <Document
        file={fileUrl}
        onLoadSuccess={({ numPages }) => console.log(`Loaded ${numPages} pages`)}
      >
        <Page pageNumber={1} />
      </Document>
    </div>
  );
};

export default PdfViewer;
