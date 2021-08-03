import Head from 'next/head'
import ImageOfficial from '../components/ImageOfficial'
import ColorBlock from '../components/ColorBlock'
import TitleText from '../components/TitleText'

export default function Gallery() {

  return (
    <>
    <Head>
      <title>John Cavaseno | Gallery</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="icon" type="image/gif/png" href="theater-icon-1.png" />
      <link rel="preconnect" href="https://fonts.gstatic.com"/>
      <link href="https://fonts.googleapis.com/css2?family=Londrina+Outline&display=swap" rel="stylesheet"/>
    </Head> 
    <ColorBlock
        height='100vh'
        width='30vw'
        backgroundColor='#B31B1B'
        placement={{
          bottom: 0,
          right: '70vw',
        }}
      />
      <TitleText 
        fontFamily={`'Londrina Outline', serif`}
        color='#424242'
        placement={{
          top: 0,
          right: '2vw',
        }}
        size={'38vh'}
        text={'Gallery'}
      />
      <ImageOfficial
        source="/John_SKYE.jpg"
        alternate="John Cavaseno Sky"
        height='50vh'
        width='60vw'
        margin='0'
        placement={{
          bottom: '6vh',
          left: '6vw',
        }}
      />
    </>
  )
}