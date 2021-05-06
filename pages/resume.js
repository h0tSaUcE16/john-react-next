import Head from 'next/head'
import Layout from '../components/Layout'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { 
  Card,
  Container,
} from '@material-ui/core'

export default function Resume() {
  return (
    <Layout>
      <Image 
        src="/jcResume.png"
        alt="John's Resume"
        width={350}
        height={500}
        layout="intrinsic"
      />
      <Image 
        src="/John_0001.jpg"
        alt="John's Headshot #1"
        width={500}
        height={350}
        layout="intrinsic"
      />
    </Layout>
  )
}
