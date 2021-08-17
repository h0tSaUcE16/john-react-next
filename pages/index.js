import Head from 'next/head'
import Link from 'next/link'
import ImageOfficial from '../components/ImageOfficial'
import ColorBlock from '../components/ColorBlock'
import TitleText from '../components/TitleText'
import NavBar from "../components/NavBar"
import { Sling as Hamburger } from 'hamburger-react'
import { useState } from 'react'
import { ArrowForward } from '@material-ui/icons'

export default function CoverPage() {
  const [ drawerOpen, setDrawerOpen ] = useState(false)

  return (
    <>
    <Head>
      <title>John Cavaseno | Actor, Dancer, Singer</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="icon" type="image/gif/png" href="theater-icon-1.png" />
      <link rel="preconnect" href="https://fonts.googleapis.com"/> 
      <link rel="preconnect" href="https://fonts.gstatic.com"/>
      {/* <link href="https://fonts.googleapis.com/css2?family=Bangers&family=Montserrat&display=swap" rel="stylesheet"/>  */}
      {/* <link href="https://fonts.googleapis.com/css2?family=Londrina+Outline&display=swap" rel="stylesheet"/> */}
      {/* <link href="https://fonts.googleapis.com/css2?family=Hahmlet:wght@300&display=swap" rel="stylesheet"/> */}
      {/* <link href="https://fonts.googleapis.com/css2?family=Oswald&display=swap" rel="stylesheet"/> */}
      {/* <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet"/> */}
      {/* <link href="https://fonts.googleapis.com/css2?family=Merriweather&display=swap" rel="stylesheet"/> */}
      <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@500&display=swap" rel="stylesheet"/>
    </Head> 
    <ImageOfficial 
      source="/John_0073.jpg" 
      alternate="John Cavaseno Cool Look" 
      height='80vh'
      width='40vw'
      backgroundColor="#FFFFFF"
    />
    <ColorBlock
      height='32vh'
      width='100vw'
      backgroundColor='#DEB887'
      placement={{
        bottom: 0,
      }}
    />
    <TitleText
      fontFamily={`'Cinzel', serif`}
      color='#424242'
      placement={{
        top: 120,
        left: '50vw',
      }}
      size='9vw'
      text='John Cavaseno'
    />

    {/* actor|dancer|singer color block and text */}
    <ColorBlock 
      height='8vh'
      width='100vw'
      // backgroundColor='#B31B1B' // maroonish
      backgroundColor='#424242'
      placement={{
        right: 0,
        bottom: '18vh',
      }}
    />
    <TitleText
      fontFamily={`'Cinzel', serif`}
      color='#FFFFFF'
      placement={{
        right: '8vw',
        bottom: '18vh',
      }}
      size='3vw'
      text='Actor | Dancer | Singer'
    />

    {/* LEARN MORE color block and text */}
    <ColorBlock 
      height='5.5vh'
      width='20vw'
      // backgroundColor='#B31B1B' // maroonish
      backgroundColor='#424242'
      placement={{
        right: 0,
        bottom: '5vh',
      }}
    />
    <Link href='/home'>
      <a><TitleText
        fontFamily={`'Cinzel', serif`}
        color='#FFFFFF'
        placement={{
          right: '2vw',
          bottom: '5vh',
        }}
        size='2.1vw'
      >
        Learn More <ArrowForward/>
      </TitleText></a>
    </Link>
    
    { drawerOpen ? (<NavBar />) : null}

      <div style={{
        position: 'absolute',
        top: 0,
        right: 0,
        zIndex: 100,
        margin: '1vh 1vw',
        backgroundColor: '#FFF',
        // boxShadow: '1px 1px 1px 1px rgba(0, 0, 0, 0.2)',
      }}>
        <Hamburger 
          direction='left' 
          toggled={drawerOpen} 
          toggle={() => { setDrawerOpen(!drawerOpen) }} 
        />
        </div>

    </>
  )
}

// transform ideas: tan from down, pic from left, name appear, then learn more from right