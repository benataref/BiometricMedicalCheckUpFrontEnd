// src/components/BarcodeGenerator.jsx
// src/components/BarcodeGenerator.jsx
import React, { useState } from 'react';

import Barcode from 'react-barcode';
const BarcodeGenerator = () => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };
  const PrintableBarcode = ({ value }) => {
    return (
      <div>
        <Barcode value={value} />
      </div>
    );
  };
  const handlePrint = () => {
    const printWindow = window.open('', '', 'width=600,height=400');
    printWindow.document.write('<html><head><title>Print Barcode</title></head><body>');
    printWindow.document.write('<div id="print-content">');
    printWindow.document.write(`<div>${inputValue}</div>`);
    printWindow.document.write('<div id="barcode-print">');
    printWindow.document.write('<script src="https://cdn.jsdelivr.net/npm/react-barcode@latest/dist/react-barcode.min.js"></script>');
    printWindow.document.write('</div>');
    printWindow.document.write('</div>');
    printWindow.document.write('</body></html>');
    printWindow.document.close();
    printWindow.focus();
    printWindow.print();
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Enter text to generate barcode"
      />
      {inputValue && (
        <div>
          <Barcode value={inputValue} />
          <button onClick={handlePrint}>Print Barcode</button>
        </div>
      )}
    </div>
  );
};

export default BarcodeGenerator;
