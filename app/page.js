import styles from './page.module.css'
import { FeaturedProperties, Intro, NavigationPanel } from '@/blocks'

export default function Home() {
  return (
    <main className={styles.main}>
      <Intro />
      <NavigationPanel />
      <FeaturedProperties />
    </main>
  )
}
