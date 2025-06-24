import "./App.css";
import MyTable from "./components/order/Table";

import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";

function App() {
  return (
    <div className="App">
      <PDFViewer height="360px">
        <MyTable invoiceId={1} />
      </PDFViewer>
      <PDFDownloadLink document={<MyTable invoiceId={1} />} fileName="test.pdf">
        {({ blob, url, loading, error }) =>
          loading ? "Loading document..." : "Download Pdf"
        }
      </PDFDownloadLink>
    </div>
  );
}

export default App;
