import Head from 'next/head'
// Bootstrap Components
import { Container, Row } from 'react-bootstrap'
// Custom Components
import NavbarMenu from '../components/navbarmenu'
import Grid from '../components/grid'
import PageTitle from '../components/title'
import Footer from '../components/footer'


export default function Home() {
  return (
    <Container fluid className="nopad">
      <Head>
        <title>NextJS App Test</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <NavbarMenu></NavbarMenu>
      <PageTitle></PageTitle>
      <Grid></Grid>
      <Footer name="Stefex"></Footer>
        
    </Container>
  )
}
