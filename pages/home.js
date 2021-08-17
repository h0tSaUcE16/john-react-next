import Head from 'next/head'
import Link from 'next/link'
import ImageOfficial from '../components/ImageOfficial'
import ColorBlock from '../components/ColorBlock'
import TitleText from '../components/TitleText'
import NavBar from "../components/NavBar"
import { Sling as Hamburger } from 'hamburger-react'
import { useState } from 'react'

export default function Home() {
  const [drawerOpen, setDrawerOpen] = useState(false)

  return (
    <>
      <Head>
      <title>John Cavaseno | Learn About Me</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="icon" type="image/gif/png" href="theater-icon-1.png" />
      <link rel="preconnect" href="https://fonts.googleapis.com"/> 
      <link rel="preconnect" href="https://fonts.gstatic.com"/>
      {/* <link href="https://fonts.googleapis.com/css2?family=Bangers&family=Montserrat&display=swap" rel="stylesheet"/>  */}
      {/* <link href="https://fonts.googleapis.com/css2?family=Londrina+Outline&display=swap" rel="stylesheet"/> */}
      <link href="https://fonts.googleapis.com/css2?family=Hahmlet:wght@300&display=swap" rel="stylesheet"/>
      {/* <link href="https://fonts.googleapis.com/css2?family=Oswald&display=swap" rel="stylesheet"/> */}
      {/* <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet"/> */}
      {/* <link href="https://fonts.googleapis.com/css2?family=Merriweather&display=swap" rel="stylesheet"/> */}
      <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@500&display=swap" rel="stylesheet"/>
    </Head> 
    <ImageOfficial 
      source="/John_0001.jpg" 
      alternate="John Cavaseno Smiling" 
      height='80vh'
      width='40vw'
      backgroundColor="#FFFFFF"
    />
    <ColorBlock
      height='32vh'
      width='100vw'
      // backgroundColor='#DEB887'
      backgroundColor='#424242'
      placement={{
        top: '0',
      }}
    />
   <ColorBlock 
      height='15vh'
      width='100vw'
      // backgroundColor='#B31B1B' // maroonish
      backgroundColor='#DEB887'
      placement={{
        right: 0,
        top: '12vh',
      }}
    /> 
    <TitleText
      fontFamily={`'Cinzel', serif`}
      color='#FFF'
      placement={{
        top: '12vh',
        right: '2vw',
      }}
      size='7vw'
      text='Welcome'
    />

    <TitleText
      fontFamily={`'Hahmlet', serif`}
      color='#424242'
      placement={{
        top: '36vh',
        right: '2vw',
      }}
      size='1.2vw'
      extraStyle={{
        width: '50vw',
      }}
    >
      Hi, I’m John.<br/><br/> 
      In the 4th grade, my Mom signed me up for the school play. The show we performed was Annie, and I played Sandy. That was all I needed to be hooked. (Thanks Mom!)<br/><br/> 
      From there, I did lots of shows in-and-out of school, and graduated from SUNY Cortland with a degree in Musical Theater.<br/><br/>
      Other than theater, I love Superheroes (DC), Video Games (Nintendo), and Baseball (Yankees). I also read too much for my own good.<br/><br/>
      Besides performing, I also enjoy directing, choreography, stage combat, and intimacy design. <br/><br/> 
      Collaboration is essential to story telling and I truly believe all aspects of a production deserve respect and attention. 
    </TitleText>


    {/* hamburger/navigation */}
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