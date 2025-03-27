'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from './HeaderNavMenu.module.css'

function HeaderNavMenuItem({ label, href }) {
  const path = usePathname()
  const isActive = href === `${path}`

  return (
    <li>
      <Link
        href={href}
        className={`${styles.menu__link} ${isActive ? styles.active : ''}`}
      >
        {label}
      </Link>
    </li>
  )
}

export default HeaderNavMenuItem
