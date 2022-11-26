import {useState} from 'react'
import QRCode from 'react-qr-code'

function App() {

  const [inputValue, setInputValue] = useState("");

  return (
    <div className="App">
      <h1>QR Code Generator and Downloader</h1>

      <div style={{ height: "auto", margin: "0 auto", maxWidth: 64, width: "100%" }}>
        <QRCode
          size={256}
          style={{ height: "auto", maxWidth: "100%", width: "100%" }}
          value={inputValue}
          viewBox={`0 0 256 256`}
        />
      </div>

      <input type="text" onChange={(e) => {
        setInputValue(e.target.value)
      }}></input>
    </div>
  );
}

export default App;
