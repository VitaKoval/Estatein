import { Button, Container } from '@/ui'
import Link from 'next/link'
import styles from './Footer.module.css'
import logo from '../../public/logo.png'
import Image from 'next/image'
import { Send } from '@/components/icons'
import { footerNavigationList } from './definition'
import NavigationList from './NavigationList'

function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.footer__top}>
          <div className={styles.footer__actions}>
            <Link href="/">
              <Image src={logo} alt="Logo Estatein" />
            </Link>
            <form className={styles.subscribe__form}>
              <input
                type="email"
                placeholder="Enter Your Email"
                className={styles.subscribe__input}
              />
              <Button
                type="submit"
                variant="transparent"
                Icon={Send}
                className={styles.subscribe__button}
              />
            </form>
          </div>
          <div className={styles.footer__navigation}>
            {footerNavigationList.map(({ title, navigation }) => (
              <div className={styles.navigation__wrap}>
                <NavigationList title={title} navigation={navigation} />
              </div>
            ))}
          </div>
        </div>
        <div className={styles.footer__bottom}></div>
      </Container>
    </footer>
  )
}

export default Footer
