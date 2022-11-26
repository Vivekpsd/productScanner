import {useState} from 'react'
import QrScanner from 'qr-scanner';
import React from 'react';
import { Grid ,Typography, Button, IconButton } from '@mui/material'
import { PhotoCamera } from '@mui/icons-material'

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
  
    return (
      <div className="App">
        <Typography variant='h3' align='center'>Scan your code</Typography>

        <Grid container style={{alignItems:"center", justifyContent:"center", marginTop:"40px"}}>
          <Grid xs={6}>
            <Button variant="contained" component="label">
              Upload
              <input hidden accept="image/*" multiple type="file" onChange={(e) => { readCode(e)}} />
            </Button>
          </Grid>
          <Grid xs={6}>
            <Typography variant='h6' align='center'><b>Code: </b> {result}</Typography>
          </Grid>
        </Grid>      
      </div>
    );
  }
  export default QRReader;
  