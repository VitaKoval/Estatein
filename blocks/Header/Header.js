
import Image from 'next/image'
import Link from 'next/link'
import { HeaderNavMenu } from '@/components'
import { Button, SectionContainer } from '@/ui'
import styles from './Header.module.css'
import logo from '../../public/logo.png'
import pages from './definition'

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
