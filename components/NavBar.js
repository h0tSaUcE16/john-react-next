import styles from './NavBar.module.css'
import Link from 'next/link'

export default function NavBar () {
    return (
        <div 
            className={styles.nav}
        >
            <Link href='/home'>Home</Link>
            <Link href='/gallery'>Gallery</Link>
            <Link href='/hsr'>HSR</Link>
            <Link href='/reels'>Reels</Link>
            <Link href='/contact'>Contact</Link>
        </div>
    )
}