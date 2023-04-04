import React, { Component } from "react";
import { pdfjs } from "react-pdf";
import { Document, Page } from "react-pdf";
import myfile from "../../assets/docs/resume.pdf";
import "./MyResume.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

class MyResume extends Component {
  state = {
    numPages: null,
    pageNumber: 1,
  };

  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  };

  render() {
    const { pageNumber, numPages } = this.state;

    return (
      <div className="fragment_resume">
        <div className="resume_container">
          <Document file={myfile} onLoadSuccess={this.onDocumentLoadSuccess}>
            <Page pageNumber={pageNumber} />
          </Document>
          {/* <p>Page {pageNumber} of {numPages}</p> */}
        </div>
      </div>
    );
  }
}

export default MyResume;
