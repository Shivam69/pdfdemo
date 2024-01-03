import React, { useState } from 'react';
import { Scrollama, Step } from 'react-scrollama';
import { Document, Page } from 'react-pdf';

const PDFViewer = () => {
    const filepath = '../../src/PDFViewer/image/sample.pdf'
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [currentStep, setCurrentStep] = useState(0);

  const onStepEnter = ({ data }) => {
    setCurrentStep(data);
  };

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  return (
    <div>
      <Scrollama onStepEnter={onStepEnter} offset={0.5}>
        {[1, 2, 3].map((step, index) => (
          <Step key={index} data={index}>
            <div style={{ height: '100vh', marginBottom: '20px' }}>
              <Document file={filepath} onLoadSuccess={onDocumentLoadSuccess}>
                <Page pageNumber={pageNumber} />
              </Document>
            </div>
          </Step>
        ))}
      </Scrollama>
      <div style={{ position: 'fixed', bottom: '20px', left: '50%', transform: 'translateX(-50%)' }}>
        <p>Current Step: {currentStep}</p>
      </div>
    </div>
  );
};

export default PDFViewer;
