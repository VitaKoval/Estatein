import Link from 'next/link'
import styles from './Footer.module.css'

function NavigationList({ title, navigation }) {
  return (
    <div className={styles.navigation__wrap}>
      <h5 key={title} className={styles.navigation__title}>
        {title}
      </h5>
      <div className={styles.navigation__list}>
        {navigation.map(({ label, link }) => (
          <Link key={label} href={link} className={styles.navigation__item}>
            {label}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default NavigationList
