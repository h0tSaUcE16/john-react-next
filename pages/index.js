import styles from '../styles/Home.module.css'
import Layout from '../components/Layout'
import { 
  Container,
  Typography,
} from '@material-ui/core'

export default function Home() {
  return (
    <Layout>
    <Container className={styles.background} style={{maxWidth: '100vw'}}>
      <Container className={styles.welcome}>
        <Typography variant="h2" style={{color: 'aliceblue'}}>John Cavaseno</Typography>
        <Typography variant="h4" style={{color: '#99CCFF', paddingLeft: '2vw'}}>Actor | Dancer | Singer</Typography>
      </Container>
    </Container>
    </Layout>
  )
}
