

import Image from 'next/image'
import styles from './Header.module.css'
import logo from '../../public/logo.png'
import { Button, SectionContainer } from '@/ui'
import { HeaderNavMenu } from '@/components'
import Link from 'next/link'

const pages = [
  {
    href: '/',
    label: 'Home',
  },
  {
    href: '/meals',
    label: 'About Us',
  },
  {
    href: '/community',
    label: 'Properties',
  },
  {
    href: '/meals/share',
    label: 'Services',
   
  },
]

function Header() {
  return (
      <header className={styles.header}>
        <SectionContainer>
          <div className={styles.header__inner}>
            <Link href='/'>
              <Image src={logo} alt='Logo Estatein' />
            </Link>
            <HeaderNavMenu pages={pages}/>
            <Button>Contact Us</Button>
          </div>
        </SectionContainer>
      </header>
  )
}

export default Header
