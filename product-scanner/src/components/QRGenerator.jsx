import {useState} from 'react'
import QRCode from 'react-qr-code'
import React from 'react';
import { Grid, TextField, Button, Typography, Container } from '@mui/material'

function QRScanner() {

    const [inputValue, setInputValue] = useState("");
  
    // Downlaod QR Code image
    const download = () => {
      const svg = document.getElementById("QRCode");
      const svgData = new XMLSerializer().serializeToString(svg);
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      const img = new Image();
      img.onload = () => {
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0);
        const pngFile = canvas.toDataURL("image/png");
        const downloadLink = document.createElement("a");
  
        // name of image
        downloadLink.download = `${inputValue}`;
        downloadLink.href = `${pngFile}`;
        downloadLink.click();
      };
      img.src = `data:image/svg+xml;base64,${btoa(svgData)}`;
    }
  
  
    return (
      <Container>
        <Typography variant='h3' align='center'> Add Product & Generate QR Code</Typography>

        <Grid container style={{alignItems:"center", justifyContent:"center", marginTop:"100px"}}>
          <Grid xs={12} md={8} >
            <div>
              <TextField id="standard-basic" label="Hash Code" variant="standard" fullWidth onChange={(e) => {
              setInputValue(e.target.value)}}/>
            </div>
          </Grid>
          <Grid xs={12} md={4}>
            <div style={{ height: "auto", margin: "0 auto", maxWidth: 120, width: "100%", 
                          border: "3px solid black", padding: "10px", borderRadius: "5px"
            }}>
              <QRCode
                size={500}
                style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                value={inputValue}
                viewBox={`0 0 500 500`}
                id="QRCode"
              />
              <Button variant="contained" color="success" onClick={download} size="medium" style={{ marginTop: "15px"}}> Download </Button>
            </div>
          </Grid>
        </Grid>    
      </Container>
    );
  }
  
  export default QRScanner;
  