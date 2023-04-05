import './App.css';
import Invoice from './components/order/Invoice';

import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer';

function App() {
  return (
    <div className='App'>
      <PDFViewer height='360px'>
        <Invoice invoiceId={1} />
      </PDFViewer>
      <PDFDownloadLink document={<Invoice invoiceId={1} />} fileName='test.pdf'>
        {({ blob, url, loading, error }) =>
          loading ? 'Loading document...' : 'Download Pdf'
        }
      </PDFDownloadLink>
    </div>
  );
}

export default App;
