import Head from "next/head"
import ImageOfficial from "../components/ImageOfficial"
import ColorBlock from "../components/ColorBlock"
import TitleText from "../components/TitleText"

export default function HSR() {

  return (
    <>
    <Head>
      <title>John Cavaseno | Headshot & Resume</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="icon" type="image/gif/png" href="theater-icon-1.png" />
      <link rel="preconnect" href="https://fonts.gstatic.com"/>
      {/* <link href="https://fonts.googleapis.com/css2?family=Londrina+Outline&display=swap" rel="stylesheet"/> */}
      <link href="https://fonts.googleapis.com/css2?family=Bangers&family=Montserrat&display=swap" rel="stylesheet"/> 
    </Head> 
    <TitleText 
      fontFamily={`'Montserrat', serif`}
      color='#6699CC'
      placement={{
        top: 0,
        left: 0,
      }}
      size='8vw'
      padding='0 5vw'
      text='Headshot'
    />
    <TitleText 
      fontFamily={`'Montserrat', serif`}
      color='#FFFFFF'
      placement={{
        bottom: 0,
        right: 0,
      }}
      zIndex={1}
      size='8vw'
      padding='0 7vw'
      text='Resume'
    />
    <ColorBlock
      height='100vh'
      width='50vw'
      backgroundColor='#6699CC'
      placement={{
        bottom: 0,
        right: 0,
      }}
    />
    <ImageOfficial 
      source="/retouch2.jpg" 
      alternate="John Cavaseno Cool Look" 
      height='75vh'
      width='35vw'
      backgroundColor='#FFFFFF'
      placement={{
        top: '10vh',
        left: '2vw',
      }}
    />
    <ImageOfficial
      source="/jcResume.png" 
      alternate="John Cavaseno Cool Look" 
      height='75vh'
      width='35vw'
      backgroundColor='#414A4C'
      placement={{
        bottom: '10vh',
        right: '2vw',
      }}
    />
    </>
  )
}