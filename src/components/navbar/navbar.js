import React from 'react'
import { Link } from 'gatsby'
import styles from './navbar.module.css'

const NavBar = ({menuLinks}) => (
  <div className={styles.navbarContainer}>
    <div className={styles.navbarLeft}>
      <p>MANASA TIPPARAM</p>
    </div>
    <div className="navbar-right">
      <nav className={styles.nav}>
      {
        menuLinks.map(link=>
              <li className={styles.li} key={link.name}>
                <Link className={styles.link} to={link.link} activeStyle={{color: '#007AFF'}}>{link.name}</Link>
              </li>)
      }
      </nav>
    </div>
  </div>
)

export default NavBar
