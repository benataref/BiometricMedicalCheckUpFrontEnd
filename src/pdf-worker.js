import { GlobalWorkerOptions } from 'react-pdf';
import pdfWorker from 'pdfjs-dist/build/pdf.worker.entry';

// Set the worker source for PDF.js
GlobalWorkerOptions.workerSrc = pdfWorker;
pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@3.0.279/build/pdf.worker.min.js`;
