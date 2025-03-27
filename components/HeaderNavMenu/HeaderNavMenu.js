import HeaderNavMenuItem from './HeaderNavMenuItem'
import styles from './HeaderNavMenu.module.css'

function HeaderNavMenu({ pages }) {
  return (
    <nav>
      <ul className={styles.menu__wrap}>
        {pages.map(({ ...pageProps }) => (
          <HeaderNavMenuItem key={pageProps.label} {...pageProps} />
        ))}
      </ul>
    </nav>
  )
}

export default HeaderNavMenu
