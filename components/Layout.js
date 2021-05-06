import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from '../styles/Home.module.css'
import { 
  AppBar,
  Container,
  Tabs,
  Tab,
  Typography,
} from '@material-ui/core'
import {
  AttachFileRounded,
  HomeRounded,
  PermContactCalendarRounded,
  PhotoCameraRounded,
  PhotoLibraryRounded,
  VideoLibraryRounded,
} from '@material-ui/icons'

export default function Layout(props) {
  const [tab, setTab] = useState(0)

  const { asPath } = useRouter()

  useEffect(() => {
    switch (asPath) {
      case '/':
        setTab(0)
        break
      case '/reels':
        setTab(1)
        break
      case '/resume': // headshot & resume
        setTab(2)
        break
      case '/gallery':
        setTab(3)
        break
      case '/clock': // will be contact
        setTab(4)
        break
      default:
        setTab(0)
        break
    }
  }, [])

  return (
    <Container className={styles.container} style={{maxWidth: '100vw', padding: 0}}>
      <div>
        <Head>
          <title>John Cavaseno | Actor | Dancer | Singer</title>
          <link rel="icon" href="/theater-icon-1.png" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
        </Head>
      </div>
      {props.children}
      <AppBar style={{backgroundColor: '#99CCFF', top: 'unset'}} className={styles.footer}>
        <Tabs centered value={tab} >
          <Link href="/" passHref>
            <Tab label="Home" component="a" icon={<HomeRounded />} style={{opacity: 1}} onClick={() => setTab(0)}/>
          </Link>
          <Link href="/reels" passHref>
            <Tab label="Reels" component="a" icon={<VideoLibraryRounded />} style={{opacity: 1}} onClick={() => setTab(1)}/>
          </Link>
          <Link href="/resume" passHref>
            <div>
            <Tab label="Headshot" component="a" icon={<PhotoCameraRounded />} style={{opacity: 1}} onClick={() => setTab(2)}/>
            <Tab label="Resume" component="a" icon={<AttachFileRounded />} style={{opacity: 1}} onClick={() => setTab(2)}/>
            </div>
          </Link>
          <Link href="/gallery" passHref>
            <Tab label="Gallery" component="a" icon={<PhotoLibraryRounded />} style={{opacity: 1}} onClick={() => setTab(3)}/>
          </Link>
          <Link href="/clock" passHref>
            <Tab label="Contact" component="a" icon={<PermContactCalendarRounded />} style={{opacity: 1}} onClick={() => setTab(4)}/>
          </Link>
        </Tabs>
      </AppBar>
    </Container>
  )
}