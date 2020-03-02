import Link from 'next/link'
import styles from './layout.module.css'
function Navigation() {
  return (
    <nav>
      <Link href="/">
        <a className={styles.link}>Home</a>
      </Link>
      <Link href="/about">
        <a  style={{ color: 'orange' }}>About</a>
      </Link>
    </nav>
  )
}

export default Navigation
