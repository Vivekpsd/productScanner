
import { Grid ,Typography, Button, Container} from '@mui/material'
import banner from '../img/home_1.png'

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
            <Grid container style={{alignItems:"center", justifyContent:"space-between", paddingTop:'50px'}}>
                <Grid md={5} >
                    <Typography variant='h2'>What's the need?</Typography>
                    <br></br><br></br>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit facere atque rem, nostrum, deserunt soluta sapiente aliquam accusamus doloremque aspernatur, maiores corporis laudantium ex. Quam eaque dolores cumque asperiores saepe!</p>
                    <br></br>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum asperiores, quaerat soluta, illum rem obcaecati mollitia nostrum quia deserunt consequatur sapiente magni beatae harum cupiditate odit repellat hic quod unde!
                    Eligendi hic voluptatum doloremque natus at veritatis, blanditiis possimus tempora voluptate, incidunt odio distinctio iure rerum earum. Distinctio, ea hic reiciendis minus possimus velit rerum autem ipsum molestiae quod perspiciatis.</p>

                </Grid>
                <Grid md={6} >
                    <img src={banner} alt="" height={300} />
                </Grid>
            </Grid>
        </Container>
      </div>
    </>
  )
};

export default Home;