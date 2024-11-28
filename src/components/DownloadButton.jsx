// DownloadButton.js
import React from 'react';

const DownloadButton = ({ invoiceData }) => {
  const handleDownload = () => {
    // Call function to save invoice as PDF
    saveInvoiceAsPDF(invoiceData);
  };

  return (
    <button
      onClick={handleDownload}
      className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
    >
      Download Invoice
    </button>
  );
};

export default DownloadButton;
