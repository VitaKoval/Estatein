import styles from './page.module.css'
import { Intro, NavigationPanel } from '@/blocks'

export default function Home() {
  return (
    <main className={styles.main}>
      <Intro />
      <NavigationPanel />
    </main>
  )
}
