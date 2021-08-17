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
      {/* <link href="https://fonts.googleapis.com/css2?family=Bangers&family=Montserrat&display=swap" rel="stylesheet"/>  */}
      <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@500&display=swap" rel="stylesheet"/>
</Head> 
    <TitleText 
      fontFamily={`'Cinzel', serif`}
      // color='#6699CC'
      color='#424242'
      placement={{
        top: 0,
        left: 0,
      }}
      size='7vw'
      padding='2vh 6vw 0 6vw'
      text='Headshot'
    />
    <TitleText 
      fontFamily={`'Cinzel', serif`}
      color='#FFFFFF'
      placement={{
        bottom: 0,
        right: 0,
      }}
      zIndex={1}
      size='7vw'
      padding='0 11vw 2vh 11vw'
      text='Resume'
    />
    <ColorBlock
      height='100vh'
      width='50vw'
      // backgroundColor='#6699CC'
      backgroundColor='#424242'
      placement={{
        bottom: 0,
        right: 0,
      }}
    />
    <a target='_blank' href='/retouch2.jpg'>
      <ImageOfficial 
        source="/retouch2.jpg" 
        alternate="John Cavaseno Headshot" 
        height='75vh'
        width='35vw'
        backgroundColor='#DEB887'
        placement={{
          top: '10vh',
          left: '2vw',
        }}
      />
    </a>
    <a target='_blank' href='/jcResume.pdf'>
      <ImageOfficial
        source="/jcResume.png" 
        alternate="John Cavaseno Resume" 
        height='75vh'
        width='35vw'
        backgroundColor='#DEB887'
        placement={{
          bottom: '10vh',
          right: '2vw',
        }}
      />
    </a>

    <TitleText 
      fontFamily={`'Cinzel', serif`}
      color='#DEB887'
      placement={{
        top: '34.8vh',
        left: '34.8vw',
      }}
      zIndex={1}
      size='12vw'
      padding='0 11vw 2vh 11vw'
      text='&'
    />
    </>
  )
}