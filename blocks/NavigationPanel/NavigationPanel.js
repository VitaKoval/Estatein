import { House, Money, Building, Light } from '@/components/icons'
import Link from 'next/link'
import styles from './NavigationPanel.module.css'

const navigationList = [
  {
    id: 1,
    Icon: House,
    label: 'Find Your Dream Home',
    href: '#',
  },
  {
    id: 2,
    Icon: Money,
    label: 'Unlock Property Value',
    href: '#',
  },
  {
    id: 3,
    Icon: Building,
    label: 'Effortless Property Management',
    href: '#',
  },
  {
    id: 4,
    Icon: Light,
    label: 'Smart Investments, Informed Decisions',
    href: '#',
  },
]

function NavigationPanel() {
  return (
    <div className={styles.navigation}>
      <div className={styles.navigation__inner}>
        {navigationList.map(({ id, Icon, label, href }) => (
          <Link key={id} href={href} className={styles.navigation__item}>
            <div className={styles.navigation__icon}>
              <Icon width="24" />
            </div>
            <p className="medium">{label}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default NavigationPanel
