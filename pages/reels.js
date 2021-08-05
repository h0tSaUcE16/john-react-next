import Head from "next/head"
import ColorBlock from "../components/ColorBlock"

export default function Reels() {

  return (
    <>
    <Head>
      <title>John Cavaseno | Reels</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="icon" type="image/gif/png" href="theater-icon-1.png" />
      <link rel="preconnect" href="https://fonts.googleapis.com"/> 
      <link rel="preconnect" href="https://fonts.gstatic.com"/>
      {/* <link href="https://fonts.googleapis.com/css2?family=Bangers&family=Montserrat&display=swap" rel="stylesheet"/>  */}
      {/* <link href="https://fonts.googleapis.com/css2?family=Londrina+Outline&display=swap" rel="stylesheet"/> */}
      <link href="https://fonts.googleapis.com/css2?family=Hahmlet:wght@300&display=swap" rel="stylesheet"/>
      <link href="https://fonts.googleapis.com/css2?family=Oswald&display=swap" rel="stylesheet"/>
      <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet"/>
      <link href="https://fonts.googleapis.com/css2?family=Merriweather&display=swap" rel="stylesheet"/>
      {/* <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@500&display=swap" rel="stylesheet"/> */}
    </Head> 
    <ColorBlock
      height='100vh'
      width='15vw'
      backgroundColor='#303030'
      placement={{
        top: 0,
        left: 0,
      }}
    />
    <h1
      style={{
        width: '1px',
        wordWrap: 'break-word',
        fontFamily: 'Hahmlet',
        whiteSpace: 'pre-wrap',
        fontSize: '8vh',
        color: 'white',
        position: 'absolute',
        zIndex: 1,
        padding: '15vh 5.5vw'
      }}
    >
      DANCE
    </h1>
    {/* <h3>DANCE</h3>
    <h3>FIGHT</h3>
    <h3>SING</h3> */}
    <iframe 
      src="https://www.youtube.com/embed/LBwNaKJbw38" 
      allow='encrypted-media' 
      id='danceReel'
      style={{
        height: '80vh',
        width: '80vw',
        position: 'absolute',
        bottom: '4vh',
        right: '2vw',
        // margin: '10vh 5vw',
      }}
    />
    </>
  )
}

// const reels = ["https://www.youtube.com/embed/LBwNaKJbw38", "https://www.youtube.com/embed/iqYVwag3N7Y", "https://www.youtube.com/embed/g7aIWyoT-OA"];
// const reel = document.createElement("iframe"); // REEL
// reel.src = reels[0];
// reel.id = 'reel';
// // reel.allow = "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture";
// reel.allow = 'encrypted-media';