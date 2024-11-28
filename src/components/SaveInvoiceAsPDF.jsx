// saveInvoiceAsPDF.js
import { jsPDF } from 'jspdf';

const saveInvoiceAsPDF = (invoiceData) => {
  const doc = new jsPDF();

  // Add the title and other details to the PDF
  doc.setFont('Arial', 'bold');
  doc.text('Invoice', 20, 20);
  doc.setFont('Arial', 'normal');

  // Example: Add Table of data (you can customize it based on your invoice structure)
  const startY = 40;
  const rowHeight = 10;
  
  // Table header
  doc.text('Item Description', 20, startY);
  doc.text('Qty', 100, startY);
  doc.text('Rate', 140, startY);
  doc.text('Amount', 180, startY);

  // Add data rows
  invoiceData.forEach((item, index) => {
    const yPosition = startY + (index + 1) * rowHeight;
    doc.text(item.itemDescription, 20, yPosition);
    doc.text(item.qty.toString(), 100, yPosition);
    doc.text(item.rate.toString(), 140, yPosition);
    doc.text(item.amount.toFixed(2), 180, yPosition);
  });

  // Add totals at the bottom
  doc.text('Sub Total:', 140, startY + (invoiceData.length + 1) * rowHeight);
  doc.text(invoiceData.reduce((acc, row) => acc + row.amount, 0).toFixed(2), 180, startY + (invoiceData.length + 1) * rowHeight);

  // Save the PDF
  doc.save('invoice.pdf');
};

export default saveInvoiceAsPDF;
