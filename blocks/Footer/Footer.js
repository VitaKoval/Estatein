import { Button, Container } from '@/ui'
import Link from 'next/link'
import styles from './Footer.module.css'
import logo from '../../public/logo.png'
import Image from 'next/image'
import { Facebook, LinkedIn, Send, YouTube } from '@/components/icons'
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
              <NavigationList
                key={title}
                title={title}
                navigation={navigation}
              />
            ))}
          </div>
        </div>
      </Container>
      <div className={styles.footer__bottom}>
        <Container>
          <div className={styles.footer__policy}>
            <div className={styles.policy__terms}>
              <p>@2023 Estatein. All Rights Reserved.</p>
              <Link href="#">Terms & Conditions</Link>
            </div>
            <div className={styles.policy__social}>
              <Link href="#" className={styles.social__item}>
                <Facebook color="#FFFFFF" width="24" />
              </Link>
              <Link href="#" className={styles.social__item}>
                <LinkedIn color="#FFFFFF" width="24" />
              </Link>
              <Link href="#" className={styles.social__item}>
                <YouTube color="#FFFFFF" width="24" />
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  )
}

export default Footer
