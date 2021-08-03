import Head from 'next/head'

export default function OldCover() {

  const homeContainer = {
    display: 'flex',
  }

  const pictureBox = {
    height: '100vh',
    width: '45vw',
    display: 'block',
    backgroundColor: 'aliceblue',
    // webkitBoxShadow: '3px 3px 5px 6px rgba(0, 0, 0, 0.1)',  /* Safari 3-4, iOS 4.0.2 - 4.2, Android 2.3+ */
    // mozBoxShadow: '3px 3px 5px 6px rgba(0, 0, 0, 0.1)',  /* Firefox 3.5 - 3.6 */
    // boxShadow: '3px 3px 5px 6px rgba(0, 0, 0, 0.1)',  /* Opera 10.5, IE 9, Firefox 4+, Chrome 6+, iOS 5 */

  }

  const welcomeText = {
    height: '90vh',
    width: '45vw',
    display: 'block',
    // webkitBoxShadow: '3px 3px 5px 6px rgba(0, 0, 0, 0.6)',  /* Safari 3-4, iOS 4.0.2 - 4.2, Android 2.3+ */
    // mozBoxShadow: '3px 3px 5px 6px rgba(0, 0, 0, 0.6)',  /* Firefox 3.5 - 3.6 */
    // boxShadow: '3px 3px 5px 6px rgba(0, 0, 0, 0.6)',  /* Opera 10.5, IE 9, Firefox 4+, Chrome 6+, iOS 5 */
    backgroundColor: 'aliceblue',
    padding: '5vh 5vw'
  }

  const horizontalRule = (<div style={{
    width: '100%',
    backgroundColor: '#212121',
    height: '2px',
    margin: '8px 0px',
  }}/>)

  return (
    <>
    <Head>
      <title>John Cavaseno</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="icon" type="image/gif/png" href="theater-icon-1.png" />
      <link rel="preconnect" href="https://fonts.gstatic.com"/>
      <link href="https://fonts.googleapis.com/css2?family=Bangers&family=Montserrat&display=swap" rel="stylesheet"/> 
      <link href="https://fonts.googleapis.com/css2?family=Londrina+Outline&display=swap" rel="stylesheet"/>
    </Head> 
    <div id="homeContainer" style={homeContainer}> {/* ADD ARIA LABELS */}
      <div id="pictureBox" style={pictureBox}>
        <img 
          src="/John_0001.jpg" 
          alt="John Cavaseno Main Headshot" 
          style={{
            height: '100%',
            width: '100%',
            objectFit: 'cover',
          }}
        />
      </div>
      <div id="welcomeText" style={welcomeText}>
      <p
          style={{
            fontSize: '2em', 
            fontFamily: `'Montserrat', sans-serif`, 
            color: '#6699CC',
            // padding: '1vw 4vw',
            // display: 'flex',
            // justifyContent: 'center',
          }}
        >
          Actor | Dancer | Singer
        </p>
        {/* {horizontalRule} */}
        {/* <div style={{height: '1vh'}}/> */}
        <div 
          style={{
            fontFamily: `'Londrina Outline', cursive`, 
            color: '#383838',
            padding: '16vh 0',
          }}
        >
        <h1 
          style={{
            fontSize: '5em', 
            margin: 0,
          }}
        >
          John Cavaseno
        </h1>
        <p style={{fontFamily: `'Montserrat', sans-serif`}}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        </div>
        {/* <div style={{height: '1vh'}}/> */}
        <button
          style={{
            fontSize: '2em', 
            fontFamily: `'Montserrat', sans-serif`, 
            color: 'aliceblue',
            backgroundColor: '#6699CC',
            border: 0,
            borderRadius: 5,
          }}
        >
          Enter
        </button>
      </div>
    </div>
    </>
  )
}
