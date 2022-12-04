import {useState} from 'react'
import QrScanner from 'qr-scanner';
import React from 'react';
import { Grid ,Typography, Button, Container} from '@mui/material'

function QRReader() {
    const [result, setResult] = useState("");

    const readCode = (e) => {
      const file = e.target.files[0];
      if (!file) {
        return;
      }
      QrScanner.scanImage(file, { returnDetailedScanResult: true })
      .then(result => setResult(result.data))
      .catch(e => console.log(e));
    }

    // Temporary product verification
    const verifyKey = () => {
      const key = localStorage.getItem('key');

      if (result === key) {
        alert("Product Verified");
      } else {
        alert("Product Not Verified");
      }
    }
    return (
      <Container style={{marginTop:'50px'}}>
        <Typography variant='h3' align='center'>Scan your code</Typography>

        <Grid container style={{alignItems:"center", justifyContent:"center", marginTop:"100px"}}>
          <Grid xs={4}>
            <Button variant="contained" component="label">
              Upload
              <input hidden accept="image/*" multiple type="file" onChange={(e) => { readCode(e)}} />
            </Button>
            &nbsp;&nbsp;
            <Button variant="contained" component="label" color="success" onClick={verifyKey}>
              Verify
            </Button>
          </Grid>
          <Grid xs={8}>
            <Typography variant='h6' align='center'><b>Code: </b> {result.substring(0, 5) + 'XXXXXX.....'}</Typography>
          </Grid>
        </Grid>      
      </Container>
    );
  }
  export default QRReader;
  