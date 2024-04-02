import React, {useState} from 'react';
import {Document, Page, pdfjs} from 'react-pdf';
import './PdfSummarizer.css';


pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
const PdfSummarizer = () => {
    const [file, setFile] = useState(null);
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    const [text, setText] = useState('');
    const [summary, setSummary] = useState('');
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');

    const onFileChange = async (event) => {
        const selectedFile = event.target.files[0];
        setFile(selectedFile);

        const reader = new FileReader();
        reader.onload = async (e) => {
            const buffer = e.target.result;
            const typedArray = new Uint8Array(buffer);
            const pdf = await pdfjs.getDocument(typedArray).promise;
            let fullText = '';

            for (let i = 1; i <= pdf.numPages; i++) {
                const page = await pdf.getPage(i);
                const pageText = await page.getTextContent();
                const pageString = pageText.items.map((item) => item.str).join('\n');
                fullText += pageString + '\n';
            }

            setText(fullText);

            const pdfInfo = await pdf.getMetadata();
            setTitle(pdfInfo.info.Title || 'Unknown Title');
            setAuthor(pdfInfo.info.Author || 'Unknown Author');
            setNumPages(pdf.numPages);
        };

        reader.readAsArrayBuffer(selectedFile);
    };
}
export default PdfSummarizer;