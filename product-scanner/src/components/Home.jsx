
import { Grid ,Typography, Button, Container} from '@mui/material'
import banner from '../img/home_1.png'
import fakeProducts from '../img/img_2_home.jpg'

const Home = () => {
  return (
    <>
      <div style={{height:"400px", backgroundColor:"black"}} >
        <Container>
            <Grid container style={{alignItems:"center", justifyContent:"center", paddingTop:'50px', color:'white'}}>
                <Grid md={6} >
                    <img src={banner} alt="" height={300} />
                </Grid>
                <Grid md={6} >
                    <Typography variant='h3'>Fake Product Detection using <span style={{color:'#40c4ff'}}>BLOCKCHIAN TECHNOLOGY</span></Typography>
                </Grid>
            </Grid>
        </Container>
        <Container  style={{marginTop:'50px'}}>
            <Grid container style={{alignItems:"center", justifyContent:"space-between", paddingTop:'70px'}}>
                <Grid md={5} >
                    <Typography variant='h2'>What's the need?</Typography>
                    <br></br><br></br>
                    <p>The blockchain is a distributed database that allows for secure, transparent, and tamper-proof transactions. It has the potential to revolutionize research and development by streamlining the process and reducing the risk of data fraud.  
                    </p>
                    <ul>
                        <li>...</li>
                        <li>...</li>
                        <li>...</li>
                    </ul>
                </Grid>
                <Grid md={6} >
                    <img src={fakeProducts} alt="" height={300} />
                </Grid>
            </Grid>
        </Container>
      </div>
    </>
  )
};

export default Home;