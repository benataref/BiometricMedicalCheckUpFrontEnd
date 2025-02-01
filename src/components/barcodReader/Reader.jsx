import React, { useState, useRef, useEffect } from 'react';

const Reader = () => {
  const [barcode, setBarcode] = useState('');
  const inputRef = useRef(null);

 
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  const handleInputChange = (e) => {
    setBarcode(e.target.value);
  };
  const handleKeyDown = (event) => {
    console.log('Key Pressed:', event.key); 

 
    if (event.key === 'Enter') {
      console.log('Scanned Barcode:', barcode);
      setBarcode(''); 
    } else if (event.key.match(/^[0-9]$/)) {
 
      setBarcode(prev => prev + event.key);
    }
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Barcode Scanner</h1>
      <input
        type="text"
        ref={inputRef}
        value={barcode}
        onChange={(e) => setBarcode(e.target.value)} 
        onKeyDown={handleInputChange} 
        placeholder="Scan a barcode"
        style={{ width: '80%', padding: '10px', marginBottom: '10px' }}
      />
    </div>
  );
};

export default Reader;
 