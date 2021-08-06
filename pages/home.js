import NavBar from "../components/NavBar"
import { Sling as Hamburger } from 'hamburger-react'
import { useState } from 'react'

export default function Home() {
  const [drawerOpen, setDrawerOpen] = useState(false)

  return (
    <>
      <h1>Hello WOOrld!</h1>

      { drawerOpen ? (<NavBar />) : null}

      <div style={{
        position: 'absolute',
        top: 0,
        right: 0,
        zIndex: 1,
        margin: '1vh 1vw',
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