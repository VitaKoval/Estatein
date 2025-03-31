import styles from './page.module.css'
import {
  CallToAction,
  FAQ,
  FeaturedProperties,
  Intro,
  NavigationPanel,
  Testimonials,
} from '@/blocks'

export default function Home() {
  return (
    <main className={styles.main}>
      <Intro />
      <NavigationPanel />
      <FeaturedProperties />
      <Testimonials />
      <FAQ />
      <CallToAction />
    </main>
  )
}
